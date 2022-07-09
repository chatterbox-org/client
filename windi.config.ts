import { defineConfig } from "windicss/helpers";

// @ts-expect-error
import scrollbarPlugin from "@windicss/plugin-scrollbar";

export default defineConfig({
    theme: {
        extend: {
            transitionProperty: {
                "filter": "filter"
            },
        },
        fontFamily: {
            sans: ["IBM Plex Mono"],
            header: ["IBM Plex Mono"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",

            // Dark mode
            "primary": "#000",
            "secondary": "#141414",
            "tertiary": "#282828",
            "outline": "#fff",

            // Text
            "text": "#dcddde",
            "muted": "#a3a6aa",
        },
    },
    variants: {
        scrollbar: ["rounded"]
    },
    plugins: [
        scrollbarPlugin,
    ]
})