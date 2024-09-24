import { categoriesTable } from "@/db/schemas";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Category = InferSelectModel<typeof categoriesTable>;

export type CategoriesInsert = InferInsertModel<typeof categoriesTable>;
