import { useEffect, useState } from "react";
import { Keyboard } from "react-native";


/** 
    Returns whether they soft keyboard is up, it uses the "keyboardWillHide" and "keyboardWillShow" listeners

  

    @returns a boolean whether the soft keyboard is currently up
*/
export function useKeyboardShown(): boolean {
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