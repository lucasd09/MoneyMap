export type TokenParams = {
	token: string | null;
	id: number | null;
	name: string | null;
};

export type TokenActions = {
	setToken: (token: TokenParams) => void;
	clearToken: () => void;
};

export type TokenStoreState = TokenParams & TokenActions;
