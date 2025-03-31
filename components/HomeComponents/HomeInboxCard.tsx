import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "@/components/ui/Card";
import { useRouter } from "expo-router";
import { id } from "@/hooks/TestData";


interface HomeInboxCardProps {
    chatName: string,
    chatId: number,
    messageTime: string,
    messageContent: string
}
function HomeInboxCard(props: HomeInboxCardProps) {
    const router = useRouter()

    const navigateToMessagingScreen = (): void => {
        console.log(`Navigating to Messaging Screen for ${props.chatId}`);
        router.push(`/messaging?chatId=${props.chatId}&userId=${id}`)
    };

    const formatDate = (iso: string): string => {
        const padStart = (value: number): string => value.toString().padStart(2, '0');

        const date = new Date(iso)
        const AMPM = Math.floor(date.getHours() / 12) > 0 ? "PM" : "AM"
        if (date.toTimeString() == "Invalid Date") {
            return "";
        }
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeStyle: "short"
        };
        return padStart(date.getHours()) + ":" + padStart(date.getMinutes()) + " " + AMPM
    }

    const shortenedText = (text: string, length: number): string => {
        if (text.length > length) {
            return text.substring(0, length).trim() + "...";
        }
        return text;
    };

    return (
        <TouchableOpacity
            style={styles.inboxCard}
            onPress={navigateToMessagingScreen}
        >
            <View style={styles.mainCont}>
                <View style={styles.profile}></View>
                <View style={styles.inboxMessageHeader}>
                    <Text style={[styles.messageName]}>{shortenedText(props.chatName, 22)}</Text>
                    <Text style={styles.messageContent}>{shortenedText(props.messageContent, 36)}</Text>
                </View>
            </View>
            <Text style={styles.messageTime}>{formatDate(props.messageTime)}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    inboxCard: {
        marginVertical: 3,
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "#fdfaf1",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inboxMessageHeader: {
        flexDirection: "column",
        justifyContent: "center",
    },
    messageName: {
        fontWeight: 700,
        fontSize: 15,
        color: "#3d3f4b",
    },
    messageTime: {
        color: "#999",
        height: "100%",
        fontSize: 10
    },
    messageContent: {
        color: "#555",
        marginTop: 6,
        fontSize: 12,
    },
    profile: {
        backgroundColor: "#3D404A",
        width: 45,
        height: 45,
        borderRadius: 100,
        marginRight: 10
    },
    mainCont: {
        flexDirection: "row",
        maxWidth: "70%"
    }
});

export default HomeInboxCard;
