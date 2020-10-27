import React from "react"
import { View, StyleSheet } from "react-native"
import { Picker } from "@react-native-community/picker"
import ILabel from "./label"

const IPickerInput = (props) => {
	const { label, availableValues, pickerProps } = props
	return (
		<View>
			<ILabel>{label}</ILabel>
			<Picker style={style.picker} {...pickerProps}>
				<Picker.Item key="null" label="Select" value={null} />
				{availableValues.map((value) => {
					return <Picker.Item key={value} label={value} value={value} />
				})}
			</Picker>
		</View>
	)
}
const style = StyleSheet.create({
	picker: {
		borderColor: "black",
		borderWidth: 1,
		borderStyle: "solid",
	},
})

export default IPickerInput
