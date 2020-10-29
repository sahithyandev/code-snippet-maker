import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import ILabel from "./label"

const IInput = (props) => {
	const { label, textInputStyle, textInputProps } = props
	return (
		<View>
			<ILabel>{label}</ILabel>
			<TextInput
				textAlignVertical="top"
				style={[style.textInput, textInputStyle]}
				{...textInputProps}
			/>
		</View>
	)
}

const style = StyleSheet.create({
	textInput: {
		marginTop: 10
	}
})

export default IInput
