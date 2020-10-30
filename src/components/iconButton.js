import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Icon } from "react-native-elements"

// children is the text value
const IIconButton = ({
	children,
	iconName,
	iconLibrary,
	iconPosition,
	iconProps,
	textProps,
	containerStyle,
	...otherProps
}) => {
	// iconPosition can be one of any of these, `start` `startText` `endText` `end`
	// defaults to 'startText'
	if (iconPosition === undefined) {
		iconPosition = "startText"
	}
	// as I am using react-native-elements,
	// the iconLibrary name is also wanted to render the icon, default is font-awesome-5

	if (iconLibrary === undefined) {
		iconLibrary = "font-awesome-5"
	}

	const startOrEnd = iconPosition.includes("start") ? "start" : "end"
	const isText = iconPosition.includes("Text") ? "text" : "noText"

	return (
		<TouchableOpacity
			{...otherProps}
			style={[style.container, containerStyle, containerStyles[startOrEnd]]}>
			<Icon
				containerStyle={[style.icon, iconStyles[isText]]}
				name={iconName}
				type={iconLibrary}
				{...iconProps}
			/>
			<Text style={style.textStyle} {...textProps}>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

const containerStyles = StyleSheet.create({
	start: {},
	end: {
		flexDirection: "row-reverse"
	}
})

const iconStyles = StyleSheet.create({
	text: {},
	noText: {
		marginLeft: 0,
		position: "absolute",
		left: 14
	}
})

// normal styles

const style = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		paddingHorizontal: 14,
		paddingVertical: 10,
		borderRadius: 6,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	icon: {
		marginHorizontal: 7
	},
	textStyle: {
		color: "white",
		fontWeight: "500",
		fontSize: 16
	}
})

export default IIconButton
