"use client";

import { EyeIcon, EyeOffIcon as EyeSlashIcon } from "lucide-react";
import { useState } from "react";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Cadastro submetido");
  };

  const InputField = ({
    id,
    label,
    type,
    placeholder,
    isPassword,
  }: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    isPassword?: boolean;
  }) => (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={isPassword && showPassword ? "text" : type}
        required
        placeholder={placeholder}
        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
      />
      {isPassword && (
        <button
          type="button"
          className="absolute right-3 top-8"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <EyeIcon className="w-5 h-5 text-gray-700" />
          ) : (
            <EyeSlashIcon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField 
        id="firstName" 
        label="Nome*" 
        type="text" 
        placeholder="Nome" />
      <InputField
        id="lastName"
        label="Sobrenome*"
        type="text"
        placeholder="Sobrenome"
      />

      {/* Data de Nascimento */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Data de Nascimento*
        </label>
        <div className="grid grid-cols-3 gap-3">
          <select
            id="birthDay"
            name="birthDay"
            required
            className="appearance-none px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
          >
            <option value="" disabled selected hidden>
              Dia
            </option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            id="birthMonth"
            name="birthMonth"
            required
            className="appearance-none px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
          >
            <option value="" disabled selected hidden>
              Mês
            </option>
            {[
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ].map((month, index) => (
              <option key={index + 1} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <select
            id="birthYear"
            name="birthYear"
            required
            className="appearance-none px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
          >
            <option value="" disabled selected hidden>
              Ano
            </option>
            {Array.from(
              { length: new Date().getFullYear() - 1900 + 1 },
              (_, i) => (
                <option key={1900 + i} value={1900 + i}>
                  {1900 + i}
                </option>
              )
            ).reverse()}
          </select>
        </div>
      </div>

      <InputField
        id="email"
        label="E-mail*"
        type="email"
        placeholder="seu@email.com"
      />
      <InputField
        id="password"
        label="Senha*"
        type="password"
        placeholder="Senha"
        isPassword
      />
      <InputField
        id="confirmPassword"
        label="Confirmação de Senha*"
        type="password"
        placeholder="Confirme sua senha"
        isPassword
      />
      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        Cadastrar
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Já tem uma conta?{" "}
          <a
            href="./login"
            className="font-medium text-zinc-900 hover:text-zinc-600"
          >
            Fazer login
          </a>
        </p>
      </div>
    </form>
  );
}
