import { useEffect, useState } from "react";
import { Keyboard } from "react-native";


/** 
    Returns whether they soft keyboard is up, it uses the "keyboardDidHide" and "keyboardDidShow" listeners

    @returns a boolean whether the soft keyboard is currently up
*/
export function useKeyboardWillShow(): boolean {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardWillShow",
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardWillHide",
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return isKeyboardVisible;
}

/** 
    Returns whether they soft keyboard is up, it uses the "keyboardWillHide" and "keyboardWillShow" listeners

    @returns a boolean whether the soft keyboard is currently up
*/
export function useKeyboardDidShow(): boolean {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return isKeyboardVisible;
}
