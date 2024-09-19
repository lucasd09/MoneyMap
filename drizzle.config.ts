import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./db/schema.ts",
	out: "./db/drizzle",
	dialect: "sqlite",
	driver: "turso",
	dbCredentials: {
		url: process.env.DATABASE_URL || "",
		authToken: process.env.TURSO_DB_TOKEN,
	},
});
