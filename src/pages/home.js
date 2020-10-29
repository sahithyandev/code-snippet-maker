import React, { useState } from "react"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"

import { globalStyles, AVAILABLE, findLang } from "../global"
import { IButton, ITitle, IInput, IPickerInput } from "./../components/"

const HomePage = ({ navigation }) => {
	let [language, setLanguage] = useState("javascript")
	let [codeText, setCodeText] = useState(`
let x = 10;

function ted() {
	x = 20;
	console.log(x);
}
// Made by Sahithyan
// with SnapCODE`)

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
						}
					}}
				/>

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
						autoCapitalize: "none"
					}}
					textInputStyle={style.textInput}
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
		marginTop: 20 // temporary
	},
	textInput: {
		marginBottom: 20
	}
})

export default HomePage
