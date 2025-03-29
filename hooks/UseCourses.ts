import { useEffect, useState } from "react";
import { url } from "./TestData";

interface Course {
    name: string,
    id: number,
}
interface CoursesReturn {
    hydrated: boolean,
    courses: Course[]
}

// Gets all the courses
//
// Returns a list of courses
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