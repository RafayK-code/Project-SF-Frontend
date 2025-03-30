
import React, { useEffect } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { Chat, getInbox } from '../GetHooks/useInbox';
import { id } from '../TestData';

// This says the we should load on appear
// The default value for the reducer
const initialInbox: InboxContext = {
  chats: [],
  state: "SHOULDLOAD"
}

const InboxContext = createContext<InboxContext>(initialInbox);


// This is the interface the inbox context returns, with all the chats and the state of the inbox
interface InboxContext {
  chats: Chat[],
  state: "READY" | "LOADING" | "SHOULDLOAD"
}

const InboxDispatchContext = createContext<React.Dispatch<InboxAction>>(() => null);

/**
 *  This gets the context for the users inbox
 * 
 *  Actions can be preformed on the inbox using useInboxDispatchContext()
 * 
 * @returns a context which can be used to access the users inbox
 */
export function useInboxContext() {
  return useContext(InboxContext)
}
/**
 *  This gets the context for the inbxo dispatch, use this to make changes to the users inbox
 * 
 *  Possible Actions
 *  - RELOAD - causes the inbox to be reloaded
 *  - SET - this sets the inbox to the specified value, this should not be used and is only for internal use, payload must be defined
 *  - LOADING - sets the inbox state to loading
 * 
 *  The Data can be read from useInboxContext()
 * 
 * @returns a context which can be used to apply actions to the users inbox
 */
export function useInboxDispatchContext() {
  return useContext(InboxDispatchContext)
}
interface InboxProviderProps {
  children?: React.ReactNode
}

/**
 *  This is the Inbox provider wrap this around a high level component to access the users inbox from its children
 */
export function InboxProvider(props: InboxProviderProps) {
  // The reducers is stored here
  const [inbox, dispatch] = useReducer(
    inboxReducer, initialInbox
  )

  // This is called whenever the state of the inbox is changed
  useEffect(() => {
    // If the state is should load then reload the inbox
    if (inbox.state == "SHOULDLOAD") {
      // Sets the state to loading
      dispatch({ type: "LOADING" })
      getInbox(id).then((res: Chat[]) => {
        // Sets the inbox
        dispatch({ type: "SET", payload: res })
      })
    }
  }, [inbox.state])

  // The contexts are provided
  return (
    <InboxContext.Provider value={inbox}>
      <InboxDispatchContext.Provider value={dispatch}>
        {props.children}
      </InboxDispatchContext.Provider>
    </InboxContext.Provider>
  );
}

// An interface for our actions
type InboxAction = {
  type: "RELOAD"
} | {
  type: "SET",
  payload: Chat[]
} | {
  type: "LOADING"
}


// The reducers, add some more possible actions
function inboxReducer(inbox: InboxContext, action: InboxAction): InboxContext {
  switch (action.type) {
    case "RELOAD": {
      console.log("Reloading inbox")
      return {
        chats: [...inbox.chats],
        state: "SHOULDLOAD"
      }
    }
    case "LOADING": {
      console.log("Loading Inbox")
      return {
        chats: [...inbox.chats],
        state: "LOADING"
      }
    }
    case "SET": {
      console.log("Inbox set")
      return {
        chats: action.payload,
        state: "READY"
      }
    }
    default: {
      console.log("default")
      return inbox;
    }
  }
}