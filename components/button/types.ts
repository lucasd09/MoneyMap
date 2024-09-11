import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import type { buttonVariants } from "./consts";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};
