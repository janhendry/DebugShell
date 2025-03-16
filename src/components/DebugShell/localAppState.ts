import { persistentAtom } from "@nanostores/persistent"
import { useStore } from "@nanostores/react"

const LOCAL_APP_STATE_KEY = "github.com/janhendry/DebugShell_LocalAppState"

export type LocalAppState = {
	sidePanelSize: number[]
	appPanelSize: number[]
}

const defaultLocalAppState: LocalAppState = {
	sidePanelSize: [200, 100],
	appPanelSize: [100, 300],
}

export const $localAppState = persistentAtom<LocalAppState>(LOCAL_APP_STATE_KEY, defaultLocalAppState, {
	encode: JSON.stringify,
	decode: JSON.parse,
})

export const handleResize = (panel: "sidePanel" | "appPanel") => (size: number[]) => {
	$localAppState.set({
		...$localAppState.get(),
		[`${panel}Size`]: size,
	})
}

export function useLocalAppState() {
	return useStore($localAppState)
}
