import { useEffect, useState } from "react";
import { url } from "./TestData";

interface Chat {
    id: number,
    name: string,
    picture_link: string,
    member_limit: number,
    is_public: boolean,
    create_ts: string,
    member_count: number
}
interface Course {
    course_id: number,
    course_name: string,
    chat_count: number,
    chats: Chat[]
}
interface ReturnCourse {
    course: Course,
    hydrated: boolean
}

/** 
    Returns all the data from a course

    @param courseId - the ID of the course that the data will come from

    @returns the course along with hydrated which becomes true when the data has finished being fetched
*/
export function useCourseChats(courseId: number): ReturnCourse {
    const [course, setCourse] = useState<Course>(defaultCourse);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        fetch(url + "/read/course/" + courseId + "/chats")
            .then(res => res.json())
            .then((res: Course) => {

                setCourse(res);
                setHydrated(true)
            })

    }, [])
    return { hydrated: hydrated, course: course }
}

const defaultCourse: Course = {
    course_id: 0,
    course_name: "Default",
    chat_count: 0,
    chats: []
}