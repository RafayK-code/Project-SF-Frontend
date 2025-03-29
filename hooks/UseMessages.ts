import { useEffect, useState } from "react";
import { url } from "./TestData";

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

// Gets all the messages for a chat
export function UseMessages(chatId: number) {
    const [messages, setMessages] = useState<Message[]>([])
    useEffect(() => {
        fetch(url + "/read/chat/" + 2 + "/messages")
            .then(res => res.json())
            .then((res) => {
                setMessages(res.messages)
            })
    }, [])


    return messages
}