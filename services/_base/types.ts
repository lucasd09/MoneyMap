import { AnySQLiteColumn, AnySQLiteTable } from "drizzle-orm/sqlite-core";

export type BaseService<TModel, TInsert> = {
	create: (data: TInsert) => Promise<TModel>;
	get: () => Promise<TModel[]>;
	getById: (id: number) => Promise<TModel>;
	update: (id: number, data: Partial<TInsert>) => Promise<TModel>;
	delete: (id: number) => Promise<TModel>;
};

export type BaseTable = AnySQLiteTable & { id: AnySQLiteColumn };
