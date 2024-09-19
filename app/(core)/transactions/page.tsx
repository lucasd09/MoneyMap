'use client'
import { DataTable } from "@/components/data-table";
import { FormTransactions } from "@/components/forms/form-transactions";
import type { Transaction } from "@/models/transactions";
import type { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.original.amount.toFixed(2)}`, // Formata o valor como moeda
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (row.original.type === "income" ? "Income" : "Expense"),
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "category_id",
    header: "Category ID",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => new Date(row.original.date).toLocaleDateString(), // Formata a data
  },
]

const data: Transaction[] = [
  {
    date: "2024-09-19",
    id: 1,
    userId: 101,
    amount: 1500.00,
    type: "income",
    description: "Salário de setembro",
    categoryId: 1,
  },
  {
    date: "2024-09-18",
    id: 2,
    userId: 101,
    amount: 200.00,
    type: "expense",
    description: "Jantar no restaurante",
    categoryId: 2,
  },
  {
    date: "2024-09-17",
    id: 3,
    userId: 102,
    amount: 50.00,
    type: "expense",
    description: "Compra de livros",
    categoryId: 3,
  },
  {
    date: "2024-09-16",
    id: 4,
    userId: 103,
    amount: 120.00,
    type: "expense",
    description: "Gasolina",
    categoryId: 4,
  },
  {
    date: "2024-09-15",
    id: 5,
    userId: 104,
    amount: 300.00,
    type: "income",
    description: "Venda de produtos online",
    categoryId: 5,
  }
]

export default function Page() {
  return <div>
    <DataTable columns={columns} data={data} create={<FormTransactions />} />
  </div>
}