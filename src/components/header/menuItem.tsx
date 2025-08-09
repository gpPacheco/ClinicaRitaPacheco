"use client"

import { memo } from "react"
import Link from "next/link"

interface MenuItemProps {
  href: string
  label: string
  isActive?: boolean
}

const MenuItem = memo(({ href, label, isActive = false }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-200 hover:text-comfort-accent focus:outline-none focus:ring-2 focus:ring-comfort-accent focus:ring-offset-2 rounded-md px-3 py-2 ${
        isActive
          ? "text-comfort-accent border-b-2 border-comfort-accent"
          : "text-gray-700 hover:text-comfort-accent"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  )
})

MenuItem.displayName = "MenuItem"

export default MenuItem

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
