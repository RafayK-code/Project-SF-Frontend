import { useEffect, useState } from "react";
import { url } from "./TestData";


export interface Chat {
    id: number,
    name: string,
    picture_link: string,
    member_limit: number,
    is_public: boolean,
    type: ChatType,
    create_ts: string,
    course_id: number,
    course_name: string,
    user_role: string,
    member_count: number,
    other_user: OtherUser,
    latest_message: {
        id: number,
        content: string,
        create_ts: string,
        sender_id: number,
        sender_name: string
    }
}

enum ChatType {
    GROUP = "GROUP",
    DIRECT = "DIRECT"
}

interface OtherUser {
    id: number,
    name: string,
    avatar_link: string
}

interface Inbox {
    chats: Chat[],
    hasHydrated: boolean
}

/** 
    Returns the inbox, this inbox contains a list of chats which the user is a part of

    @param userId - the ID of the user which to fetch the inbox

    @returns a list of chats along with hydrated which becomes true when the data has finished being fetched
*/
export function useInbox(userId: number): Inbox {
    const [inbox, setInbox] = useState<Chat[]>([])
    const [hasHydrated, setHasHydrated] = useState(false)

    useEffect(() => {

        fetch(url + "/read/user/" + userId + "/chats")
            .then((value) => value.json())
            .then((res: Chat[]) => {
                setInbox(res)
                setHasHydrated(true)
            })
    }, [])

    return { chats: inbox, hasHydrated: hasHydrated }
}