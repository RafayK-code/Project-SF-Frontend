import { useEffect, useState } from "react";
import { url } from "./TestData";

interface Member {
    id: number,
    name: string,
    avatar_link: string,
    role: string
}

interface Chat {
    id: number,
    name: string,
    picture_link: string,
    member_limit: number,
    is_public: boolean,
    type: ChatType,
    create_ts: string,
    course_id: number,
    course_name: string,
    members: Member[],
    member_count: number
}

enum ChatType {
    GROUP = "GROUP",
    DIRECT = "DIRECT"
}
interface ChatReturn {
    chat: Chat,
    hydrated: boolean
}

/** 
    Returns all the data for a chat

    @param chatId - the ID of the chat that the data will come from

    @returns the chat along with hydrated which becomes true when the data has finished being fetched
*/
export function useChat(chatId: number): ChatReturn {
    const [chat, setChat] = useState<Chat>(defaultChat)
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        fetch(url + "/read/chat/" + chatId)
            .then(res => res.json())
            .then((res: Chat) => {
                setChat(res)
                setHydrated(true)
            })
    })

    return { chat: chat, hydrated: hydrated }
}

// Default data, should never be shown
const defaultChat: Chat = {
    id: -1,
    name: "default",
    picture_link: "none",
    member_limit: 50,
    is_public: false,
    type: ChatType.DIRECT,
    create_ts: "1",
    course_id: -1,
    course_name: "not a course",
    members: [],
    member_count: 1
}