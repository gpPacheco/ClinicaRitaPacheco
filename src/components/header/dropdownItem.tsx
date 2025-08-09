"use client"

import { memo } from "react"
import Link from "next/link"

interface DropdownItemProps {
  href: string
  label: string
  isActive?: boolean
}

const DropdownItem = memo(({ href, label, isActive = false }: DropdownItemProps) => {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
        isActive
          ? "text-comfort-accent bg-comfort-blush"
          : "text-gray-700 hover:text-comfort-accent hover:bg-comfort-cream"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  )
})

DropdownItem.displayName = "DropdownItem"

export default DropdownItem

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
