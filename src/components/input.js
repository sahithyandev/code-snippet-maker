import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";

const IInput = (props) => {
    const { label, textInputStyle, textInputProps } = props;
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={[style.textInput, textInputStyle]} {...textInputProps} />
        </View>
    );
}

const style = StyleSheet.create({
    textInput: {
        marginTop: 10
    }
})

export default IInput;