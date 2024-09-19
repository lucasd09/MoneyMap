import type { transactionsTable } from "@/db/schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Transaction = InferSelectModel<typeof transactionsTable>;

export type TransactionInsert = InferInsertModel<typeof transactionsTable>;
