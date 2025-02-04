import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    css: {
        modules: {
            localsConvention: "camelCase",
            generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
    },
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        "babel-plugin-react-css-modules",
                        {
                            generateScopedName: "[name]__[local]___[hash:base64:5]",
                            filetypes: {
                                ".scss": {
                                    syntax: "postcss-scss",
                                },
                            },
                        },
                    ],
                ],
            },
        }),
    ],
});
