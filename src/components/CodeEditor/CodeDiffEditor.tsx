import classNames from 'classnames'
import { editor } from 'monaco-editor'

import styles from './CodeEditor.module.scss'
import { DiffEditor, monaco } from './monaco.js'
import type { CodeLanguage } from './CodeLanguage.js'

export type CodeDiffEditorProps = Readonly<{
  original: string
  modified: string
  language?: CodeLanguage
  className?: string
  onSave?: (code: string) => void
  readOnly?: boolean
  options?: editor.IDiffEditorConstructionOptions
}>

export function CodeDiffEditor({
  language,
  className,
  onSave,
  original,
  modified,
  readOnly = false,
  options,
}: CodeDiffEditorProps) {
  const onMount = (editor: editor.IStandaloneDiffEditor) => {
    editor.addAction({
      id: 'save',
      label: 'Save',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
      run: () => onSave?.(editor.getModifiedEditor().getValue()),
    })
  }

  return (
    <div className={classNames(className, styles['code-editor'])}>
      <DiffEditor
        options={{
          inDiffEditor: false,
          readOnly,
          wordWrap: 'off',
          minimap: {
            enabled: false,
          },
          ...options,
        }}
        onMount={onMount}
        language={language}
        theme='vs-dark'
        original={original}
        modified={modified}
      />
    </div>
  )
}
