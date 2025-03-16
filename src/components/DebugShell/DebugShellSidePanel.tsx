import { useStore } from "@nanostores/react"
import { Allotment } from "allotment"
import { DebugShell } from "./DebugShell"
import style from "./DebugShell.module.css"
import { $debugShellStore, handleResize } from "./debugShellStore"

export type DebugShellSidePanelProps = {
	children: React.ReactNode
}

export function DebugShellSidePanel({ children }: Readonly<DebugShellSidePanelProps>) {
	const { sidePanelSize } = useStore($debugShellStore)

	return (
		<div className={style.DebugShellSidePanel}>
			<Allotment defaultSizes={sidePanelSize} vertical={false} onDragEnd={handleResize("sidePanel")}>
				<Allotment.Pane>{children}</Allotment.Pane>
				<Allotment.Pane preferredSize={350}>{<DebugShell />}</Allotment.Pane>
			</Allotment>
		</div>
	)
}
