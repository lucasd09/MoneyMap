import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
});

export const categories = sqliteTable("categories", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	description: text("description"),
});

export const transactions = sqliteTable("transactions", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	user_id: integer("user_id").notNull(),
	amount: real("amount").notNull(),
	type: text("type").notNull(), // 'income' ou 'expense'
	description: text("description").notNull(),
	category_id: integer("category_id").notNull(),
	date: text("date").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
	transactions: many(transactions),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
	user: one(users, {
		fields: [transactions.user_id],
		references: [users.id],
	}),
	category: one(categories, {
		fields: [transactions.category_id],
		references: [categories.id],
	}),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
	transactions: many(transactions),
}));
