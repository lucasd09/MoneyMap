import type { Metadata } from "next";
import "./globals.css";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: PropsWithChildren) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
