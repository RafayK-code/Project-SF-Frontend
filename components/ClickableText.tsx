import { Pressable, Text, StyleSheet } from "react-native"

interface ClickableTextProps {
    text: string
    onClick: Function
}
function ClickableText(props: ClickableTextProps) {
    const onClick = () => {
        props.onClick()
    }
    return (
        <Pressable onPress={onClick}
            style={({ pressed }) => [pressed ? styles.buttonOpacity : undefined]}
        >
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "rgb(102,121,242)",
    },
    buttonOpacity: {
        opacity: 0.6,
    },
})

export default ClickableText