import classNames from "classnames"
import type { editor } from "monaco-editor"

import styles from "./CodeEditor.module.scss"
import type { CodeLanguage } from "./CodeLanguage"
import { DiffEditor } from "./monaco"

export type CodeDiffEditorProps = Readonly<{
	original: string
	modified: string
	language?: CodeLanguage
	className?: string
	readOnly?: boolean
	options?: editor.IDiffEditorConstructionOptions
}>

export default function CodeDiffEditor({ language, className, original, modified, readOnly = false, options }: CodeDiffEditorProps) {
	return (
		<div className={classNames(className, styles["code-editor"])}>
			<DiffEditor
				options={{
					inDiffEditor: false,
					readOnly,
					wordWrap: "off",
					minimap: {
						enabled: false,
					},
					...options,
				}}
				language={language}
				theme="vs-dark"
				original={original}
				modified={modified}
			/>
		</div>
	)
}
