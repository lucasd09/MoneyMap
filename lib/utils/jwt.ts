import jwt from "jsonwebtoken";

export type UserToken = {
	id: number;
	email: string;
	name: string;
};

export const generateToken = (data: UserToken) => {
	if (!process.env.JWT_SECRET) return;

	const token = jwt.sign(data, process.env.JWT_SECRET);

	return token;
};

export const decodeToken = (token: string) => {
	if (!process.env.JWT_SECRET) return;

	const veririedToken = jwt.verify(token, process.env.JWT_SECRET) as UserToken;
	return veririedToken;
};
