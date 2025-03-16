import { atom, deepMap } from "nanostores"
import type { Store } from "nanostores"

export type PlainValueRegistry = {
	[key: string]: unknown
}

export type StoreRegistry = {
	[key: string]: Store<unknown> | undefined
}

export type EntryType = "value" | "store" | "hook"

export type Entry = {
	key: string
	keyType: EntryType
}

export const $plainValueRegistry = deepMap<PlainValueRegistry>({})
export const $storeRegistry = deepMap<StoreRegistry>({})
export const $hookRegistry = atom<string[]>([])
export const $selectedEntry = atom<Entry | undefined>(undefined)
export const $selectedStoreValue = atom<unknown>(null)
export const $selectedHookValue = atom<unknown>(null)

export function setSelection(entry: Entry) {
	$selectedEntry.set(entry)
}
