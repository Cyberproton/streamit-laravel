import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
    ],
});
