import { useEffect, useState } from "react";
import { url } from "../TestData";

interface Message {
    id: number,
    content: string,
    create_ts: string,
    user_id: number,
    user: {
        id: number,
        name: string,
        avatar_link: string
    }
}

export interface MessageReturn {
    messages: Message[],
    pagination: {
        has_next: boolean,
        has_prev: boolean,
        page: number,
        per_page: number,
        total_items: number,
        total_pages: number
    }
}

/** 
    Returns all the messages for a chatId

    @param chatId - the ID of the chat that the messages will come from

    @returns a list of messages
*/
export function UseMessages(chatId: number) {
    const [messages, setMessages] = useState<Message[]>([])
    useEffect(() => {
        getMessages(chatId)
            .then((res) => {
                setMessages(res.messages)
            })
    }, [])


    return messages
}

/**
 *  The nonhook version of getMessages returns are Promise of which will hold the messages and pagination information
 * 
 * @param chatId - The chatId from which to fetch the messages from
 * @returns A promise will the messages and the pagination information
 */
export function getMessages(chatId: number): Promise<MessageReturn> {
    return fetch(url + "/read/chat/" + chatId + "/messages")
        .then(res => {
            if (res.status == 200) {
                return res.json()
            } else {
                return blankPagination
            }

        })
        .then((res: MessageReturn) => {
            return res
        })
        .catch(() => {
            return blankPagination
        })
}

export const blankPagination: MessageReturn = {
    messages: [],
    pagination: {
        has_next: false,
        has_prev: false,
        page: 0,
        per_page: 0,
        total_items: 0,
        total_pages: 0
    }
}