"use client"

import type React from "react"

import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Cadastro submetido")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px bg-[#f9f9f9] p-6">
        {/* Nome Completo */}
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-poppins text-comfort-text"
          >
            Nome Completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-comfort-accent focus:border-comfort-accent focus:z-10 sm:text-sm font-poppins"
            placeholder="Seu nome completo"
          />
        </div>

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
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-comfort-accent focus:border-comfort-accent focus:z-10 sm:text-sm font-poppins"
            placeholder="seu@email.com"
          />
        </div>

        {/* Telefone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-poppins text-comfort-text"
          >
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-comfort-accent focus:border-comfort-accent focus:z-10 sm:text-sm font-poppins"
            placeholder="(16) 99999-9999"
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
            autoComplete="new-password"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-comfort-accent focus:border-comfort-accent sm:text-sm font-poppins"
            placeholder="Senha"
          />
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

        {/* Confirmar Senha */}
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-poppins text-comfort-text"
          >
            Confirmar Senha
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-comfort-accent focus:border-comfort-accent sm:text-sm font-poppins"
            placeholder="Confirme sua senha"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Termos e Condições */}
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-4 w-4 text-comfort-accent focus:ring-comfort-accent border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-comfort-text font-poppins">
          Aceito os{" "}
          <a href="#" className="font-medium text-comfort-accent hover:text-comfort-warm">
            termos e condições
          </a>
        </label>
      </div>

      {/* Botão de Cadastrar */}
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-comfort-accent hover:bg-comfort-warm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-comfort-accent transition-colors duration-300 font-poppins"
        >
          Criar Conta
        </button>
      </div>

      {/* Link para Login */}
      <div className="text-center">
        <p className="mt-2 text-sm text-comfort-text-muted font-poppins">
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="font-medium text-comfort-accent hover:text-comfort-warm transition-colors duration-300"
          >
            Faça login
          </a>
        </p>
      </div>
    </form>
  )
}
