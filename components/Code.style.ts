import { CSSProperties } from "react";

const theme: {
    [key: string]: CSSProperties;
} = {
    "code[class*=\"language-\"]": {
        "color": "#adbac7",
        "fontFamily": "JetBrain, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "white",
        "maxWidth": "100%",
        "width": "100%",
        "fontFamily": "JetBrain, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "background": "#22272e"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "color": "white",
        "background": "#22272e",
        "padding": "0.1em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "keyword": {
        "color": "#F47067"
    },
    "operator": {
        "color": "#F47067"
    },
    "class-name": {
        "color": "#F69D50"
    },
    "comment": {
        "color": "#768390"
    },
    "punctuation": {
        "color": "#768390"
    },
    "string": {
        "color": "#96D0FF"
    },
    "constant": {
        "color": "#6CB6FF"
    },
    "number": {
        "color": "#6CB6FF"
    },
    "hexcode": {
        "color": "#6CB6FF"
    },
    "builtin": {
        "color": "#6CB6FF"
    },
    "variable": {
        "color": "#F69D50"
    },
    "function": {
        "color": "#DCBDFB"
    },
    "tag": {
        "color": "#8DDB8C"
    },
    "property": {
        "color": "#8DDB8C"
    },
    "regex": {
        "color": "#96D0FF"
    },
    "deleted": {
        "color": "#FF938A"
    },
    "inserted": {
        "color": "#8DDB8C"
    },
    "changed": {
        "color": "#F69D50"
    },
    "important": {
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
}
const light: {
    [key: string]: CSSProperties;
} = {
    ...theme, "pre[class*=\"language-\"]": {
        "color": "white",
        "maxWidth": "100%",
        "width": "100%",
        "fontFamily": "JetBrain, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "background": "transparent"
    },
}
export default {
    dark: theme,
    light
}