import React from 'react'
import { useStateTree } from '@redwood.dev/react'
import styled from 'styled-components'


function StateTreeDebugView() {
    let [state] = useStateTree('example.project/foo')
    return (
        <div style={{ backgroundColor: '#d3d3d3', padding: 20 }}>
            <strong>State tree:</strong>
            <code><pre>{JSON.stringify(state, null, 4)}</pre></code>
        </div>
    )
}

export default StateTreeDebugView
