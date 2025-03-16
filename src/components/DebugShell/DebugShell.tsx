import { Allotment } from "allotment"
import { DebugShellWidget } from "./DebugShellWidget"
import { handleResize, useLocalAppState } from "./localAppState"

import "allotment/dist/style.css"
import "./theme.css"

export type DebugShellProps = {
	children?: React.ReactNode
}

/**
 * Debug shell for debugging state, stores, and events.
 *
 * This component is used to render the debug shell. When no children are provided, it will render the debug shell widget. When children are provided, it will render the debug shell as a split view with the children in the main pane.
 */
export function DebugShell({ children }: Readonly<DebugShellProps>) {
	const { sidePanelSize } = useLocalAppState()

	if (!children) {
		return <DebugShellWidget />
	}

	return (
		<div style={{ display: "flex", height: "100vh", width: "100vw" }}>
			<Allotment vertical={false} defaultSizes={sidePanelSize} onDragEnd={handleResize("sidePanel")}>
				<Allotment.Pane>{children}</Allotment.Pane>
				<Allotment.Pane preferredSize={200}>{<DebugShellWidget />}</Allotment.Pane>
			</Allotment>
		</div>
	)
}
