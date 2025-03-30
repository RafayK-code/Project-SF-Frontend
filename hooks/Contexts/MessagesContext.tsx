
import React, { useEffect } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { getInbox } from '../GetHooks/useInbox';
import { getMessages, MessageReturn } from '../GetHooks/UseMessages';
import { id } from '../TestData';

// The default value for the reducer
const initialMessages: MessageContext = {
    messages: []
}

// Message context
const MessageContext = createContext<MessageContext>(initialMessages);



interface MessageContext {
    messages: {
        chats: MessageReturn,
        state: "READY" | "LOADING" | "SHOULDLOAD",
        chatId: number
    }[]
}

const MessageDispatchContext = createContext<React.Dispatch<MessageAction>>(() => null);

/**
 *  This gets the context for the users messages
 * 
 *  Actions can be preformed from useMessageDispatchContext()
 * 
 * @returns a context which can be used to access the users messages
 */
export function useMessageContext() {
    return useContext(MessageContext)
}
/**
 *  This gets the context for the messages dispatch, use this to make changes to the users messages, such as reload, or insert a new message
 * 
 *  Possible actions that can be made on a chat
 *  - RELOAD - causes a fetch of the data and will be updated when the request comes back, chatId must be defined
 *  - SET - allows a specific chat to be set, this is not recommended to be use, this is used for internal functions, chatId and messages must both be defined 
 *  - LOADING - this sets the chat to the loading state, this is not recommended to be used, this is used for internal functions, chatId must be defined
 *  - INSERT - this inserts a new chat, both chatId and messages must be defined
 * 
 *  The data can be read from useMessagesContext()
 * 
 * @returns a context which can be used to apply actions to the users messages
 */
export function useMessageDispatchContext() {
    return useContext(MessageDispatchContext)
}

interface MessageProviderProps {
    children?: React.ReactNode
}

/**
 *  This is the Messages provider, wrap this around a high level component to access the users messages from its children
 */
export function MessagesProvider(props: MessageProviderProps) {
    // The reducers is stored here
    const [messages, dispatch] = useReducer(
        messagesReducer, initialMessages
    )
    // This useEffect is called whenever the messages changes
    // effectively this if for making requests to the back end when the state is updated
    useEffect(() => {
        // Goes through all the chats and looks at the state and makes requests accordingly
        messages.messages.forEach((chat) => {
            if (chat.state == "SHOULDLOAD") {
                // sets the chat state to loading
                dispatch({ type: "LOADING", chatId: chat.chatId })
                getMessages(chat.chatId)
                    .then(mesg => {
                        // Sets the chat when the request is returned
                        dispatch({ type: 'SET', messages: mesg, chatId: chat.chatId })
                    })
            }
        })
    }, [messages])

    // gets the messsages initally, this should only happen on load
    // this should be changed to loading from persistant state and
    // only updating if the most recent chat is past the past update time
    // this is future feature
    useEffect(() => {
        // Gets the inbox
        getInbox(id)
            .then(inbox => {
                // Loops through all the chats in the inbox and inserts them accordingly
                inbox.forEach(chat => {
                    getMessages(chat.id)
                        .then(mesg => {
                            dispatch({ type: "INSERT", messages: mesg, chatId: chat.id })
                        })
                })
            })
    }, [])

    // Contexts are provided to the children
    return (
        <MessageContext.Provider value={messages}>
            <MessageDispatchContext.Provider value={dispatch}>
                {props.children}
            </MessageDispatchContext.Provider>
        </MessageContext.Provider>
    );
}

// These are the actions that can be performed on a chat
type MessageAction = {
    type: "RELOAD",
    chatId: number
} | {
    type: "SET",
    chatId: number,
    messages: MessageReturn
} | {
    type: "LOADING",
    chatId: number
} | {
    type: "INSERT",
    chatId: number,
    messages: MessageReturn
}


// The reducer function
// This is a bit ugly
// Might abstract away but works for now
function messagesReducer(allMessages: MessageContext, action: MessageAction): MessageContext {
    switch (action.type) {
        case "RELOAD": {

            console.log("Reloading Message Id: " + action.chatId)
            var messages = [...allMessages.messages]
            var affectedIndex = messages.findIndex((messg) => {
                return messg.chatId == action.chatId
            })
            const mesg = messages[affectedIndex]
            mesg.state = "SHOULDLOAD"
            messages = messages.filter((messg) => {
                return messg.chatId != action.chatId
            })
            return {
                messages: [mesg, ...messages]
            }
        }
        case "LOADING": {
            console.log("Loading Messages")
            var messages = [...allMessages.messages]
            var affectedIndex = messages.findIndex((messg) => {
                return messg.chatId == action.chatId
            })
            const mesg = messages[affectedIndex]
            mesg.state = "LOADING"
            messages = messages.filter((messg) => {
                return messg.chatId != action.chatId
            })
            return {
                messages: [mesg, ...messages]
            }
        }
        case "SET": {
            console.log("Messages set")
            var messages = [...allMessages.messages]
            var affectedIndex = messages.findIndex((messg) => {
                return messg.chatId == action.chatId
            })
            const mesg = messages[affectedIndex]
            mesg.chats = action.messages
            messages = messages.filter((messg) => {
                return messg.chatId != action.chatId
            })
            return {
                messages: [mesg, ...messages]
            }
        }
        case "INSERT": {
            return {
                messages: [...allMessages.messages, {
                    chats: action.messages,
                    state: "READY",
                    chatId: action.chatId
                }]

            }
        }
        default: {
            console.log("default")
            return allMessages;
        }
    }
}