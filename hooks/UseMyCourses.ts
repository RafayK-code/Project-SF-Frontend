import { useEffect, useState } from "react"
import { url } from "./TestData"

interface Courses {
    id: number
    name: string
    chats: Chat[]
}
interface Chat {
    id: number,
    name: string,
    role: string,
}
interface CourseReturn {
    hydrated: boolean,
    courses: Courses[]
}
// Gets all of the courses that a user is enrolled in
export function useMyCourses(userId: number): CourseReturn {
    const [courses, setCourses] = useState<Courses[]>([]);
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        fetch(url + "/read/" + userId + "/courses")
            .then(res => res.json())
            .then((res: Courses[]) => {
                setCourses(res)
                setHydrated(true)
            })
    }, [])

    return { hydrated: hydrated, courses: courses }
}