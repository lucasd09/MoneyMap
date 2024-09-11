import Link from "next/link"
import { Label } from "@/components/label"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { TwitterLogoIcon } from "@radix-ui/react-icons"
import { Chrome, DollarSign } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="flex items-center justify-between px-4 py-3 shadow sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center" prefetch={false}>
          <DollarSign className="h-6 w-6" />
          <span className="ml-2 text-lg font-medium">Money Map</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Cadastre-se
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Entre com a sua conta</h1>
            <p className="text-muted-foreground">Insira suas credenciais para acessar o aplicativo.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Ou entre com</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center justify-center">
              <Chrome className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <TwitterLogoIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <TwitterLogoIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link href="#" className="underline" prefetch={false}>
              Cadastre-se
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}


