import React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import { ReactNode } from "react";

export const Card = ({ children, style = {}, onPress }: { children: ReactNode, style?: object, onPress?: () => void }) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};




const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
  },

});
