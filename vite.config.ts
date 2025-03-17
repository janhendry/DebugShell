/// <reference types="vite/client" />
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

export default defineConfig({
	plugins: [
		dts({
			include: ["src"],
			exclude: ["src/testApp/**/*"],
		}),
		react(),
		libInjectCss(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", "react-dom", "monaco-editor"],
			output: {
				chunkFileNames: "chunks/[name].[hash].js",
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
		},
	},
})
