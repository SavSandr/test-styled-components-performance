import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PORT = 4000;

export default defineConfig({
    server: {
        port: PORT,
    },
    preview: {
        port: PORT,
    },
    plugins: [
        react({
            babel: {
                // NOTE: using of this plugin needs a good research
                plugins: [
                    [
                        "babel-plugin-styled-components",
                        {
                            ssr: false,
                            pure: true,
                            displayName: true,
                            fileName: true,
                        },
                    ],
                ],
            },
        }),
    ],
    build: {
        outDir: "build",
        assetsDir: "static",
    },
});
