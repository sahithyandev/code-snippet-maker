import React from 'react';
import { StatusBar } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const ResultPage = ({ navigation, route }) => {
  const codeString = route.params.code || '';

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        highlighter="hljs">
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

export default ResultPage;
