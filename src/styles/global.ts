import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
    body: {
        'webkit-font-smoothing': 'antialiased',
        backgroundColor: "$gray1",
        color: "$gray4",
    },
    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
    },

});
