import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const IButton = (props) => {
    const { children, onPress, containerStyle } = props;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
                <Text style={styles.textStyle}>{children}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textStyle: {
        color: 'white',
        fontWeight: "500",
        fontSize: 16
    }
});

export default IButton;