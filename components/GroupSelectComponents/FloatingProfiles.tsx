import { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";

const ProfileSize = 110

function FloatingProfiles() {

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const addingAngle = useSharedValue(0)
    const rotationDuration: number = 70
    // The Speed of the rotation
    const rotationAmount = 0.003
    const screenHeight = useWindowDimensions().height

    useEffect(() => {
        const timer = setInterval(() => {
            addingAngle.value += rotationAmount

        }, rotationDuration)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <>
            <View style={styles.container}>
                {
                    arr.map((num: number, index: number) => {
                        const randomAmount = (Math.random() - 0.5) * 0.20
                        const total = arr.length
                        const myAngle = ((360 / total) * Math.PI / 180) * index
                        const size: number = 0.9 * screenHeight / 2
                        const style = useAnimatedStyle(() => ({
                            top: withTiming(Math.sin(myAngle + addingAngle.value + randomAmount) * size - ProfileSize / 2, {
                                duration: rotationDuration,
                                easing: Easing.linear,

                            }),
                            left: withTiming(Math.cos(myAngle + addingAngle.value + randomAmount) * size * 0.8 - ProfileSize / 2, {
                                duration: rotationDuration,
                                easing: Easing.linear
                            })
                        }))
                        return (
                            <Animated.View key={index} style={[style, styles.profile]}>
                                <Animated.Image></Animated.Image>
                            </Animated.View>
                        )
                    })
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 2,
        pointerEvents: "none",
    },
    profile: {
        position: "absolute",
        backgroundColor: "#3D404A",
        width: ProfileSize,
        height: ProfileSize,
        borderRadius: 1000
    }
})

export default FloatingProfiles