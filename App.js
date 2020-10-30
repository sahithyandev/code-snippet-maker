import "react-native-gesture-handler"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomePage from "./src/pages/home"
import ResultPage from "./src/pages/result"

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Result" component={ResultPage} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
