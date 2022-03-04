
# Getting started with Redwood React

[@redwood.dev/react documentation](https://github.com/redwood/redwood.js/tree/master/react)  
[@redwood.dev/client documentation](https://github.com/redwood/redwood.js/tree/master/client)  

**Table of contents**

1. [Obtain the Redwood binary](https://github.com/redwood/redwood-example-react#obtain-the-redwood-binary)  
1. [Run Redwood](https://github.com/redwood/redwood-example-react#run-redwood)  
1. [Create a state tree](https://github.com/redwood/redwood-example-react#create-a-state-tree)  
1. [Start the frontend dev server](https://github.com/redwood/redwood-example-react#start-the-frontend-dev-server)  
1. [Going to production](https://github.com/redwood/redwood-example-react#going-to-production)  
1. [Chat with friends over the P2P network](https://github.com/redwood/redwood-example-react#chat-with-friends-over-the-p2p-network)


## Obtain the Redwood binary

**Download binary from Github**

Binaries are available for all platforms (Mac, Linux, Windows) at https://github.com/redwood/redwood/releases

**Build from source**

Requires Go 1.18. See the following resources to install Go:
- https://go.dev/dl/
- https://go.dev/doc/install

```sh
$ git clone https://github.com/redwood/redwood
$ cd redwood/embed
$ yarn && yarn build
$ cd ../cmd/redwood
$ go build .
```


## Run Redwood

```sh
$ redwood -p password.txt -c .redwoodrc
```


## Create a state tree

```sh
$ node setup.js
```

As you develop your application, you can modify this script just as you would modify a traditional database migration.


## Start the frontend dev server

```sh
$ yarn && yarn start
```

## Going to production

Once you have a stable build of your application, you can upload your assets directly to the Redwood node, which will serve them like any other web server.

Build the application:

```sh
$ yarn build
```

Run the provided `upload-assets.js` script:

```sh
$ node upload-assets.js
```

And navigate to http://localhost:8080.


## Chat with friends over the P2P network

After uploading your assets to your node, you and your friends can chat with one another over the peer-to-peer network managed by the node.

Your friends will simply need to:
1. Download (or build) Redwood
2. Run it (they can use the `.redwoodrc` config file from this repository, although the default Redwood config should work equally well)
3. Once Redwood is started, ask your friends to run the following command in the Redwood console:
    ```sh
    tree subscribe example.project/foo
    ```
4. All of the nodes will begin syncing. After a few moments, your friends will be able to navigate to http://localhost:8080 to chat with you.







