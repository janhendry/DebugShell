// src/debug/storeSubscriptions.ts
import { computed } from "nanostores";
import { debugStore } from "./api";
import type { Entry } from "./registry";
import {
  $hookRegistry,
  $plainValueRegistry,
  $selectedEntry,
  $selectedHookValue,
  $selectedStoreValue,
  $storeRegistry,
} from "./registry";

let removeActiveStoreListener: (() => void) | null = null;

$selectedEntry.subscribe((entry) => {
  if (removeActiveStoreListener) {
    removeActiveStoreListener();
    removeActiveStoreListener = null;
  }
  if (entry && entry.keyType === "store") {
    const storeRef = $storeRegistry.get()[entry.key];
    if (storeRef && typeof storeRef.subscribe === "function") {
      removeActiveStoreListener = storeRef.subscribe((value) => {
        $selectedStoreValue.set(value);
      });
      $selectedStoreValue.set(storeRef.get());
    }
  } else {
    $selectedStoreValue.set(null);
  }
});

export const $entries = computed(
  [$plainValueRegistry, $storeRegistry, $hookRegistry],
  (valueRegistry, storeRegistry, hookRegistry) => {
    const valueEntries: Entry[] = Object.keys(valueRegistry).map((key) => ({
      key,
      keyType: "value",
    }));
    const storeEntries: Entry[] = Object.keys(storeRegistry).map((key) => ({
      key,
      keyType: "store",
    }));
    const hookEntries: Entry[] = hookRegistry.map((key) => ({
      key,
      keyType: "hook",
    }));
    return [...valueEntries, ...storeEntries, ...hookEntries].sort((a, b) =>
      a.key.localeCompare(b.key)
    );
  }
);

export const $selectedPlainValue = computed(
  [$selectedEntry, $plainValueRegistry],
  (entry, valueRegistry) => {
    if (entry && entry.keyType === "value") {
      return valueRegistry[entry.key];
    }
    return null;
  }
);

export const $selectedValue = computed(
  [
    $selectedEntry,
    $selectedStoreValue,
    $selectedPlainValue,
    $selectedHookValue,
  ],
  (entry, selectedStoreValue, selectedPlainValue, selectedHookValue) => {
    if (!entry) return null;
    switch (entry.keyType) {
      case "store":
        return JSON.stringify(selectedStoreValue, null, 2);
      case "value":
        return JSON.stringify(selectedPlainValue, null, 2);
      case "hook":
        return JSON.stringify(selectedHookValue, null, 2);
      default:
        throw new Error(`Unknown entry type: ${entry.keyType}`);
    }
  }
);
