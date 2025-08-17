"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { createSupabaseBrowserClient } from "@/lib/supabase/client"

type Props = {
  className?: string
  label?: string
  redirectTo?: string
}

export function LogoutButton({ className = "", label = "Sair", redirectTo = "/" }: Props) {
  const router = useRouter()

  const onSignOut = useCallback(async () => {
    const supabase = createSupabaseBrowserClient()
    await supabase.auth.signOut()
    router.push(redirectTo)
    router.refresh()
  }, [router, redirectTo])

  return (
    <button
      type="button"
      onClick={onSignOut}
      className={className || "inline-flex items-center px-3 py-2 text-sm rounded-md border text-comfort-text border-comfort-pearl hover:bg-comfort-pearl transition"}
    >
      {label}
    </button>
  )
}
