"use server";

import { db } from "@/db";
import type { LoginParams, LoginResponse } from "./types";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";
import { generateToken } from "@/globals/utils/jwt";

export const login = async (
	params: LoginParams,
): Promise<LoginResponse | undefined> => {
	const { email, password } = params;

	const user = await db.query.users.findFirst({
		where: eq(users.email, email),
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
