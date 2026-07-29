import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

type ButtonProps = {
    title: string;
    onPress: () => void;
};

export default function Button({title, onPress}: ButtonProps) {
    
  return (
   <Pressable style={styles.Button} onPress={onPress}>
        <Text>{title}</Text>
   </Pressable>
  )
}

const styles= StyleSheet.create({
  Button: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

  }
})