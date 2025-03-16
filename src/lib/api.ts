import { useStore } from "@nanostores/react"
import type { Store } from "nanostores"
import { useEffect } from "react"
import { $hookRegistry, $plainValueRegistry, $selectedEntry, $selectedHookValue, $storeRegistry } from "./registry"

/**
 * Registriert einen Nanostore für Debugging-Zwecke.
 */
export function debugStore(key: string, store: Store<unknown>): void {
	$storeRegistry.setKey(key, store)
}

/**
 * Speichert einen plain Debug-Wert.
 */
export function debug(key: string, value: unknown) {
	$plainValueRegistry.setKey(key, value)
}

/**
 * React-Hook zum Registrieren eines Debug-Schlüssels (vom Typ "hook").
 *
 * @param key - Der Debug-Schlüssel.
 * @param value - Der zu überwachende Wert.
 */
export function useDebug(key: string, value: unknown) {
	const selectedEntry = useStore($selectedEntry)
	useEffect(() => {
		if (key) {
			$hookRegistry.set([...$hookRegistry.get(), key])
		}

		if (selectedEntry && selectedEntry.key === key) {
			$selectedHookValue.set(value)
		}

		return () => {
			$hookRegistry.set($hookRegistry.get().filter(k => k !== key))
		}
	}, [key, value, selectedEntry])
}
