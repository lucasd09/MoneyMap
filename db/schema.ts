import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const usersTable = sqliteTable("users", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
});

export const categoriesTable = sqliteTable("categories", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	description: text("description"),
});

export const transactionsTable = sqliteTable("transactions", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(),
	amount: real("amount").notNull(),
	type: text("type").notNull(), // 'income' ou 'expense'
	description: text("description").notNull(),
	categoryId: integer("category_id").notNull(),
	date: text("date").notNull(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
	transactions: many(transactionsTable),
}));

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

export const categoriesRelations = relations(categoriesTable, ({ many }) => ({
	transactions: many(transactionsTable),
}));
