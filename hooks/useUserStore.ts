import { zustandStorage } from "@/utils/zustandStorage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  user: any;
  isGuest: boolean;
  setIsGuest: (isGuest: boolean) => void;
  setUser: (user: any) => any;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isGuest: false,
      setIsGuest: (isGuest) => set({ isGuest }),
      setUser: (user) => set({ user }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useUserStore;
