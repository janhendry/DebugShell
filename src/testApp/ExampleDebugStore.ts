import { atom } from "nanostores"
import { debugStore } from "../main"

const counterStore = atom({ count: 0 })

debugStore("counterStore", counterStore)

setInterval(() => {
	counterStore.set({ count: counterStore.get().count + 1 })
}, 1e3)
