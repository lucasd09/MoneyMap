import type { BaseInputProps } from "@/components/commom/base-input/types";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type TextInputProps<TForm extends FieldValues> = Omit<
	BaseInputProps,
	"form"
> & {
	form: UseFormReturn<TForm>;
	name: Path<TForm>;
	label: string;
	placeholder?: string;
};
