"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "INTRO", path: "/intro" },
    { name: "SEAT", path: "/seat" },
    { name: "FORMS", path: "/forms" },
    { name: "DRESS CODE", path: "/dress-code" },
    { name: "TIMELINE", path: "/timeline" },
    { name: "DONATION", path: "/donation" },
    { name: "OFFICERS", path: "/officers" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          <ul className="flex space-x-4 md:space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary md:text-base ${
                    pathname === item.path ? "text-primary font-bold" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

