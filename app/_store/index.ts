import { create } from 'zustand';

interface IWebStore {
  section: string;
  setSection: (section: string) => void;
}

export const useWebStore = create<IWebStore>((set) => ({
  section: '',
  setSection: (section: string) => set({ section }),
}));
