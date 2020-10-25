/* eslint-disable prettier/prettier */

import React from 'react';
import { StatusBar } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const Result = (props) => {
    console.log(props);
    const codeString = `
        function sum(...num) {
            return num.reduce((total, n) => total + n); //sssssssssssssssssssssssssssssss
        }

        console.log(sum(1,2)) // 3
        console.log(sum(1,22,3,1)) // 27
        
        `;
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
    )
}

export default Result;