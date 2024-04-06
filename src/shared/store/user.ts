import { create } from "zustand";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

type UserStore = {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  addUser: (user: User) => set(() => ({ user })),
  removeUser: () => set(() => ({ user: undefined })),
}));
