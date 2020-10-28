import React from "react"
import { View, TouchableOpacity } from "react-native"

/*
    PureButton is just a button without the basic button styles
*/

const IPureButton = ({ children }) => {
	return (
		<TouchableOpacity>
			<View>{children}</View>
		</TouchableOpacity>
	)
}

export default IPureButton
