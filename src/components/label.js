import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ILabel = ({ children }) => {
    return (
        <Text style={style.text}>{children}</Text>
    );
}

const style = StyleSheet.create({
    text: {
        fontWeight: '500',
        color: 'black'
    }
})

export default ILabel;