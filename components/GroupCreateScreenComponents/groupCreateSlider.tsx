import { StyleSheet, View, Text } from "react-native"
import Slider from '@react-native-community/slider';

interface GroupCreateSliderProps {
    value: number,
    setValue: (newValue: number) => void,
    minValue: number,
    maxValue: number,
    step: number
}

function GroupCreateSlider(props: GroupCreateSliderProps) {
    return (
        <>

            <Slider
                style={styles.slider}
                value={props.value}
                onValueChange={props.setValue}
                step={props.step}
                maximumValue={props.maxValue}
                minimumValue={props.minValue}
                StepMarker={StepMarker}
                maximumTrackTintColor="#F4D84C"
                minimumTrackTintColor="#193C30"
                thumbTintColor="#00000000"
                tapToSeek={true}
            ></Slider>
        </>
    )
}
export type MarkerProps = {
    stepMarked: boolean;
    currentValue: number;
    index: number;
    min: number;
    max: number;
};

function StepMarker(props: MarkerProps) {
    const front = props.index == props.min
    const back = props.index == props.max
    return (
        <>
            <View style={[styles.markerContainer, front ? styles.front : undefined, back ? styles.back : undefined]}>
                {
                    props.currentValue >= props.index ? <View style={[styles.markerInner]}></View> : undefined
                }
                {
                    props.index == props.min
                        || props.index == props.max
                        || props.index == props.currentValue ?
                        <Text style={styles.markerText}>{props.index}</Text> :
                        undefined
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    slider: {
        width: 340,
        margin: 15,
        marginBottom: 30,
    },
    markerContainer: {
        backgroundColor: "#F4D84C",
        width: 20,
        height: 20,
        marginTop: 0,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1000,
    },
    markerInner: {
        backgroundColor: "#193C30",
        height: "80%",
        width: "80%",
        borderRadius: 1000,
    },
    markerText: {
        position: "absolute",
        width: 20,
        top: "170%",
        left: "0%",
        fontStyle: "italic",
        fontWeight: "300"
    },
    front: {
        marginRight: 10,
    },
    back: {
        marginLeft: 10,
    }
})

export default GroupCreateSlider