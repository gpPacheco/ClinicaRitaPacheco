"use client"

import Link from "next/link"
import { FaUser } from "react-icons/fa"
import { memo, useEffect, useState } from "react"
import { createSupabaseBrowserClient } from "@/lib/supabase/client"

const LoginButton = memo(() => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const supabase = createSupabaseBrowserClient()
    // Lê sessão atual
    supabase.auth.getSession().then(({ data }) => {
      setIsLogged(!!data.session)
    })
    // Observa mudanças de autenticação para atualizar o botão
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLogged(!!session)
    })
    return () => {
      sub.subscription.unsubscribe()
    }
  }, [])

  const href = isLogged ? "/usuario" : "/login"
  const label = isLogged ? "Minha conta" : "Login"

  return (
    <Link
      href={href}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-comfort-accent hover:bg-comfort-warm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-comfort-accent transition duration-150 ease-in-out"
    >
      <FaUser className="mr-2" />
      {label}
    </Link>
  )
})

LoginButton.displayName = "LoginButton"

export default LoginButton

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/

