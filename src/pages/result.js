import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { globalStyles } from './global';

const ResultPage = ({ navigation, route }) => {
  const codeString = route.params.code || '';

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={globalStyles.pageView}>

        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          highlighter="hljs">
          {codeString}
        </SyntaxHighlighter>
      </SafeAreaView>
    </>
  );
};

export default ResultPage;
