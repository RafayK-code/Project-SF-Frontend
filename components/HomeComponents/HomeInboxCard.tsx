import { View, Text, StyleSheet } from "react-native";
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
        router.push(`/messaging?messageId=${props.chatId}&userId=${id}`)
    };

    const formatDate = (iso: string): string => {
        const padStart = (value: number): string => value.toString().padStart(2, '0');

        const date = new Date(iso)
        const AMPM = Math.floor(date.getHours() / 12) > 0 ? "PM" : "AM"
        if (date.toTimeString() == "Invalid Date") {
            return ""
        }
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeStyle: "short"
        };
        return padStart(date.getHours()) + ":" + padStart(date.getMinutes()) + " " + AMPM
    }

    return (
        <Card
            style={styles.inboxCard}
            onPress={navigateToMessagingScreen}
        >
            <View style={styles.inboxMessageHeader}>
                <Text style={[styles.messageName]}>{props.chatName}</Text>
                <Text style={styles.messageTime}>{formatDate(props.messageTime)}</Text>
            </View>
            <Text style={styles.messageContent}>{props.messageContent}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    inboxCard: {
        marginBottom: 4,
        padding: 16,
        backgroundColor: "#fdfaf1",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8
    },
    inboxMessageHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    messageName: {
        fontWeight: "bold",
        color: "#3d3f4b",
    },
    messageTime: {
        color: "#999",
    },
    messageContent: {
        color: "#555",
        marginTop: 4,
    },
});

export default HomeInboxCard;
