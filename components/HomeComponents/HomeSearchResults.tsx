import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Chevron } from "../InboxComponents/MessageThread"
import { useRouter } from "expo-router"
import { useMyCourses } from "@/hooks/GetHooks/UseMyCourses"
import { id } from "@/hooks/TestData"
import { useCourses } from "@/hooks/GetHooks/UseCourses"

interface HomeSearchResultsProps {
    query: String
}


function HomeSearchResults(props: HomeSearchResultsProps) {

    const courses = useCourses()
    const myCourses = useMyCourses(id)
    const router = useRouter()
    const userId = id

    const compareToSearchKey = (key: string | undefined): boolean => {
        if (key == undefined) {
            return false;
        }
        const lowerKey: string = key.toLowerCase();
        const lowerSearchKey: string = props.query.toLowerCase();

        return lowerKey.includes(lowerSearchKey);
    };

    const getMatchedCourses = () => {
        return courses.courses.filter((course) => {
            return compareToSearchKey(course.name);
        })
    }
    const onResultPress = (id: number) => {
        router.push(`/groupList?courseId=${id}&userId=${userId}`)
    }
    const amIEnrolled = (courseId: number) => {
        const filter = myCourses.courses.filter((course) => {
            return course.id == courseId
        })

        return filter.length >= 1

    }


    return (
        <ScrollView keyboardShouldPersistTaps="handled" >
            {getMatchedCourses().map(course => {
                return (
                    <TouchableOpacity style={styles.result} key={course.id + "Course"} onPress={() => { onResultPress(course.id) }}>
                        <View style={styles.resultMainContainer}>
                            <Text style={styles.resultText}>{course.name}</Text>
                            <Text style={styles.resultSubText}>subtext, put someting</Text>
                        </View>
                        <Chevron size={20} ></Chevron>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    result: {
        marginHorizontal: 25,
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 10,
        backgroundColor: "#F7F3E8"
    },
    resultText: {
        fontSize: 20,
        fontWeight: 600,
    },
    enrolledText: {
        opacity: 0.8,
    },
    resultMainContainer: {
        flexDirection: "column",

    },
    resultSubText: {
        fontSize: 14,
        opacity: 0.8
    }

})

export default HomeSearchResults