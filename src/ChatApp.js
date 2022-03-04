import { useRef, useCallback } from 'react'
import { useStateTree, useRedwood } from '@redwood.dev/react'
import styled from 'styled-components'
import { strToColor, uniqueKey } from './utils'

function ChatApp() {
    let { identity } = useRedwood()
    let [messages, setMessages] = useStateTree('example.project/foo', '.messages')
    let inputRef = useRef()

    let onClickSend = useCallback(() => {
        // Append a message to the end of the `messages` array
        setMessages('[-0:-0]', [{
            sender: identity ? identity.address : '????',
            text:   inputRef.current.value,
        }])
        inputRef.current.value = ''
    }, [setMessages, identity])

    return (
        <div>
            <YourAddress>Your address: {identity.address}</YourAddress>

            <div>
                {(messages || []).map((msg, i) => (
                    <Message senderAddress={msg.sender} key={uniqueKey(msg, i)}>
                        <MessageSender>{msg.sender}</MessageSender>:
                        <MessageText>{msg.text}</MessageText>
                    </Message>
                ))}
            </div>

            <input ref={inputRef} />
            <button onClick={onClickSend}>Send</button>
        </div>
    )
}

const YourAddress = styled.div`
    margin-bottom: 20px;
`

const Message = styled.div`
    padding: 10px;
    margin: 10px;
    background-color: ${props => strToColor(props.senderAddress)};
    max-width: 500px;
    border-radius: 4px;
`

const MessageSender = styled.span`
    font-weight: 700;
`

const MessageText = styled.span`
    margin-left: 10px;
`

export default ChatApp
