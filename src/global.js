// styles for all pages

import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    pageView: {
        flex: 1,
        paddingHorizontal: 12
    }
})

// available CODE_STYLES

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

// Available Languages
export const AVAILABLE_LANGUAGES = [
    "ABNF",
    "ActionScript",
    "Ada",
    "AppleScript",
    "Arduino",
    "AsciiDoc",
    "AutoHotkey",
    "AutoIt",
    "Bash",
    "BASIC",
    "bnf",
    "Brainfuck",
    "C",
    "Clojure",
    "cmake",
    "CoffeeScript",
    "C++",
    "Crystal",
    "C#",
    "CSP",
    "CSS",
    "D",
    "Dart",
    "diff",
    "django",
    "EBNF",
    "Elixir",
    "Elm",
    "eRb",
    "Erlang",
    "Fortran",
    "F#",
    "G-code",
    "Gherkin",
    "GLSL",
    "GML",
    "Go",
    "Groovy",
    "Haml",
    "Handlebars",
    "Haskell",
    "Haxe",
    "HTTP",
    "Iform7",
    "ini",
    "Java",
    "JavaScript",
    "JSON",
    "Julia",
    "Kotlin",
    "LaTeX",
    "Less",
    "Lisp",
    "LiveScript",
    "LLVM",
    "Lua",
    "Makefile",
    "Markdown",
    "MATLAB",
    "MEL",
    "Mizar",
    "Monkey",
    "MoonScript",
    "N1QL",
    "Nginx",
    "Nim",
    "Nix",
    "NSIS",
    "Objective-C",
    "OCaml",
    "Perl",
    "PHP",
    "PowerShell",
    "Processing",
    "Prolog",
    "Properties",
    "Protobuf",
    "Puppet",
    "Purebasic",
    "Python",
    "Q",
    "qml",
    "R",
    "roboconf",
    "Ruby",
    "Rust",
    "SAS",
    "Scala",
    "Scheme",
    "SCSS",
    "smali",
    "Smalltalk",
    "sqf",
    "SQL",
    "Stylus",
    "Swift",
    "tap",
    "Tcl",
    "twig",
    "TypeScript",
    "Vala",
    "VBNet",
    "verilog",
    "VHDL",
    "Vim",
    "XQuery",
    "YAML"
]
