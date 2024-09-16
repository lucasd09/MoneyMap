'use client';

import { useToken } from "@/globals/stores/use-token";
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  const { token } = useToken();

  if (token) {
    router.push('/dashboard')

    return;
  }

  return <div>{children}</div>
}