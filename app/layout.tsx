import type { Metadata } from "next";
import "./globals.css";
import type { PropsWithChildren } from "react";
import { Toaster } from "@/components/sonner";

export const metadata: Metadata = {
	title: "Money Map",
	description: "Finance app",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="pt-BR">
			<body>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
