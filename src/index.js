import React from 'react'
import ReactDOM from 'react-dom'
import Redwood from '@redwood.dev/client'
import { RedwoodProvider, useStateTree } from '@redwood.dev/react'
import styled from 'styled-components'
import ChatApp from './ChatApp'
import StateTreeDebugView from './StateTreeDebugView'

const Layout = styled.div`
    display: flex;
`

const Panel = styled.div`
    max-width: 50%;
    flex-grow: 1;
`

let identity = Redwood.identity.random()

ReactDOM.render(
    <RedwoodProvider
        httpHost="http://localhost:8080"
        identity={identity}
        useWebsocket={true}
    >
        <Layout>
            <Panel><ChatApp /></Panel>
            <Panel><StateTreeDebugView /></Panel>
        </Layout>
    </RedwoodProvider>
, document.getElementById('root'))

