import { Button } from "@/components/button"
import Link from "next/link"
import type { NavButtonProps } from "./types";
import { cn } from "@/lib/utils";

export const NavButton = (props: NavButtonProps) => {
  const { path, title, Icon, variant = 'ghost', onClick: handleClick } = props;

  return <li className="list-none">
    <Button variant={variant} className="justify-start gap-2 px-[10px] w-full space-x-2" onClick={handleClick} asChild>
      <Link href={path ?? '#'}>
        <Icon className={cn("size-4 min-w-4", variant === 'ghost' && 'mr-1')} />
        {title}
      </Link>
    </Button>
  </li>
}