import React, { useState, useRef } from "react"
import { StatusBar, View, SafeAreaView, StyleSheet, PermissionsAndroid, Alert, Platform } from "react-native"
import SyntaxHighlighter from "react-native-syntax-highlighter"

import { captureRef } from "react-native-view-shot"
import CameraRoll from "@react-native-community/cameraroll"

import { globalStyles, CODE_STYLES, AVAILABLE } from "../global"
import { spacedToCamelCase } from "./../utils"
import { IButton, IPickerInput, IPureButton } from "../components"
import { Icon } from "react-native-vector-icons/Icon"

const ResultPage = ({ navigation, route }) => {
	let { language, codeText } = route.params
	let [themeName, setThemeName] = useState("Agate")
	const codeComponentRef = useRef()
	const theme = CODE_STYLES[spacedToCamelCase(themeName)]

	const getBackgroundColor = (_themeName) => {
		let _theme = CODE_STYLES[spacedToCamelCase(_themeName)]
		if (_theme.themeLibrary === "hljs") {
			return _theme.hljs.background
		} else if (_theme.themeLibrary === "prism") {
			// TK
			// Prism themes doesn't support backgroundColors. So it will be a default color.
			return "#101010"
		} else {
			throw "themeLibrary not recognized"
		}
	}

	// on Android
	const getPermissionAndroid = async () => {
		try {
			const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
				title: "Image Download Permission",
				message: "Your permission is required to save images to your device",
				buttonNegative: "Cancel",
				buttonPositive: "OK"
			})
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				return true
			}

			Alert.alert("", "Image can't be stored without your permission", [{ text: "OK", onPress: () => {} }], {
				cancelable: false
			})
		} catch (error) {
			console.warn("error", error)
		}
	}

	const downloadImage = async () => {
		try {
			const uri = await captureRef(codeComponentRef, {
				format: "png",
				quality: 0.8
			})
			if (Platform.OS === "android") {
				const granted = await getPermissionAndroid()
				if (!granted) {
					return
				}
			}

			// save image
			const image = CameraRoll.save(uri, "photo")
			if (image) {
				Alert.alert("", "Image saved successfully", [{ text: "OK", onPress: () => {} }], { cancelable: false })
			}
		} catch (error) {
			console.warn("error downloading", error)
		}
	}

	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={[globalStyles.pageView, style.safeArea, { backgroundColor: getBackgroundColor(themeName) }]}>
				<View ref={codeComponentRef} style={style.syntaxHighlighterContainer}>
					<SyntaxHighlighter
						language={language}
						style={CODE_STYLES[spacedToCamelCase(themeName)]}
						fontSize={16}
						highlighter={theme.themeLibrary}>
						{codeText}
					</SyntaxHighlighter>
				</View>

				<View style={style.controlContainer}>
					<IPureButton>
						<Icon name="chevron-back" type="ionicon" />
					</IPureButton>

					{/* TK Add an option to select fontSize */}
					<IPickerInput
						label="Theme"
						availableValues={AVAILABLE.themes}
						pickerProps={{
							selectedValue: themeName,
							onValueChange: setThemeName
						}}
					/>

					<IButton containerStyle={style.saveButton} onPress={downloadImage}>
						Save
					</IButton>
				</View>
			</SafeAreaView>
		</>
	)
}

const style = StyleSheet.create({
	safeArea: {
		flex: 1
	},
	syntaxHighlighterContainer: {
		minHeight: 200,
		flex: 1,
		alignItems: "center",
		flexDirection: "row"
	},
	controlContainer: {
		padding: 20,
		backgroundColor: "white"
	},
	saveButton: {
		marginBottom: 20
	}
})

export default ResultPage
