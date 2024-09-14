"use server";

import { db } from "@/db";
import type { RegisterParams } from "./types";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";
import { generateToken } from "@/globals/utils/jwt";

export const register = async (params: RegisterParams) => {
	const { email, password, name } = params;

	const registeredUser = await db.query.users.findFirst({
		where: eq(users.email, email),
	});

	if (registeredUser) {
		return undefined;
	}

	const hashedPassword = await Bun.password.hash(password);

	try {
		const createdUsers = await db
			.insert(users)
			.values({ email: email, name: name || "", password: hashedPassword })
			.returning()
			.execute();

		const createdUser = createdUsers[0];

		const userToken = {
			id: createdUser.id,
			email: createdUser.email,
			name: createdUser.name,
		};
		const token = generateToken(userToken);

		return { token, userToken };
	} catch {
		throw new Error("Register error");
	}
};
