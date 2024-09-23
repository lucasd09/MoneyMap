import { z } from "zod";

export const transactionSchema = z.object({
	amount: z.number(),
	type: z.enum(["income", "expense"]),
	description: z.string(),
	categoryId: z.number(),
});

export type TransactionFormData = { id: number; userId: number } & z.infer<
	typeof transactionSchema
>;
