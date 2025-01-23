import { Pressable, Text, StyleSheet } from "react-native"


interface ActionButtonProps {
    text: string
    onClick: Function

}
function ActionButton(props: ActionButtonProps) {
    const onClick = () => {
        props.onClick()
    }
    return (
        <Pressable onPress={onClick}
            style={({ pressed }) => [styles.signInButton, pressed ? styles.buttonOpacity : undefined]}
        >
            {({ pressed }) => (
                <Text style={styles.signInText}>{props.text}</Text>
            )}
        </Pressable>
    )
}
const styles = StyleSheet.create({
    signInButton: {
        backgroundColor: "rgb(102,121,242)",
        justifyContent: 'center',
        alignItems: 'center',
        padding: "5%",
        borderRadius: 10000,
        width: "100%",
        margin: "3%"
    },
    signInText: {
        color: "white",
        fontWeight: 600,
        fontSize: 18
    },
    buttonOpacity: {
        opacity: 0.6,
    },
})
export default ActionButton