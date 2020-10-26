import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";

const IInput = (props) => {
    const { label, multiline, textInputStyle } = props;
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={[style.textInput, textInputStyle]} multiline={multiline ? multiline : null} />
        </View>
    );
}

const style = StyleSheet.create({
    textInput: {
        marginTop: 10,
        backgroundColor: 'red'
    }
})

export default IInput;