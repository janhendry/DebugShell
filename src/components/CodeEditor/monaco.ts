import { DiffEditor, Editor, loader } from "@monaco-editor/react"
import type { MonacoDiffEditor, OnMount } from "@monaco-editor/react"
import * as monaco from "monaco-editor"
import monacoEditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import monacoJsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import monacoTstWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

self.MonacoEnvironment = {
	getWorker: (_, label) => {
		switch (label) {
			case "json":
				return new monacoJsonWorker()
			case "typescript":
				return new monacoTstWorker()
			default:
				return new monacoEditorWorker()
		}
	},
}

monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
	noSemanticValidation: true,
	noSyntaxValidation: true,
})

loader.config({ monaco })

export { Editor, DiffEditor, monaco }
export type { MonacoDiffEditor, OnMount }
