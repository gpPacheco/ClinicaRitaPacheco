"use client"

import Link from "next/link"
import { FaUser } from "react-icons/fa"
import { memo } from "react"

const LoginButton = memo(() => {
  return (
    <Link
      href="/login"
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-comfort-accent hover:bg-comfort-warm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-comfort-accent transition duration-150 ease-in-out"
    >
      <FaUser className="mr-2" />
      Login
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

