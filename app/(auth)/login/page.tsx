'use client';
import Link from "next/link";
import { Button } from "@/components/button";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Chrome, DollarSign } from "lucide-react";
import { Form } from "@/components/form";
import { TextInput } from "@/components/inputs/text-input";
import { useForm } from "react-hook-form";
import { type LoginFormData, loginSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "./actions";
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { useToken } from "@/globals/stores/use-token";


export default function Page() {

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { setToken } = useToken()

  const handleLogin = async (data: LoginFormData) => {
    const { email, password } = data;

    const res = await login({ email, password })

    if (!res?.token) {
      form.setError('root', { type: 'validate', message: 'Credenciais inválidas' })
      toast('Credenciais inválidas!');
      return;
    }

    const { id, name } = res.userToken;

    setToken({ id, name, token: res.token });
    router.push('/dashboard');
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="flex items-center justify-between px-4 py-3 shadow sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" prefetch={false}>
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
          <Form {...form}>
            <form className="space-y-2" onSubmit={form.handleSubmit(handleLogin)}>
              <TextInput form={form} label="Email" name="email" />
              <TextInput form={form} label="Senha" name="password" type="password" />
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </Form>
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


