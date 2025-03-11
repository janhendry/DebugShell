import { Allotment } from "allotment";
import { DebugShell } from "./DebugShell";

export type DebugShellSidePanelProps = {
	children: React.ReactNode;
};

export function DebugShellSidePanel({
	children,
}: Readonly<DebugShellSidePanelProps>) {
	return (
		<div style={{ display: "flex", height: "100vh", width: "100vw" }}>
			<Allotment vertical={false}>
				<Allotment.Pane>{children}</Allotment.Pane>
				<Allotment.Pane preferredSize={350}>{<DebugShell />}</Allotment.Pane>
			</Allotment>
		</div>
	);
}
