import type { UserToken } from "@/lib/utils/jwt";
import * as z from "zod";

export type LoginParams = {
	email: string;
	password: string;
};

export const loginSchema = z.object({
	email: z
		.string({ required_error: "Campo obrigatório" })
		.email({ message: "E-mail inválido" }),
	password: z.string({ required_error: "Campo obrigatório" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type LoginResponse = { token: string; userToken: UserToken };
