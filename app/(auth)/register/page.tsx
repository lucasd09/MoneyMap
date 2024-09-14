'use client'
import Link from "next/link"
import { Button } from "@/components/button"
import { DollarSign } from "lucide-react"
import { Form } from "@/components/form"
import { TextInput } from "@/components/inputs/text-input"
import { useForm } from "react-hook-form"
import { type RegisterFormData, registerSchema } from "./types"
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "./actions"

export default function Page() {

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data: RegisterFormData) => {
    const { name, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      form.setError("confirmPassword", { type: "validate", message: 'Senhas não coincidem' })
      return;
    }

    const userToken = await register({ name, email, password });

    console.log(userToken);
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="flex items-center justify-between px-4 py-3 shadow sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" prefetch={false}>
          <DollarSign className="h-6 w-6" />
          <span className="ml-2 text-lg font-medium">Money Map</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Voltar ao login
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Crie sua conta</h1>
            <p className="text-muted-foreground">Insira suas credenciais para acessar o aplicativo.</p>
          </div>
          <Form {...form}>
            <form className="space-y-2" onSubmit={form.handleSubmit(handleRegister)}>
              <TextInput form={form} label="Nome" name="name" />
              <TextInput form={form} label="Email" name="email" />
              <TextInput form={form} label="Senha" name="password" type="password" />
              <TextInput form={form} label="Confirmar Senha" name="confirmPassword" type="password" />
              <Button type="submit" className="w-full">
                Cadastrar
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  )
}


