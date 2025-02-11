
import {
    View,
    StyleSheet,
    Pressable
} from "react-native";


function EllipseButton(props: { size: number, onClick: () => void }) {

    const onPress = () => {
        props.onClick()
    }

    return (
        <>
            <Pressable onPress={onPress}
                style={({ pressed }) => [pressed ? styles.opacity : undefined, styles.button]}
            >
                {
                    [0, 1, 2].map((num: number) => {
                        return <View style={[styles.ellipse, {
                            height: props.size,
                            width: props.size,
                            margin: 3
                        }]}
                            key={num}></View>
                    })
                }

            </Pressable>
        </>
    )
}


export default EllipseButton

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    ellipse: {
        backgroundColor: "#193C30",
        borderRadius: 100,
    },
    opacity: {
        opacity: 0.5
    }
})