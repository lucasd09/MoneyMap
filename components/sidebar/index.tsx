'use client';
import { Button } from "@/components/button";
import { useSidebar } from "@/globals/stores/use-sidebar";
import { cn } from "@/lib/utils";
import {
  BarChart3,
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
    <div className={cn("flex h-screen flex-col justify-between border-r bg-background transition-all duration-150 ease-out", isOpen ? 'w-64' : 'w-[53px]')}>
      <div className="flex flex-col w-full">
        <div className="py-4">
          <div className="flex items-center ml-2 space-x-2 overflow-hidden">
            <Button size={'icon'} variant={'ghost'} className="min-w-9" onClick={handleSidebar}>
              <DollarSign className="size-6 min-w-6" />
            </Button>
            <h1 className="text-lg font-semibold whitespace-nowrap">Money Map</h1>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mx-2 overflow-hidden">
          <NavButton title="Dashboard" path="/dashboard" Icon={Home} />
          <NavButton title="Contas" path="/accounts" Icon={Wallet} />
          <NavButton title="Transações" path="/transactions" Icon={CreditCard} />
          <NavButton title="Investimentos" path="/investments" Icon={BarChart3} />
        </nav>
      </div>
      <nav className={cn('flex justify-evenly items-center gap-2 mb-4', !isOpen && 'flex-col')}>
        <NavButton path="/profile" Icon={User} variant="outline" />
        <NavButton path="/settings" Icon={Settings} variant="outline" />
        <ThemeToggle />
        <NavButton Icon={LogOut} variant="outline" onClick={handleLogout} path="/login" />
      </nav >
    </div >
  )
}