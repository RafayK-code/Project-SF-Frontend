import { StyleSheet, TouchableOpacity, Text } from "react-native"

interface GroupCreateButtonProps {
    text: string,
    onClick: () => void,
    color?: string,
    textColor?: string
}

function GroupCreateButton(props: GroupCreateButtonProps) {
    return (
        <>
            <TouchableOpacity onPress={props.onClick} style={[styles.touchable, props.color != undefined ? { backgroundColor: props.color } : undefined]} activeOpacity={0.5}>
                <Text style={[styles.text, props.textColor != undefined ? { color: props.textColor } : undefined]}>{props.text}</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    text: {
        color: "#F7F3E8",
        fontWeight: 700,
        padding: 13,
        fontSize: 17
    },
    touchable: {
        backgroundColor: "#193C30",
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
        margin: 5
    }
})


export default GroupCreateButton