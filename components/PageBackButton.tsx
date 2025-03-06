import {
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

interface PageBackButtonProps {
    onClick: () => void,
    size?: number
}
function PageBackButton(props: PageBackButtonProps) {
    return (
        <>
            <TouchableOpacity
                style={styles.backButton}
                onPress={props.onClick}
            >
                <Text style={[styles.backButtonText, props.size ? { fontSize: props.size } : undefined]}>←</Text>
            </TouchableOpacity>
        </>
    )
}

export default PageBackButton

const styles = StyleSheet.create({
    backButton: {
        padding: 5,

    },
    backButtonText: {
        fontSize: 30,
        color: "#193C30",
    },
})