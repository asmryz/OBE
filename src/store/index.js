import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";
import { createUseStore } from "./utils";

export const store = createStore()(persist(
  (set) => ({
    initialized: false,
    signedIn: false,
    signIn: () => set({ signedIn: true }),
    signOut: () => set({ signedIn: false })
  }),
  {
    name: "obe-store",
    storage: createJSONStorage(() => localStorage)
    // Uncomment to persist only specific keys
    // partialize: (state) => ({ signedIn: state.signedIn })
  }
));

// Subscribe to all state changes
store.subscribe((state) => {
  console.log(state);
});

export const useStore = createUseStore(store);
