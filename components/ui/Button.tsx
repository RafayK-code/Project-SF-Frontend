import React from "react";
import { Text,  TouchableOpacity , StyleSheet } from "react-native";

import { ReactNode } from "react";
 
export const Button = ({ children, onPress, style = {} }: { children: ReactNode, onPress: () => void, style?: object }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
  

const styles = StyleSheet.create({
   
    button: {
      backgroundColor: "#007BFF",
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: "center",
      marginVertical: 8,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });