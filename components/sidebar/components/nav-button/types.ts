import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";

export type NavButtonProps = {
	title: string;
	path: string;
	Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
	variant?: "ghost" | "outline";
};
