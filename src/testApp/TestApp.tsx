import { DebugShell } from "../main"
import { ExampleDebug } from "./ExampleDebug"
import { ExampleUseDebug } from "./ExampleUseDebug"
import "./TestApp.css"

export default function TestApp() {
	return (
		<DebugShell>
			<ExampleUseDebug />
			<ExampleDebug />
		</DebugShell>
	)
}
