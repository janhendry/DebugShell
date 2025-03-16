import { persistentAtom } from "@nanostores/persistent"
import { debugStore } from "../../lib/api"

const STORAGE_KEY = "github.com/janhendry/DebugShell_DebugShellStore"

export type DebugShellState = {
	sidePanelSize: number[]
	appPanelSize: number[]
}

const defaultDebugShellState: DebugShellState = {
	sidePanelSize: [200, 100],
	appPanelSize: [100, 300],
}

export const $debugShellStore = persistentAtom<DebugShellState>(STORAGE_KEY, defaultDebugShellState, {
	encode: JSON.stringify,
	decode: JSON.parse,
})

export const handleResize = (panel: "sidePanel" | "appPanel") => (size: number[]) => {
	console.log("handleResize", panel, size)
	$debugShellStore.set({
		...$debugShellStore.get(),
		[`${panel}Size`]: size,
	})
}

debugStore("debugShellStore", $debugShellStore)
