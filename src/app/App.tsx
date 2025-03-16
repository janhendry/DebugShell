import { DebugShellSidePanel } from "../main"
import { DebugTest } from "./DebugTest"
import "./App.css"

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
