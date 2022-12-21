import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            "green": "#00875F",
            "green-light": "#00B37E",
            "gray1": "#121214",
            "gray2": "#202024",
            "gray3": "#c4c4cc",
            "gray4": "#e1e1e6",
            "white": "#fff",
        },
        fontSizes: {
            "xs": "1.125rem",
            "sm": "1.25rem",
            "base": "1.5rem",
            "lg": "2rem",
        },
    }
});
