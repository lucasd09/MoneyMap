'use client';
import { Button } from "@/components/button";
import { TextInput } from "@/components/inputs/text-input";
import { Sheet } from "@/components/sheet"
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form"
import type { TransactionFormData } from "./types";
import { CurrencyInput } from "@/components/inputs/currency-input";
import { RadioInput } from "@/components/inputs/radio-input";

export const FormTransactions = () => {
  const form = useForm<TransactionFormData>()

  const handleFormSubmit = (data: TransactionFormData) => {
    console.log(data);
  }

  const radioItems = [
    { label: 'Despesa', value: 'expense' },
    { label: 'Receita', value: 'income' }
  ]

  return (
    <Sheet
      form={form}
      trigger={<Button className="size-8 px-0"><Plus size={20} /></Button>}
      onSuccess={handleFormSubmit}
      onClose={form.reset}
      title='Criar transação'
    >
      <TextInput form={form} name="description" label="Descrição" />
      <CurrencyInput form={form} name="amount" label="Valor" />
      <RadioInput form={form} name="type" label="Tipo" items={radioItems} />
      <TextInput form={form} name="categoryId" label="Categoria" />
    </Sheet>
  )
}