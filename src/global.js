// all pages

import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    pageView: {
        flex: 1,
        paddingHorizontal: 12
    }
})

import * as _hljsStyles from 'react-syntax-highlighter/styles/hljs';
import * as _prismStyles from 'react-syntax-highlighter/styles/prism';

const formatStyles = (styles, themeLibrary) => {
    return Object.entries(styles).reduce((prev, current) => {
        let thisStyle = {
            [current[0]]: {
                themeLibrary,
                ...current[1]
            }
        }
        return { ...prev, ...thisStyle }
    }, {})
}

let hljsStyles = formatStyles(_hljsStyles, 'hljs');
let prismStyles = formatStyles(_prismStyles, 'prism');

export const CODE_STYLES = { ...hljsStyles, ...prismStyles };