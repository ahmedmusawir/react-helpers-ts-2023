import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
  resetMax: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 50,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
  resetMax: () => set(() => ({ max: 0 })),
}));

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);
