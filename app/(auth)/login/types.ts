import type { UserToken } from "@/globals/utils/jwt";
import * as z from "zod";

export type LoginParams = {
	email: string;
	password: string;
};

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type LoginResponse = { token: string; userToken: UserToken };
