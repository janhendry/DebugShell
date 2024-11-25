import { Allotment } from 'allotment'
import { DebugShell } from './DebugShell'
import { useState } from 'react'

export type DebugShellSidePanelProps = {
  children: React.ReactNode
}

export function DebugShellSidePanel({ children }: Readonly<DebugShellSidePanelProps>) {
  const [position, setPosition] = useState<Position>('left')

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <select
        value={position}
        onChange={(e) => setPosition(e.target.value as Position)}
      >
        <option value='left'>Left</option>
        <option value='right'>Right</option>
        <option value='top'>Top</option>
        <option value='bottom'>Bottom</option>
      </select>
      <SidePanel
        position={position}
        main={children}
        side={<DebugShell />}
      />
    </div>
  )
}

type Position = 'left' | 'right' | 'top' | 'bottom'

type SidePanelProps = {
  position: Position
  main: React.ReactNode
  side: React.ReactNode
}

function SidePanel({ position, main, side }: Readonly<SidePanelProps>) {
  switch (position) {
    case 'left':
      return (
        <Allotment vertical={true}>
          <Allotment.Pane preferredSize={350}>{side}</Allotment.Pane>
          <Allotment.Pane preferredSize={350}>{main}</Allotment.Pane>
        </Allotment>
      )
    case 'right':
      return (
        <Allotment vertical={true}>
          <Allotment.Pane>{main}</Allotment.Pane>
          <Allotment.Pane preferredSize={350}>{side}</Allotment.Pane>
        </Allotment>
      )
    case 'top':
      return (
        <Allotment vertical={false}>
          <Allotment.Pane preferredSize={350}>{side}</Allotment.Pane>
          <Allotment.Pane>{main}</Allotment.Pane>
        </Allotment>
      )
    case 'bottom':
      return (
        <Allotment vertical={false}>
          <Allotment.Pane>{main}</Allotment.Pane>
          <Allotment.Pane preferredSize={350}>{side}</Allotment.Pane>
        </Allotment>
      )
  }
}
