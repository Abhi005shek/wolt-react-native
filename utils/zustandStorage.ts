// import { createMMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const zustandStorage: StateStorage = AsyncStorage;


// const storage = createMMKV();

// export const zustandStorage: StateStorage = {
//   setItem: (name, value) => {
//     return storage.set(name, value);
//   },
//   getItem: (name) => {
//     return storage.getString(name) ?? null;
//   },
//   removeItem: (name) => {
//     return storage.remove(name);
//   },
// };
