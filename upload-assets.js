let fs = require('fs')
let path = require('path')
let Redwood = require('@redwood.dev/client').default

async function main() {
    let client = Redwood.createPeer({
        httpHost:    'http://localhost:8080',
        rpcEndpoint: 'http://localhost:8081',
    })

    // Authorize with the node over the insecure RPC connection. This gives us
    // a JSON web token (JWT) that allows us to send transactions from the
    // identity of the node itself, rather than a browser-based identity.
    let ucan = await client.rpc.ucan()
    client.setUcan(ucan)

    let patches = []
    for await (const filename of walk('./build/')) {
        let { sha3 } = await client.storeBlob(fs.createReadStream(filename))

        let keypath = path.relative('build', filename)
                          .split(path.sep)
                          .map(part => `["${part}"]`)
                          .join('')

        patches.push(`${keypath} = ` + Redwood.utils.JSON.stringify({
            'Content-Type': 'link',
            'value': `blob:sha3:${sha3}`
        }))
    }

    await client.put({
        stateURI: 'example.project/foo',
        patches: patches,
    })
}

async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name)
        if (d.isDirectory()) yield* await walk(entry)
        else if (d.isFile()) yield entry
    }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
