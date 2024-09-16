import { Button } from "@/components/button"
import Link from "next/link"
import type { NavButtonProps } from "./types";
import { cn } from "@/lib/utils";

export const NavButton = (props: NavButtonProps) => {
  const { path, title, Icon, variant = 'ghost' } = props;

  return <Button variant={variant} className="justify-start gap-2 px-[10px] space-x-2" asChild>
    <Link href={path}>
      <Icon className={cn("size-4 min-w-4", variant === 'ghost' && 'mr-1')} />
      {title}
    </Link>
  </Button>
}