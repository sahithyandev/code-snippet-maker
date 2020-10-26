import React, { useState } from "react";
import { Text, Button, SafeAreaView, StatusBar, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { globalStyles, CODE_STYLES, AVAILABLE_LANGUAGES } from '../global';
import { IButton, ITitle, IInput, IPickerInput } from "./../components/";
import { camelCaseToSpaced } from "./../utils";

const AVAILABLE = {
	languages: AVAILABLE_LANGUAGES,
	themes: Object.keys(CODE_STYLES).map(camelCaseToSpaced)
}

const HomePage = ({ navigation }) => {
	let [language, setLanguage] = useState('javascript');
	let [themeName, setThemeName] = useState('agate');
	let [codeText, setCodeText] = useState(`
let x = 10;

function () {
	x = 20;
	console.log(x);
}`);

	return (
		<>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<SafeAreaView style={[style.page, globalStyles.pageView]}>
				{/* <ITitle>Create</ITitle> */}

				<IPickerInput
					label="Language"
					availableValues={AVAILABLE.languages.sort()}
					pickerProps={{
						selectedValue: language,
						onValueChange: setLanguage
					}}
				/>

				<IPickerInput
					label="Theme"
					availableValues={AVAILABLE.themes}
					pickerProps={{
						selectedValue: themeName,
						onValueChange: setThemeName
					}}
				/>

				<IInput label="Code"
					textInputProps={{
						multiline: true,
						numberOfLines: 10,
						value: codeText,
						onChangeText: setCodeText
					}}
					textInputStyle={{ marginBottom: 20 }}
				/>

				{/* <Text>Code</Text>
				<TextInput style={style.textInput} autoCapitalize="none" spellCheck={false} multiline={true} /> */}

				<IButton
					onPress={() => {
						navigation.navigate('Result', { language, themeName, codeText })
					}}
				>Render Snippet</IButton>
			</SafeAreaView>
		</>
	);
};

const style = StyleSheet.create({
	page: {
		marginTop: 60 // temporary
	},
	textInput: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 4,
		marginBottom: 10
	}
})

export default HomePage;
