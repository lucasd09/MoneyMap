import type { VariantProps } from "class-variance-authority";
import type {
	ComponentPropsWithoutRef,
	ElementRef,
	HTMLAttributes,
	ReactNode,
} from "react";
import type { sheetVariants } from "./consts";
import type { Content } from "@radix-ui/react-dialog";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export type SheetProps<TForm extends FieldValues> = {
	children: ReactNode;
	trigger: ReactNode;
	title?: ReactNode;
	form: UseFormReturn<TForm>;
	onClose?: () => void;
	onSuccess?: (data: TForm) => void;
};

export type SheetHeaderProps = HTMLAttributes<HTMLDivElement> & {
	onClose: () => void;
};

export type SheetContentProps = ComponentPropsWithoutRef<typeof Content> &
	VariantProps<typeof sheetVariants>;
export type SheetContentRef = ElementRef<typeof Content>;
