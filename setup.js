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

    // Create our initial state
    await client.put({
        stateURI: 'example.project/foo',
        id: Redwood.utils.genesisTxID,
        patches: [
            ' = ' + Redwood.utils.JSON.stringify({
                'Merge-Type': {
                    'Content-Type': 'resolver/dumb',
                    'value': {}
                },
                'messages': [],
            }),
        ],
    })
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
