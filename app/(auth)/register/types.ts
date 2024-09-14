import * as z from "zod";

export const registerSchema = z.object({
	email: z.string().email(),
	name: z.string(),
	password: z.string(),
	confirmPassword: z.string(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export type RegisterParams = {
	email: string;
	name: string;
	password: string;
};
