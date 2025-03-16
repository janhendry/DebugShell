import { DebugShell } from "../main"
import { AppState } from "./TestAppState"
import "./TestApp.css"

export default function TestApp() {
	return (
		<>
			<AppState />
			<DebugShell>
				<div>App</div>
			</DebugShell>
		</>
	)
}
