export type UseSidebarParams = {
	isOpen: boolean;
};

export type UseSidebarActions = {
	setIsOpen: (isOpen: boolean) => void;
};

export type UseSidebarState = UseSidebarParams & UseSidebarActions;
