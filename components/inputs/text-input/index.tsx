'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/form"
import type { TextInputProps } from "./types"
import type { FieldValues, Path, PathValue } from "react-hook-form"
import { BaseInput } from "@/components/commom/base-input"

export const TextInput = <TForm extends FieldValues>(props: TextInputProps<TForm>) => {
  const { name, label, form, ...TextInputProps } = props;

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <BaseInput
                placeholder={props.placeholder}
                type="text"
                {...TextInputProps}
                value={field.value || ''}
                onChange={field.onChange}
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
