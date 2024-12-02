import { atom, computed, deepMap } from 'nanostores'
import { useEffect } from 'react'
import { useStore } from '@nanostores/react' 

export type DebugStore = {
    [key: string]: unknown
}

export const $debugStore = deepMap<DebugStore>({})

export const debugValue: (key: string, value: unknown) => void = $debugStore.setKey

export const $debugStoreKeys = computed($debugStore, store => Object.keys(store))

export const $selectedKey = atom<string | undefined>(undefined)

export const $selectedValue = computed([$selectedKey, $debugStore], key => {
    return key !== undefined ? JSON.stringify( $debugStore.get()[key], null, 2) : ''
})

export function useDebugValue(key: string, value: unknown) {
    
    useEffect(() => {
        $debugStore.setKey(key, value)
    }, [key, value])
}

export function useDebugStore() {
    return useStore($debugStore)
}

export const DebugStoreActions: {
    setSelectedKey: (key: string) => void
    debugValue: (key: string, value: unknown) => void
} = {
    setSelectedKey: (key: string) => {
        $selectedKey.set(key)
    },
    debugValue,
}