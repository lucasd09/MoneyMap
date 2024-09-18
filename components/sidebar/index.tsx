'use client';
import { Button } from "@/components/button";
import { useSidebar } from "@/globals/stores/use-sidebar";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  ChevronLeft,
  CreditCard,
  DollarSign,
  Home, LogOut, Settings,
  User,
  Wallet
} from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { NavButton } from "./components/nav-button";
import { useToken } from "@/globals/stores/use-token";

export const Sidebar = () => {

  const { isOpen, setIsOpen } = useSidebar();
  const { clearToken } = useToken();

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    clearToken();
  };

  return (
    <aside className={cn("flex h-screen flex-col justify-between border-r bg-background dark:bg-muted dark:border-muted-foreground/20 transition-all duration-150 ease-out", isOpen ? 'w-64' : 'w-[53px]')}>
      <div className="flex flex-col w-full">
        <div className="py-4">
          <div className="flex items-center justify-between mx-2 overflow-hidden">
            <div className="flex items-center space-x-2"><Button size={'icon'} variant={'ghost'} className="min-w-9" onClick={handleSidebar}>
              <DollarSign className="size-6 min-w-6" />
            </Button>
              <h1 className="text-lg font-semibold whitespace-nowrap">Money Map</h1>
            </div>
            <Button variant="ghost" size='icon' className="rounded-full" onClick={handleSidebar}>
              <ChevronLeft size={16} />
            </Button>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col gap-2 mx-2 overflow-hidden">
            <NavButton title="Dashboard" path="/dashboard" Icon={Home} />
            <NavButton title="Contas" path="/accounts" Icon={Wallet} />
            <NavButton title="Transações" path="/transactions" Icon={CreditCard} />
            <NavButton title="Investimentos" path="/investments" Icon={BarChart3} />
          </ul>
        </nav>
      </div>
      <nav className=' mb-4'>
        <ul className={cn("gap-2 flex justify-evenly items-center", !isOpen && 'flex-col')}>
          <NavButton path="/profile" Icon={User} variant="outline" />
          <NavButton path="/settings" Icon={Settings} variant="outline" />
          <ThemeToggle />
          <NavButton Icon={LogOut} variant="outline" onClick={handleLogout} path="/login" />
        </ul>
      </nav >
    </aside >
  )
}