import { Pressable, StyleSheet, Text, View } from "react-native"
import { useAnimatedStyle } from "react-native-reanimated"

interface SingleFilterProps {
    active: boolean,
    label: string,
    index: number
    onClick: (clickedIndex: number) => void
}

function SingleFilter(props: SingleFilterProps) {
    const toggle = () => {
        props.onClick(props.index)
    }

    return (
        <>
            <Pressable onPress={toggle}>
                <View style={[styles.filterContainer, props.active ? styles.selected : styles.notSelected]}>
                    <Text style={[styles.filterLabel, props.active ? styles.selected : styles.notSelected]} >{props.label}</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        borderRadius: 8,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginHorizontal: 2,
    },
    notSelected: {
        backgroundColor: "#193C30",
        color: "#FDFBF1"
    },
    selected: {
        backgroundColor: "#F4D84C",
        color: "#3D404A"
    },
    filterLabel: {
        fontSize: 12,
        fontWeight: 700,
    }
})

export default SingleFilter
