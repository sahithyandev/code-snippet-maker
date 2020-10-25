import React from "react";
import { Text, Button, SafeAreaView, StatusBar, TextInput, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
	return (
		<>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<SafeAreaView>

				<TextInput style={style.textInput} />

				<Button title="Get RResults" onPress={() => {
					navigation.navigate('Result', { code: "const foo = () => 'bar'" })
				}} />
			</SafeAreaView>
		</>
	);
};

const style = StyleSheet.create({
	textInput: {
		backgroundColor: 'red',
		height: 80
	}
})

export default HomePage;
