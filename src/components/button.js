import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const IButton = (props) => {
	const { children, onPress, containerStyle } = props
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, containerStyle]}>
				<Text style={styles.textStyle}>{children}</Text>
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
		flexDirection: "row"
	},
	textStyle: {
		color: "white",
		fontWeight: "500",
		fontSize: 16
	}
})

export default IButton
