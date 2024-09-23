import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { usersTable } from "./users-schema";
import { categoriesTable } from "./categories-schema";

export const transactionsTable = sqliteTable("transactions", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(),
	amount: real("amount").notNull(),
	type: text("type", { enum: ["income", "expense"] }).notNull(),
	description: text("description").notNull(),
	categoryId: integer("category_id").notNull(),
	date: text("date").notNull(),
});

export const transactionsRelations = relations(
	transactionsTable,
	({ one }) => ({
		user: one(usersTable, {
			fields: [transactionsTable.userId],
			references: [usersTable.id],
		}),
		category: one(categoriesTable, {
			fields: [transactionsTable.categoryId],
			references: [categoriesTable.id],
		}),
	}),
);
