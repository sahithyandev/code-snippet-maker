import React from "react"
import { View, StyleSheet } from "react-native"
import { Picker } from "@react-native-community/picker"
import ILabel from "./label"

const IPickerInput = ({ label, availableValues, pickerProps, disableDefault }) => {
	let pickerItems = []

	if (!disableDefault) {
		pickerItems.push(<Picker.Item key="null" label="Select" value={null} />)
	}

	let normalItems = availableValues.map((value) => {
		return <Picker.Item key={value} label={value} value={value} />
	})

	pickerItems.push(...normalItems)

	// <Picker.Item key="null" label="Select" value={null} />
	// {availableValues.map((value) => {
	// 	return <Picker.Item key={value} label={value} value={value} />
	// })}
	return (
		<View>
			<ILabel>{label}</ILabel>
			<Picker style={style.picker} {...pickerProps}>
				{pickerItems}
			</Picker>
		</View>
	)
}
const style = StyleSheet.create({
	picker: {}
})

export default IPickerInput
