'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/form"
import type { TextInputProps } from "./types"
import type { FieldValues, Path, PathValue } from "react-hook-form"
import { BaseInput } from "@/components/commom/base-input"

export const TextInput = <TForm extends FieldValues>(props: TextInputProps<TForm>) => {
  const { name, label, form, ...TextInputProps } = props;

  const defaultValue = form.formState.defaultValues?.[name] as PathValue<TForm, Path<TForm>>;

  return <FormField name={name} control={form.control} defaultValue={defaultValue} render={({ field }) => {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <BaseInput
            placeholder={props.placeholder}
            type="text"
            {...field}
            {...TextInputProps}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }} />
}