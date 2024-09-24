"use server";

import { db } from "@/db";
import type { LoginParams, LoginResponse } from "./types";
import { eq } from "drizzle-orm";
import { generateToken } from "@/lib/utils/jwt";
import { usersTable } from "@/db/schemas";

export const login = async (
	params: LoginParams,
): Promise<LoginResponse | undefined> => {
	const { email, password } = params;

	const user = await db.query.usersTable.findFirst({
		where: eq(usersTable.email, email),
	});

	const passwordMatches = await Bun.password.verify(
		password,
		user?.password ?? "",
	);

	if (!user || !passwordMatches) {
		return;
	}

	const userToken = {
		id: user.id,
		email: user.email,
		name: user.name,
	};
	const token = generateToken(userToken);

	if (!token) {
		return;
	}

	return { token, userToken };
};
