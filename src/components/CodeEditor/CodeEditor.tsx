import classNames from "classnames"
import type { editor } from "monaco-editor"
import styles from "./CodeEditor.module.scss"
import type { CodeLanguage } from "./CodeLanguage"
import { Editor } from "./monaco"

export type CodeEditorProps = Readonly<{
	className?: string
	code: string
	language?: CodeLanguage
	onChange?: (code: string | undefined) => void
	readOnly?: boolean
	path?: string
	options?: editor.IStandaloneEditorConstructionOptions
}>

export default function CodeEditor({ className, code, path, readOnly = false, options, language = "json", onChange }: CodeEditorProps) {
	return (
		<div className={classNames(className, styles["code-editor"])}>
			<Editor
				options={{
					readOnly,
					minimap: {
						enabled: true,
					},
					...options,
				}}
				path={path}
				language={language}
				theme="vs-dark"
				value={code}
				onChange={onChange}
			/>
		</div>
	)
}
