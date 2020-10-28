// styles for all pages
import { camelCaseToSpaced } from "./utils"

import { StyleSheet } from "react-native"
export const globalStyles = StyleSheet.create({
	pageView: {
		flex: 1,
		paddingHorizontal: 12
	}
})

// available CODE_STYLES

import * as _hljsStyles from "react-syntax-highlighter/styles/hljs"
import * as _prismStyles from "react-syntax-highlighter/styles/prism"

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

let hljsStyles = formatStyles(_hljsStyles, "hljs")
let prismStyles = formatStyles(_prismStyles, "prism")

// [Some] Prism styles are making some errors
export const CODE_STYLES = { ...hljsStyles } // , ...prismStyles }

// Available Languages & Themes
export const AVAILABLE = {
	languages: [
		{ displayName: "ABNF", languageName: "abnf" },
		{ displayName: "ActionScript", languageName: "actionscript" },
		{ displayName: "Ada", languageName: "ada" },
		{ displayName: "AppleScript", languageName: "applescript" },
		{ displayName: "Arduino", languageName: "arduino" },
		{ displayName: "AsciiDoc", languageName: "asciidoc" },
		{ displayName: "AutoHotkey", languageName: "autohotkey" },
		{ displayName: "AutoIt", languageName: "autoit" },
		{ displayName: "Bash", languageName: "bash" },
		{ displayName: "BASIC", languageName: "basic" },
		{ displayName: "bnf", languageName: "bnf" },
		{ displayName: "Brainfuck", languageName: "brainfuck" },
		{ displayName: "C", languageName: "c" },
		{ displayName: "Clojure", languageName: "clojure" },
		{ displayName: "cmake", languageName: "cmake" },
		{ displayName: "CoffeeScript", languageName: "coffeescript" },
		{ displayName: "C++", languageName: "cpp" },
		{ displayName: "Crystal", languageName: "crystal" },
		{ displayName: "C#", languageName: "csharp" },
		{ displayName: "CSP", languageName: "csp" },
		{ displayName: "CSS", languageName: "css" },
		{ displayName: "D", languageName: "d" },
		{ displayName: "Dart", languageName: "dart" },
		{ displayName: "diff", languageName: "diff" },
		{ displayName: "django", languageName: "django" },
		{ displayName: "EBNF", languageName: "ebnf" },
		{ displayName: "Elixir", languageName: "elixir" },
		{ displayName: "Elm", languageName: "elm" },
		{ displayName: "eRb", languageName: "erb" },
		{ displayName: "Erlang", languageName: "erlang" },
		{ displayName: "Fortran", languageName: "fortran" },
		{ displayName: "F#", languageName: "fsharp" },
		{ displayName: "G-code", languageName: "gcode" },
		{ displayName: "Gherkin", languageName: "gherkin" },
		{ displayName: "GLSL", languageName: "glsl" },
		{ displayName: "GML", languageName: "gml" },
		{ displayName: "Go", languageName: "go" },
		{ displayName: "Groovy", languageName: "groovy" },
		{ displayName: "Haml", languageName: "haml" },
		{ displayName: "Handlebars", languageName: "handlebars" },
		{ displayName: "Haskell", languageName: "haskell" },
		{ displayName: "Haxe", languageName: "haxe" },
		{ displayName: "HTTP", languageName: "http" },
		{ displayName: "Iform7", languageName: "iform7" },
		{ displayName: "ini", languageName: "ini" },
		{ displayName: "Java", languageName: "java" },
		{ displayName: "JavaScript", languageName: "javascript" },
		{ displayName: "JSON", languageName: "json" },
		{ displayName: "Julia", languageName: "julia" },
		{ displayName: "Kotlin", languageName: "kotlin" },
		{ displayName: "LaTeX", languageName: "latex" },
		{ displayName: "Less", languageName: "less" },
		{ displayName: "Lisp", languageName: "lisp" },
		{ displayName: "LiveScript", languageName: "livescript" },
		{ displayName: "LLVM", languageName: "llvm" },
		{ displayName: "Lua", languageName: "lua" },
		{ displayName: "Makefile", languageName: "makefile" },
		{ displayName: "Markdown", languageName: "markdown" },
		{ displayName: "MATLAB", languageName: "matlab" },
		{ displayName: "MEL", languageName: "mel" },
		{ displayName: "Mizar", languageName: "mizar" },
		{ displayName: "Monkey", languageName: "monkey" },
		{ displayName: "MoonScript", languageName: "moonscript" },
		{ displayName: "N1QL", languageName: "n1ql" },
		{ displayName: "Nginx", languageName: "nginx" },
		{ displayName: "Nim", languageName: "nim" },
		{ displayName: "Nix", languageName: "nix" },
		{ displayName: "NSIS", languageName: "nsis" },
		{ displayName: "Objective-C", languageName: "objectivec" },
		{ displayName: "OCaml", languageName: "ocaml" },
		{ displayName: "Perl", languageName: "perl" },
		{ displayName: "PHP", languageName: "php" },
		{ displayName: "PowerShell", languageName: "powershell" },
		{ displayName: "Processing", languageName: "processing" },
		{ displayName: "Prolog", languageName: "prolog" },
		{ displayName: "Properties", languageName: "properties" },
		{ displayName: "Protobuf", languageName: "protobuf" },
		{ displayName: "Puppet", languageName: "puppet" },
		{ displayName: "Purebasic", languageName: "purebasic" },
		{ displayName: "Python", languageName: "python" },
		{ displayName: "Q", languageName: "q" },
		{ displayName: "qml", languageName: "qml" },
		{ displayName: "R", languageName: "r" },
		{ displayName: "roboconf", languageName: "roboconf" },
		{ displayName: "Ruby", languageName: "ruby" },
		{ displayName: "Rust", languageName: "rust" },
		{ displayName: "SAS", languageName: "sas" },
		{ displayName: "Scala", languageName: "scala" },
		{ displayName: "Scheme", languageName: "scheme" },
		{ displayName: "SCSS", languageName: "scss" },
		{ displayName: "smali", languageName: "smali" },
		{ displayName: "Smalltalk", languageName: "smalltalk" },
		{ displayName: "sqf", languageName: "sqf" },
		{ displayName: "SQL", languageName: "sql" },
		{ displayName: "Stylus", languageName: "stylus" },
		{ displayName: "Swift", languageName: "swift" },
		{ displayName: "tap", languageName: "tap" },
		{ displayName: "Tcl", languageName: "tcl" },
		{ displayName: "twig", languageName: "twig" },
		{ displayName: "TypeScript", languageName: "typescript" },
		{ displayName: "Vala", languageName: "vala" },
		{ displayName: "VBNet", languageName: "vbnet" },
		{ displayName: "verilog", languageName: "verilog" },
		{ displayName: "VHDL", languageName: "vhdl" },
		{ displayName: "Vim", languageName: "vim" },
		{ displayName: "XQuery", languageName: "xquery" },
		{ displayName: "YAML", languageName: "yaml" }
	],
	themes: Object.keys(CODE_STYLES).map(camelCaseToSpaced)
}

export const findLang = (property, value) => {
	if (!["displayName", "languageName"].includes(property)) {
		throw `Unrecognized Property: ${property}`
	}
	return AVAILABLE.languages.find((v) => {
		return v[property] === value
	})
}
