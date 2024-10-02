import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { BaseInputProps } from "../commom/base-input/types";

export type RadioGroupItem = { value: string; label: string };

export type RadioGroupInputProps<TForm extends FieldValues> = Omit<
	BaseInputProps,
	"form"
> & {
	items: RadioGroupItem[];
	form: UseFormReturn<TForm>;
	name: Path<TForm>;
	label: string;
};
