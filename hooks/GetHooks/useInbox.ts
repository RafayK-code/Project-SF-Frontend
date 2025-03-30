import { useEffect, useState } from "react";
import { url } from "../TestData";


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

        getInbox(userId)
            .then(chats => {
                setInbox(chats)
                setHasHydrated(true)
            })
    }, [])

    return { chats: inbox, hasHydrated: hasHydrated }
}


/**
 *  The non hook version of getInbox, gets the inbox based on the userId supplied
 * 
 * @param userId - the id which the inbox will be fetched from
 * 
 * @returns a promise which will return the inbox of the user
 */
export function getInbox(userId: number): Promise<Chat[]> {
    return fetch(url + "/read/user/" + userId + "/chats")
        .then((value) => {
            if (value.status == 200) {
                return value.json()
            } else {
                return []
            }
        }
        )
        .then((res: Chat[]) => {
            return res
        })
        .catch(() => {
            return [];
        })

}