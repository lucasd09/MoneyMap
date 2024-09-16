'use client';
import { ThemeProvider } from "@/components/theme-provider";
import { useToken } from "@/globals/stores/use-token";
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  const { token } = useToken();

  if (!token) {
    router.push('/login')

    return;
  }

  return <div>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  </div>
}