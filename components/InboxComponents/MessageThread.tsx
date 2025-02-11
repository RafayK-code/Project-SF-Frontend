import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Svg, { Path } from "react-native-svg"
import { MessageThreadInfo } from "../../app/inbox"

interface MessageThreadProps {
    label: string,
    mostRecentMessageContent: string,
    timeMessageSent: number,
    read: boolean,
}

function MessageThread(props: MessageThreadProps) {
    //called when the thread is clicked
    const onClick = () => {
        //likely were routing will occur
    }
    const shortenedText = (): string => {
        let maxLength = 33
        if (props.mostRecentMessageContent.length > maxLength) {
            return props.mostRecentMessageContent.substring(0, maxLength) + "..."
        }
        return props.mostRecentMessageContent
    }


    const formatTime = (): string => {
        // im not confident on if this function works right, can be done better or replaced
        const difference: number = Date.now() - props.timeMessageSent
        if (difference < 20000) {
            return "now"
        }
        const timeScales = [31556952000, 2629746000, 604800000, 86400000, 3600000, 60000, 1000]
        const symbol = ["y", "mo", "w", "d", "h", "m", "s"]

        for (let i = 0; i < timeScales.length; i++) {
            let num: number = Math.floor(difference / timeScales[i])
            if (num > 1) {
                return String(num) + symbol[i]
            }
        }

        return "0"
    }

    return (
        <>
            <TouchableOpacity style={[styles.container, props.read ? styles.read : undefined]} onPress={() => { onClick }} >
                {/* The main body of messgae */}
                <View style={styles.contentContainer}>
                    {/* Title */}
                    <Text style={styles.title}>{props.label}</Text>
                    {/* Text and time*/}
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>{shortenedText()}</Text>
                        <Text style={styles.time}>{formatTime()}</Text>
                    </View>
                </View>
                {/* unread icon*/}
                <View style={[styles.extraInfoContainer]}>
                    <View style={[styles.unreadIcon, props.read ? { display: "none" } : { display: "flex" }]}></View>
                </View>
                {/* Chevron*/}
                <View style={styles.extraInfoContainer}>
                    <Chevron></Chevron>
                </View>
            </TouchableOpacity >
        </>
    )
}

export default MessageThread

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 13,

        flexDirection: "row",
        alignItems: "center"
    },
    contentContainer: {
        flexDirection: "column",
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: "#3D404A",
        fontWeight: 600,
        paddingVertical: 2
    },
    messageContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    messageText: {
        fontSize: 16,
        marginRight: 10
    },
    time: {
        color: "#3D404AA0"
    },
    extraInfoContainer: {
        flex: 0.12,
        alignItems: "center",
        justifyContent: "center"
    },
    unreadIcon: {
        height: 8,
        width: 8,
        backgroundColor: "#42CAFD",
        borderRadius: 100,
    },
    chevron: {
        width: 30,
        height: 30,
        paddingHorizontal: 10,
        flex: 0.1
    },
    read: {
        opacity: 0.3
    }
})


const Chevron = () => {
    return (
        <View style={styles.chevron}>
            <Svg width="100%" height="100%" viewBox="0 0 10 18" fill="none">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.03062 9.53063L1.53063 17.0306C1.23757 17.3237 0.762431 17.3237 0.469375 17.0306C0.176318 16.7376 0.176318 16.2624 0.469375 15.9694L7.43969 9L0.469375 2.03062C0.176318 1.73757 0.176318 1.26243 0.469375 0.969375C0.762431 0.676319 1.23757 0.676319 1.53063 0.969375L9.03062 8.46937C9.17146 8.61005 9.25059 8.80094 9.25059 9C9.25059 9.19906 9.17146 9.38995 9.03062 9.53063Z" fill="#3D404A" />
            </Svg>
        </View>

    )
}