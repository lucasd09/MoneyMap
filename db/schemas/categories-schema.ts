import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { transactionsTable } from "./transactions-schema";

export const categoriesTable = sqliteTable("categories", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	description: text("description"),
});

export const categoriesRelations = relations(categoriesTable, ({ many }) => ({
	transactions: many(transactionsTable),
}));
