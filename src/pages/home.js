import React, { useState } from "react";
import { Text, Button, SafeAreaView, StatusBar, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { globalStyles } from "./global";
import { IButton, ITitle, IInput, IPickerInput } from "./../components/";

const AVAILABLE = {
	languages: [
		"JavaScript",
		'Java',
		"Python",
		"C",
		"TypeScript"
	],
	themes: []
}

const HomePage = ({ navigation }) => {

	return (
		<>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<SafeAreaView style={[style.page, globalStyles.pageView]}>
				{/* <ITitle>Create</ITitle> */}

				<IPickerInput
					label="Language"
					availableValues={AVAILABLE.languages}
				/>

				{/* <IPickerInput
					label="Theme"
					availableValues={AVAILABLE.themes}
				/> */}

				<IInput label="Code"
					textInputProps={{ multiline: true, numberOfLines: 5 }}
					textInputStyle={{ marginBottom: 20 }}
				/>

				{/* <Text>Code</Text>
				<TextInput style={style.textInput} autoCapitalize="none" spellCheck={false} multiline={true} /> */}

				<IButton
					onPress={() => {
						navigation.navigate('Result', { code: "const foo = () => 'bar'" })
					}}
				>Render Button</IButton>
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
