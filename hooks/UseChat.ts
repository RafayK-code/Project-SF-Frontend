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

// Gets all the chat info for a chat with the specified id
export function useChat(chatId: number) {
    const [chat, setChat] = useState<Chat>(defaultChat)

    useEffect(() => {
        fetch(url + "/read/chat/" + chatId)
            .then(res => res.json())
            .then((res: Chat) => {
                setChat(res)
            })
    })

    return chat
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