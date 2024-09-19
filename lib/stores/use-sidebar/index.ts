import { create } from "zustand";
import { persist, type PersistStorage } from "zustand/middleware";
import type { UseSidebarState } from "./types";

export const useSidebar = create<UseSidebarState>()(
	persist(
		(set) => ({
			isOpen: false,
			setIsOpen: (isOpen) => set({ isOpen }),
		}),
		{
			name: "sidebar-storage",
		},
	),
);
