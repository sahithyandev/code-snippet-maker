import React, { useState, useRef } from "react"

import {
	StatusBar,
	SafeAreaView,
	View,
	StyleSheet,
	PermissionsAndroid,
	Alert,
	Platform
} from "react-native"

import SyntaxHighlighter from "react-native-syntax-highlighter"
import { Icon } from "react-native-elements"

import { captureRef } from "react-native-view-shot"
import CameraRoll from "@react-native-community/cameraroll"

import { globalStyles, CODE_STYLES, AVAILABLE } from "../global"
import { spacedToCamelCase } from "./../utils"
import { IPickerInput, IIconButton } from "../components"

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

	const getPermissionAndroid = async (permission) => {
		if (permission === undefined) {
			throw "permission can't be undefined"
		}
		// const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
		try {
			const hasPermission = await PermissionsAndroid.check(permission)
			if (hasPermission) {
				console.log("Already has permission")
				return true
			}
			const granted = await PermissionsAndroid.request(permission, {
				title: "Image Download Permission",
				message: "Your permission is required to save images to your device",
				buttonNegative: "Cancel",
				buttonPositive: "OK"
			})
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log("WRITE PERMISSION GRANTED")
				return true
			}

			Alert.alert(
				"",
				"Image can't be stored without your permission",
				[{ text: "OK", onPress: () => {} }],
				{
					cancelable: false
				}
			)
		} catch (error) {
			console.warn("error", error)
		}
	}

	const downloadImage = async () => {
		try {
			const uri = await captureRef(codeComponentRef)
			if (Platform.OS === "android") {
				const writeGranted = await getPermissionAndroid(
					PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
				)
				if (!writeGranted) {
					return
				}
			}

			// save image

			CameraRoll.save(uri, {
				album: "SnapCODE",
				type: "photo"
			})
				.then((result) => {
					console.log("r", result)
				})
				.catch((e) => {
					console.warn(e)
				})
			// const image = await CameraRoll.save(uri)
			// console.log("saved", image)
			// if (image) {
			// 	Alert.alert("", "Image saved successfully", [{ text: "OK", onPress: () => {} }], {
			// 		cancelable: false
			// 	})
			// }
			// console.log("end")
		} catch (error) {
			console.warn(error)
		}
	}

	let bg = getBackgroundColor(themeName)
	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={[globalStyles.pageView, style.safeArea, { backgroundColor: bg }]}>
				<View style={style.syntaxHighlighterContainer} collapsable={false}>
					<View
						ref={codeComponentRef}
						style={[style.syntaxHighlighterContainerInner, { backgroundColor: bg }]}>
						<SyntaxHighlighter
							language={language}
							style={CODE_STYLES[spacedToCamelCase(themeName)]}
							fontSize={16}
							highlighter={theme.themeLibrary}>
							{codeText}
						</SyntaxHighlighter>
					</View>
				</View>

				<View style={style.controlContainer}>
					<Icon
						iconStyle={style.icon}
						name="arrow-left"
						type="font-awesome-5"
						containerStyle={style.gobackContainer}
						onPress={() => {
							console.log("go-back")
							// TK Go back here
						}}
					/>

					{/* TK Add an option to select fontSize */}
					<IPickerInput
						label="Theme"
						availableValues={AVAILABLE.themes}
						pickerProps={{
							selectedValue: themeName,
							onValueChange: setThemeName
						}}
						disableDefault={true}
					/>

					{/* <IButton containerStyle={style.saveButton} type="abstract" onPress={downloadImage}>
						<Icon
							name="file-download"
							type="font-awesome-5"
							color="white"
							iconStyle={style.icon}
							containerStyle={style.saveIconContainer}
							/>
							<Text style={style.buttonTextStyle}>Save</Text>
					</IButton> */}

					<IIconButton
						onPress={downloadImage}
						iconName="file-download"
						iconPosition="end"
						iconProps={{
							color: "white"
						}}>
						Save
					</IIconButton>
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
		justifyContent: "center",
		flexDirection: "column"
	},
	syntaxHighlighterContainerInner: {
		paddingVertical: 40,
		paddingHorizontal: 12
	},
	controlContainer: {
		padding: 20,
		backgroundColor: "white",
		flexDirection: "column"
	},
	gobackContainer: {
		alignSelf: "flex-start",
		marginBottom: 20
	},
	icon: {
		fontSize: 20
	},
	saveButton: {
		marginBottom: 20,
		flexDirection: "row",
		alignItems: "center"
	}
})

export default ResultPage
