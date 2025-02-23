import { StyleSheet, Text, View } from "react-native"

export interface Member {
    name: String,
    online: boolean
}

function GroupSelectMember(props: Member) {

    return (
        <>

            <View style={styles.container}>
                {/* Online Indicator */}
                <View style={styles.onlineContainer}>
                    <View style={[styles.onlineIndicator, { opacity: props.online ? 1 : 0 }]} ></View>
                </View>
                {/* Member Name */}
                <Text style={styles.memberName}>{props.name}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 2,
    },
    onlineContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    },
    onlineIndicator: {
        backgroundColor: "#39FF14",
        borderRadius: 100,
        height: 8,
        aspectRatio: 1 / 1
    },
    memberName: {
        flex: 1,
        fontSize: 15,
    }
})

export default GroupSelectMember