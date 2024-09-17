'use client';
import { Sidebar } from "@/components/sidebar";
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

  return <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <div className="flex bg-muted">
      <Sidebar />
      {children}
    </div>
  </ThemeProvider>
}