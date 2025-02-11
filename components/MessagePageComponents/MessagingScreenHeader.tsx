import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import EllipseButton from "./EllipseButton";

interface MessagingScreenHeaderProps {
    groupName: String,
    goBack: () => void
}


function MessageScreenHeader(props: MessagingScreenHeaderProps) {

    const goBack = () => {
        props.goBack()
    }
    const tapEllipse = () => {

    }

    return (
        <>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={goBack}
                >
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>

                <Text style={styles.headerText}>{props.groupName}</Text>

                <EllipseButton size={5} onClick={tapEllipse}></EllipseButton>
            </View>
        </>
    )
}
export default MessageScreenHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#F7F3E8",
        borderBottomWidth: 1,
        borderColor: "#193C3D70",
    },
    backButton: {
        padding: 5,

    },
    backButtonText: {
        fontSize: 30,
        color: "#193C30",

    },
    headerText: {
        flex: 1,
        fontSize: 30,
        fontWeight: 800,
        color: "#193C3D",
        marginLeft: 10,
    },
    menuButton: {
        padding: 5,
    },
    menuButtonText: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
    },
})