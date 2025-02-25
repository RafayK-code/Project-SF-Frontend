import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated"

interface SingleProfileProps {
    left: number,
    top: number,
    size: number,
}

function SingleProfile(props: SingleProfileProps) {
    const [random, _] = useState((Math.random() - 0.5) * 360)
    const rotation = useSharedValue(random)
    const duration = 10 * 1000

    const startRotation = () => {
        rotation.value = withRepeat(
            withTiming(360 + random, { duration: duration, easing: Easing.linear }),
            -1,
            false
        );
    }

    useEffect(() => {
        startRotation()
    }, [])

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ rotateZ: `${rotation.value}deg` }],
    }));

    return (
        <Animated.View style={[
            animatedStyles,
            styles.profile,
            {
                top: props.top,
                left: props.left,
                position: "absolute",
                height: props.size,
                width: props.size,
            }
        ]}>
            <Animated.Image style={styles.image} source={require("../../assets/images/favicon.png")}></Animated.Image>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    profile: {
        position: "absolute",
        backgroundColor: "#3D404A",
        borderRadius: 1000,
        justifyContent: "center",
        alignItems: "center",

    },
    image: {

    }
})

export default SingleProfile