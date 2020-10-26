import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-community/picker';

const IPickerInput = (props) => {
    const { label, availableValues } = props;
    return (
        <View>
            <Text>{label}</Text>
            <Picker style={style.picker}>
                {availableValues.map(lang => {
                    return <Picker.Item key={lang} label={lang} value={lang.toLowerCase()} />
                })}
            </Picker>
        </View>
    );
}
const style = StyleSheet.create({
    picker: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})

export default IPickerInput;