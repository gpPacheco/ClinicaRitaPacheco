import type { Metadata } from "next"
import { LoginForm } from "@/components/login-form"

export const metadata: Metadata = {
  title: "Login - Rita Pacheco Podologia",
  description: "Acesse sua conta na clínica de podologia Rita Pacheco em Franca",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-comfort-cream via-comfort-pearl to-comfort-blush">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-comfort-accent">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-dancing text-comfort-text">Entrar na sua conta</h2>
          <p className="mt-2 text-center text-sm font-poppins text-comfort-text-muted">Acesse sua área pessoal</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
