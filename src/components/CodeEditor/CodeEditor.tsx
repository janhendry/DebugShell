import type { Monaco } from '@monaco-editor/react'
import classNames from 'classnames'
import { editor } from 'monaco-editor'
import styles from './CodeEditor.module.scss'
import type { CodeLanguage } from './CodeLanguage.js'
import { Editor } from './monaco.js'

export type CodeEditorProps = Readonly<{
  className?: string
  code: string
  language?: CodeLanguage
  onSave?: (code: string) => void
  onChange?: (code: string | undefined) => void
  readOnly?: boolean
  path?: string
  options?: editor.IStandaloneEditorConstructionOptions
}>

export function CodeEditor({
  className,
  code,
  path,
  readOnly = false,
  options,
  language = 'json',
  onSave,
  onChange,
}: CodeEditorProps) {
  const onMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      enableSchemaRequest: true,
      validate: true,
    })

    editor.addAction({
      id: 'save',
      label: 'Save',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
      run: () => onSave?.(editor.getValue()),
    })
  }

  return (
    <div className={classNames(className, styles['code-editor'])}>
      <Editor
        options={{
          readOnly,
          minimap: {
            enabled: true,
          },
          ...options,
        }}
        path={path}
        onMount={onMount}
        language={language}
        theme='vs-dark'
        value={code}
        onChange={onChange}
      />
    </div>
  )
}
