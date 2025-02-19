
import React from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

import Svg, { Path } from 'react-native-svg';
interface MessagingBarProps {
    setMessage: React.Dispatch<React.SetStateAction<string>>
    message: string
    sendMessage: () => void
}

function MessagingBar(props: MessagingBarProps) {
    return (
        <>
            {/* Inputs */}
            <View style={styles.inputContainer}>
                {/* Attach Button */}
                <TouchableOpacity onPress={() => { }}>
                    {AttachSVG()}
                </TouchableOpacity>
                {/* Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    placeholderTextColor="#3D404A80"
                    value={props.message}
                    onChangeText={text => props.setMessage(text)}
                    multiline={true}
                />
                {/* Send Button */}
                <TouchableOpacity onPress={props.sendMessage}>
                    {SendSVG()}
                </TouchableOpacity>
            </View>
        </>
    )
}
export default MessagingBar

const SendSVG = () => {
    return (
        <View style={styles.sendButton}>
            <Svg width="100%" height="100%" viewBox="0 0 30 30" fill="#193C30">
                <Path d="M28.139 12.6425L2.63901 0.642494C2.38226 0.521018 2.09627 0.475015 1.81438 0.509845C1.53249 0.544676 1.2663 0.658906 1.04684 0.839222C0.827378 1.01954 0.663685 1.25851 0.574836 1.5283C0.485988 1.79808 0.475644 2.08756 0.54501 2.36299L3.45351 14L0.54501 25.637C0.474995 25.9125 0.484886 26.2023 0.573528 26.4724C0.66217 26.7426 0.825896 26.9818 1.04556 27.1623C1.26521 27.3428 1.53172 27.457 1.81391 27.4916C2.09609 27.5261 2.38229 27.4796 2.63901 27.3575L28.139 15.3575C28.3967 15.2364 28.6146 15.0444 28.7672 14.804C28.9198 14.5636 29.0009 14.2847 29.0009 14C29.0009 13.7152 28.9198 13.4364 28.7672 13.196C28.6146 12.9556 28.3967 12.7636 28.139 12.6425ZM4.22151 23.2955L5.48001 18.26L14 14L5.48001 9.73999L4.22151 4.70449L23.9765 14L4.22151 23.2955Z" fill="black" />
            </Svg >
        </View>

    )
}

const AttachSVG = () => {
    return (
        <View style={styles.attachButton}>
            <Svg width="100%" height="100%" viewBox="0 0 30 30" fill="#193C30">
                <Path d="M15 0.833374C7.18854 0.833374 0.833374 7.18854 0.833374 15C0.833374 22.8115 7.18854 29.1667 15 29.1667C22.8115 29.1667 29.1667 22.8115 29.1667 15C29.1667 7.18854 22.8115 0.833374 15 0.833374ZM22.0834 16.4167H16.4167V22.0834H13.5834V16.4167H7.91671V13.5834H13.5834V7.91671H16.4167V13.5834H22.0834V16.4167Z" fill="black" />
            </Svg>
        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        padding: 8,
        backgroundColor: "#FDFBF1",
    },
    input: {
        flex: 1,
        padding: 12,
        backgroundColor: "#FDFBF1",
        borderRadius: 13,
        marginRight: 10,
        fontSize: 16,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#193C30A0"
    },
    attachButton: {
        height: 45,
        width: 40,
        marginHorizontal: 10,
    },
    sendButton: {
        height: 45,
        width: 30,
    },
});
