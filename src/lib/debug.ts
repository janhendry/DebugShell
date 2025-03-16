import { debugStore } from "./api";
import {
  $hookRegistry,
  $plainValueRegistry,
  $selectedEntry,
  $selectedHookValue,
  $selectedStoreValue,
  $storeRegistry,
} from "./registry";
import { $entries, $selectedPlainValue, $selectedValue } from "./subscriptions";

const DEBUG = true;

if (DEBUG) {
  debugStore("plainValueRegistry", $plainValueRegistry);
  debugStore("storeRegistry", $storeRegistry);
  debugStore("hookRegistry", $hookRegistry);
  debugStore("selectedEntry", $selectedEntry);
  debugStore("selectedStoreValue", $selectedStoreValue);
  debugStore("selectedHookValue", $selectedHookValue);
  debugStore("entries", $entries);
  debugStore("selectedPlainValue", $selectedPlainValue);
  debugStore("selectedValue", $selectedValue);
}
