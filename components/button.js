import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const IButton = (props) => {
    const { children, onPress } = props;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{children}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textStyle: {
        color: 'white',
        fontWeight: "500"

    }
});

export default IButton;