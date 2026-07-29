import { View, Text } from 'react-native'
import { StyleSheet,TextInput } from 'react-native'
import React from 'react'

type InputProps = {
    placeholder: string;
    value: string;
    onChangeText:(text: string) => void;
    secureTextEntry?: boolean;
 
};

export default function Input({placeholder, value, onChangeText,secureTextEntry = false }: InputProps) {
  return (
    <TextInput
    style={styles.Input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
   
    />
  );
}

// style

const styles = StyleSheet.create({
    Input: {
        borderWidth: 1,
        borderBottomColor: "#ccc",
        borderBottomLeftRadius: 10,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
    },
});