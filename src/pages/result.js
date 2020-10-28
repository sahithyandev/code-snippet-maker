import React, { useState } from "react"
import { StatusBar, View, SafeAreaView, StyleSheet } from "react-native"
import SyntaxHighlighter from "react-native-syntax-highlighter"
import { globalStyles, CODE_STYLES, AVAILABLE } from "../global"
import { spacedToCamelCase } from "./../utils"
import { IButton, IPickerInput } from "../components"

const ResultPage = ({ navigation, route }) => {
	let { language, codeText } = route.params
	let [themeName, setThemeName] = useState("Zenburn");

	const theme = CODE_STYLES[spacedToCamelCase(themeName)]

	const getBackgroundColor = (_themeName) => {
		let _theme = CODE_STYLES[spacedToCamelCase(_themeName)]
		if (_theme.themeLibrary === "hljs") {
			return _theme.hljs.background
		} else if (_theme.themeLibrary === "prism") {
			// TK
			// Prism themes doesn't support backgroundColors. So it will be a default color.
			return "#101010"
			// console.log(theme["pre[class*=\"language-\"]"])
			// return theme["pre[class*=\"language-\"]"].background
		} else {
			throw "themeLibrary not recognized"
		}
	}

	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={[globalStyles.pageView, { flex: 1, backgroundColor: getBackgroundColor(themeName) }]}>
				<View style={style.syntaxHighlighterContainer}>
					<SyntaxHighlighter language={language} style={CODE_STYLES[spacedToCamelCase(themeName)]} fontSize={16} highlighter={theme.themeLibrary}>
						{codeText}
					</SyntaxHighlighter>
				</View>

				{/* TK Add a slider for fontSize here */}

				<View style={style.controlContainer}>
					<IPickerInput
						label="Theme"
						availableValues={AVAILABLE.themes}
						pickerProps={{
							selectedValue: themeName,
							onValueChange: setThemeName,
						}}
					/>

					<IButton containerStyle={{ marginBottom: 20 }}>Save</IButton>
				</View>
			</SafeAreaView>
		</>
	)
}

const style = StyleSheet.create({
	syntaxHighlighterContainer: {
		minHeight: 200,
		flex: 1,
		alignItems: "center",
		flexDirection: "row",
	},
	controlContainer: {
		padding: 20,
		backgroundColor: "white",
	},
})

export default ResultPage
