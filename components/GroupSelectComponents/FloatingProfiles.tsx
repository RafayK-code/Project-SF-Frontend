import { StyleSheet, useWindowDimensions, View } from "react-native";
import SingleProfile from "./SingleProfile";

const ProfileSize = 110

interface FloatingProfilesProps {

}

function FloatingProfiles(props: FloatingProfilesProps) {

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const screenHeight = useWindowDimensions().height

    if (screenHeight > 750) {
        return (
            <>
                <View style={styles.container}>
                    {
                        arr.map((num: number, index: number) => {
                            const total = arr.length
                            const myAngle = ((360 / total) * Math.PI / 180) * index + 0.3
                            const size: number = 0.9 * screenHeight / 2
                            const top = Math.sin(myAngle) * size - ProfileSize / 2
                            const left = Math.cos(myAngle) * size * 0.8 - ProfileSize / 2

                            return (
                                <SingleProfile key={index} top={top} left={left} size={ProfileSize}></SingleProfile>
                            )
                        })
                    }
                </View>
            </>
        )
    }
    return (
        <>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 2,
        pointerEvents: "none",
    },

})

export default FloatingProfiles