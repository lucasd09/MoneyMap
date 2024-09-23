import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { transactionsTable } from "./transactions-schema";

export const usersTable = sqliteTable("users", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
	transactions: many(transactionsTable),
}));
