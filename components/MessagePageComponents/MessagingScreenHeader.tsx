import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import EllipseButton from "./EllipseButton";
import PageBackButton from "../PageBackButton";

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
                <PageBackButton onClick={goBack}></PageBackButton>

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
    headerText: {
        flex: 1,
        fontSize: 30,
        fontWeight: 800,
        color: "#193C3D",
        marginLeft: 10,
    }
})