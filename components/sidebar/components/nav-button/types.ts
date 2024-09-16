import type { LucideProps } from "lucide-react";
import type { ButtonHTMLAttributes, ForwardRefExoticComponent } from "react";

export type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	title?: string;
	path?: string;
	Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
	variant?: "ghost" | "outline";
};
