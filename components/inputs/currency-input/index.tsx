'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/form"
import type { FieldValues } from "react-hook-form"
import { BaseInput } from "@/components/commom/base-input"
import { format } from "./consts"
import { useReducer } from "react"
import { CurrencyInputProps } from "./types"

export const CurrencyInput = <TForm extends FieldValues>(props: CurrencyInputProps<TForm>) => {
  const { name, label, form, ...currencyInputProps } = props;

  const initialValue = props.form.getValues()[name]
    ? format(props.form.getValues()[name])
    : "";

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [value, setValue] = useReducer((_: any, next: string) => {
    const digits = next.replace(/\D/g, "");
    return format(Number(digits) / 100);
  }, initialValue);

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleChange = (onChangeFn: any, value: string) => {
    const digits = value.replace(/\D/g, "");

    const realValue = Number(digits) / 100;

    onChangeFn(realValue)
  }

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => {
        const change = field.onChange;

        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <BaseInput
                placeholder={props.placeholder}
                type="text"
                {...currencyInputProps}
                value={value}
                onChange={(ev) => {
                  setValue(ev.target.value)
                  handleChange(change, ev.target.value)
                }}
                onBlur={field.onBlur}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
