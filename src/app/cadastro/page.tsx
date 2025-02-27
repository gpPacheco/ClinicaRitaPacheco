"use client"
import { RegisterForm } from './registerForm';


export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-zinc-50 p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Crie uma nova conta
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            É rápido e fácil!
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
