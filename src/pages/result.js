import React from "react"
import { StatusBar, View, SafeAreaView, StyleSheet } from "react-native"
import SyntaxHighlighter from "react-native-syntax-highlighter"
import { globalStyles, CODE_STYLES } from "../global"
import { spacedToCamelCase } from "./../utils"
import { IButton } from "../components"

const ResultPage = ({ navigation, route }) => {
	let { language, themeName, codeText } = route.params

	const theme = CODE_STYLES[spacedToCamelCase(themeName)]

	const getBackgroundColor = () => {
		if (theme.themeLibrary === "hljs") {
			return theme.hljs.background
		} else if (theme.themeLibrary === "prism") {
			// TK
			return null // for now // theme['.style .token.string'].background;
		} else {
			throw "themeLibrary not recognized"
		}
	}

	return (
		<>
			<StatusBar barStyle="light-content" />
			<SafeAreaView style={[globalStyles.pageView, { flex: 1, backgroundColor: getBackgroundColor() }]}>
				<View style={style.syntaxHighlighterContainer}>
					<SyntaxHighlighter language={language} style={theme} fontSize={16} highlighter={theme.themeLibrary}>
						{codeText}
					</SyntaxHighlighter>
				</View>

				{/* TK Add a slider for fontSize here */}

				<IButton containerStyle={{ marginBottom: 20 }}>Save</IButton>
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
})

export default ResultPage
