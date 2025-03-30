import { Card } from "../ui/Card";
import { Text, StyleSheet } from "react-native"

interface HomeScreenSuggestedProps {
    name: string,
    memberCount: number,
    chatId: number
}

function HomeScreenSuggestedCard(props: HomeScreenSuggestedProps) {

    const navigateToGroupSelect = (): void => {

    };


    return (
        <Card
            style={styles.groupCard}
            onPress={navigateToGroupSelect}
        >
            <Text style={styles.cardText} numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>
            <Text style={styles.cardSubText}>
                {props.memberCount} member(s)
            </Text>
        </Card>

    )
}
const styles = StyleSheet.create({
    groupCard: {
        marginRight: 16,
        backgroundColor: "#183c30",
        justifyContent: "flex-end",
        padding: 8
    },
    cardText: {
        color: "#fff",
        fontSize: 16,
    },
    cardSubText: {
        color: "#fff",
        fontSize: 12,
    }
});

export default HomeScreenSuggestedCard;