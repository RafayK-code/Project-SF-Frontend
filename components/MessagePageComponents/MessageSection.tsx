import {
    View,
    Text,
    StyleSheet,
} from "react-native";

interface MessageSectionProps {
    content: string,
    timeSent: number,
    username: string
}

function MessageSection(props: MessageSectionProps) {


    const formattedTime = () => {
        const time: Date = new Date(props.timeSent)

        var str: String = time.toLocaleString()
        return str
    }

    return (
        <>
            {/* Message Row */}
            <View style={styles.messageRow}>
                {/* Profile Pic */}
                <View style={styles.profilePlaceholder} />

                <View style={styles.messageContent}>
                    {/* Top of message (name, time) */}
                    <View style={styles.messageHeader}>
                        <Text style={styles.senderName}>{props.username}</Text>
                        <Text style={styles.time}>{formattedTime()}</Text>
                    </View>
                    {/* Content */}
                    <View style={styles.messageBubble}>
                        <Text style={styles.messageText}>
                            {props.content}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    messageRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 10,
        flex: 1,
        minHeight: 60,
    },
    messageContent: {
        flex: 1,
        maxWidth: "80%",
    },
    profilePlaceholder: {
        aspectRatio: "1/1",
        width: "12%",
        borderRadius: "100%",
        backgroundColor: "#ddd",
        marginHorizontal: 5,
        marginRight: 10
    },
    messageBubble: {
        paddingVertical: 3
    },
    messageText: {
        fontSize: 16,
        color: "#000",
    },
    messageHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    senderName: {
        fontSize: 12,
        fontWeight: 600,
        color: "#193C30",
        marginRight: 10
    },
    time: {
        fontSize: 10,
        fontWeight: 400,
        color: "#3D404A",

    }

})

export default MessageSection