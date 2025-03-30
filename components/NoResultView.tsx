import { View, Text, StyleSheet } from "react-native";
interface NoResultLabelProps {
    desc?: string
}
function NoResultLabel(props: NoResultLabelProps) {
    return (
        <>
            <View style={styles.blankSearchContainer}>
                <Text style={styles.blankSearchTitle}>No Results...</Text>
                <Text style={styles.blankSearch}>
                    {props.desc ? props.desc : "Try refining your search or joining some more chats."}
                </Text>
            </View>
        </>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F3E8",
    },
    threadsContainer: {},
    blankSearchTitle: {
        textAlign: "center",
        fontSize: 27,
        fontWeight: 600,
        padding: 5,
        color: "#3D404A",
    },
    blankSearch: {
        textAlign: "center",
        fontSize: 15,
        color: "#3D404A",
    },
    blankSearchContainer: {
        flexDirection: "column",
        padding: "20%",
    },
});
export default NoResultLabel