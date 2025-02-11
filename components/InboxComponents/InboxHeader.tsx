import PageBackButton from "@/components/PageBackButton";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from "react-native";


function InboxHeader() {

    const goBack = () => {

    }
    return (
        <>
            <SafeAreaView>
                {/* Header */}
                <View style={styles.header}>
                    <PageBackButton onClick={goBack}></PageBackButton>

                    <Text style={styles.headerText}>Inbox</Text>

                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
        paddingHorizontal: 15,
        backgroundColor: "#F7F3E8",
    },
    headerText: {
        flex: 1,
        fontSize: 40,
        fontWeight: 800,
        color: "#193C3D",
        marginLeft: 10,
    }
})

export default InboxHeader