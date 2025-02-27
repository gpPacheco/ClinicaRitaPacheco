import { FaUser } from 'react-icons/fa'; // Importa o ícone desejado
import { LoginForm } from './loginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-zinc-50 p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <FaUser className="mx-auto text-6xl text-gray-600 border-4 rounded-full border-zinc-200 bg-zinc-200" /> 
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Faça login para acessar sua conta
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
