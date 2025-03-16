import { useStore } from "@nanostores/react"
import type { Store } from "nanostores"
import { useEffect } from "react"
import { $hookRegistry, $plainValueRegistry, $selectedEntry, $selectedHookValue, $storeRegistry } from "./registry"

/**
 * Debug a store.
 *
 * @param key Key to identify value
 * @param store Store to debug
 */
export function debugStore(key: string, store: Store<unknown>): void {
	$storeRegistry.setKey(key, store)
}

/**
 * Debug a event value.
 *
 * @param key Key to identify value
 * @param event Event to debug
 */
export function debug(key: string, event: unknown) {
	$plainValueRegistry.setKey(key, event)
}

/**
 * Debug a state value.
 *
 * @param key Key to identify value
 * @param state State to debug
 */
export function useDebug(key: string, state: unknown) {
	const selectedEntry = useStore($selectedEntry)
	useEffect(() => {
		if (key) {
			$hookRegistry.set([...$hookRegistry.get(), key])
		}

		if (selectedEntry && selectedEntry.key === key) {
			$selectedHookValue.set(state)
		}

		return () => {
			$hookRegistry.set($hookRegistry.get().filter(k => k !== key))
		}
	}, [key, state, selectedEntry])
}
