import React from "react"
import ReactDOM from "react-dom/client"
import TestApp from "./TestApp"
import "./ExampleDebugStore"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TestApp />
	</React.StrictMode>,
)
