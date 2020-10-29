import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const IButton = (props) => {
	let { children, onPress, containerStyle, type } = props
	if (type === undefined) {
		type = "normal"
	}
	console.log(type)
	// I know, the values for type are not self explanatory
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, containerStyle]}>
				{type === "normal" ? <Text style={styles.textStyle}>{children}</Text> : null}
				{type === "abstract" ? children : null}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		borderRadius: 6,
		paddingVertical: 12,
		paddingHorizontal: 10,
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	textStyle: {
		color: "white",
		fontWeight: "500",
		fontSize: 16
	}
})

export default IButton
