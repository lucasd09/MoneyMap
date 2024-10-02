'use client';
import { Button } from "@/components/button";
import { TextInput } from "@/components/inputs/text-input";
import { Sheet } from "@/components/sheet"
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form"
import type { TransactionFormData } from "./types";
import { CurrencyInput } from "@/components/inputs/currency-input";

export const FormTransactions = () => {
  const form = useForm<TransactionFormData>()

  const handleFormSubmit = (data: TransactionFormData) => {
    console.log(data);
  }

  return (
    <Sheet
      form={form}
      trigger={<Button className="size-8 px-0"><Plus size={20} /></Button>}
      onSuccess={handleFormSubmit}
      title='Criar transação'
    >
      <TextInput form={form} name="description" label="Descrição" />
      <CurrencyInput form={form} name="amount" label="Valor" />
      <TextInput form={form} name="type" label="Tipo" />
      <TextInput form={form} name="categoryId" label="Categoria" />
    </Sheet>
  )
}