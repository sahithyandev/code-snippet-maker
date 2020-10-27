import React, { useState } from "react"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"

import { globalStyles, CODE_STYLES, AVAILABLE, findLang } from "../global"
import { IButton, ITitle, IInput, IPickerInput } from "./../components/"

// const AVAILABLE = {
// 	languages: AVAILABLE_LANGUAGES,
// 	themes: Object.keys(CODE_STYLES).map(camelCaseToSpaced),
// }

const HomePage = ({ navigation }) => {
	let [language, setLanguage] = useState("javascript")
	// let [themeName, setThemeName] = useState("Agate")
	let [codeText, setCodeText] = useState(`
let x = 10;

function ted() {
	x = 20;
	console.log(x);
}`)

	return (
		<>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<SafeAreaView style={[style.page, globalStyles.pageView]}>
				<ITitle>Create Snippet</ITitle>

				<IPickerInput
					label="Language"
					availableValues={AVAILABLE.languages.map((lang) => lang.displayName).sort()}
					pickerProps={{
						selectedValue: language === "" ? null : findLang("languageName", language).displayName,
						onValueChange: (v) => {
							setLanguage(findLang("displayName", v).languageName)
						},
					}}
				/>

				{/* <IPickerInput
					label="Theme"
					availableValues={AVAILABLE.themes}
					pickerProps={{
						selectedValue: themeName,
						onValueChange: setThemeName,
					}}
				/> */}

				<IInput
					label="Code"
					textInputProps={{
						multiline: true,
						numberOfLines: 10,
						value: codeText,
						onChangeText: setCodeText,
						fontFamily: "monospace",
						borderWidth: 1,
						paddingHorizontal: 10,
					}}
					textInputStyle={{ marginBottom: 20 }}
				/>

				{/* <Text>Code</Text>
				<TextInput style={style.textInput} autoCapitalize="none" spellCheck={false} multiline={true} /> */}

				<IButton
					onPress={() => {
						navigation.navigate("Result", { language, codeText })
					}}>
					Render Snippet
				</IButton>
			</SafeAreaView>
		</>
	)
}

const style = StyleSheet.create({
	page: {
		marginTop: 20, // temporary
	},
	textInput: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 4,
		marginBottom: 10,
	},
})

export default HomePage
