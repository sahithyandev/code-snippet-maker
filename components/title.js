import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ITitle = (props) => {
    return (
        <Text style={styles.title} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 36,
        marginTop: 10,
        marginBottom: 20,
        fontWeight: '700'
    }
})

export default ITitle;