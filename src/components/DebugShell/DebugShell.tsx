import { useStore } from '@nanostores/react'
import { $selectedValue } from './DebugStore'
import { KeyList } from './KeyList'
import { Allotment, LayoutPriority } from 'allotment'
import { CodeEditor } from '../CodeEditor/CodeEditor'

export function DebugShell() {
  const value = useStore($selectedValue)

  return (
    <Allotment
      vertical={false}
      proportionalLayout={false}
    >
      <Allotment.Pane
        priority={LayoutPriority.Low}
        preferredSize={200}
      >
        <KeyList />
      </Allotment.Pane>
      <Allotment.Pane>
        <CodeEditor
          code={value}
          readOnly
        />
      </Allotment.Pane>
    </Allotment>
  )
}
