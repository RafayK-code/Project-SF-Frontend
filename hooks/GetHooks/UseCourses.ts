import { useEffect, useState } from "react";
import { url } from "../TestData";

interface Course {
    name: string,
    id: number,
}
interface CoursesReturn {
    hydrated: boolean,
    courses: Course[]
}

/** 
    Returns all a list of all courses


    @returns all the courses along with hydrated which becomes true when the data has finished being fetched
*/
export function useCourses(): CoursesReturn {
    const [courses, setCourses] = useState<Course[]>([]);
    const [hydrated, setHydrated] = useState(false);


    useEffect(() => {
        fetch(url + "/read/courses")
            .then(res => res.json())
            .then((res: Course[]) => {
                setCourses(res);
                setHydrated(true);
            })
    }, [])

    return { hydrated: hydrated, courses: courses }
}