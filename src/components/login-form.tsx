"use client"

import type React from "react"
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get("email") || "").trim()
    const password = String(formData.get("password") || "")

    try {
      setSubmitting(true)
      const res = await fetch("/api/auth/callback/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          csrfToken: "", // NextAuth vai preencher via página /login usando <SignIn /> se necessário
          email,
          password,
          json: "true",
        }),
      })
      if (res.status === 200) {
        window.location.href = "/usuario"
      } else {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.message || "Falha no login")
      }
    } catch (e: any) {
      setError(e.message || "Erro inesperado")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      {error && <p className="text-sm text-red-600 font-poppins">{error}</p>}
      <div className="rounded-md shadow-sm -space-y-px bg-[#f9f9f9] p-6">
        {/* E-mail */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-poppins text-comfort-text"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-comfort-accent focus:border-comfort-accent focus:z-10 sm:text-sm font-poppins"
            placeholder="seu@email.com"
          />
        </div>

        {/* Senha */}
        <div className="relative">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-poppins text-comfort-text"
          >
            Senha
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-comfort-accent focus:border-comfort-accent sm:text-sm font-poppins"
            placeholder="Senha"
          />
          {/* eye button */}
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Lembrar-me */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-comfort-accent focus:ring-comfort-accent border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-comfort-text font-poppins">
            Lembrar-me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-comfort-accent hover:text-comfort-warm transition-colors duration-300 font-poppins"
          >
            Esqueceu sua senha?
          </a>
        </div>
      </div>

      {/* Botão de entrar */}
      <div>
        <button
          type="submit"
          disabled={submitting}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-comfort-accent hover:bg-comfort-warm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-comfort-accent transition-colors duration-300 font-poppins disabled:opacity-50"
        >
          {submitting ? "Entrando..." : "Entrar"}
        </button>
      </div>

      {/* Cadastrar */}
      <div className="text-center">
        <p className="mt-2 text-sm text-comfort-text-muted font-poppins">
          Não tem uma conta?{" "}
          <a
            href="/cadastro"
            className="font-medium text-comfort-accent hover:text-comfort-warm transition-colors duration-300"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </form>
  )
}
