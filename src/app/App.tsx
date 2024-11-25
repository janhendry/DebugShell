import { DebugShellSidePanel } from '../main'
import { DebugTest } from './DebugTest'

function App() {
  return (
    <>
      <DebugTest />
      <DebugShellSidePanel>
        <div>App</div>
      </DebugShellSidePanel>
    </>
  )
}

export default App
