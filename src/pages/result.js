import React from 'react';
import { StatusBar, View, SafeAreaView, StyleSheet } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { globalStyles, CODE_STYLES } from '../global';
import { spacedToCamelCase } from "./../utils";
import { IButton } from '../components';

const ResultPage = ({ navigation, route }) => {
  let { language, codeText, themeName } = route.params;
  console.log(language)
  if (language == 'c#') {
    language = 'csharp'
  } else if (language == 'c++') {
    language = 'cpp'
  } else if (language == 'f#') {
    language = 'fsharp'
  } else if (language == 'G-code') {
    language = 'gcode'
  } else if (language == "Objective-C") {
    language = 'objectivec'
  }
  const theme = CODE_STYLES[spacedToCamelCase(themeName)];

  const getBackgroundColor = () => {
    if (theme.themeLibrary == 'hljs') {
      return theme.hljs.background;
    } else if (theme.themeLibrary == 'prism') {
      // TK
      return null;// for now // theme['.style .token.string'].background;
    } else {
      throw "themeLibrary not recognized";
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[globalStyles.pageView, { flex: 1, backgroundColor: getBackgroundColor() }]}>
        <View style={style.syntaxHighlighterContainer}>
          <SyntaxHighlighter
            language={language}
            style={theme}
            highlighter={theme.themeLibrary}>
            {codeText}
          </SyntaxHighlighter>
        </View>

        {/* TK Add a slider for fontSize here */}

        <IButton containerStyle={{ marginBottom: 20 }} >Save</IButton>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  syntaxHighlighterContainer: {
    minHeight: 200,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default ResultPage;
