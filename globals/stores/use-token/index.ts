import { create } from "zustand";
import { persist, type PersistStorage } from "zustand/middleware";
import type { TokenParams, TokenStoreState } from "./types";

export const useToken = create<TokenStoreState>()(
	persist(
		(set) => ({
			id: null,
			name: null,
			token: null,
			setToken: ({ id, name, token }: TokenParams) => set({ token, id, name }),
			clearToken: () => set({ token: null, id: null, name: null }),
		}),
		{
			name: "token-storage",
		},
	),
);
