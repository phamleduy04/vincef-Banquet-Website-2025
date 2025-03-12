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
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          <ul className="flex space-x-1 rounded-md bg-black/20 p-1 md:space-x-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 md:text-base ${
                    pathname === item.path ? "bg-primary text-white shadow-md" : "text-white hover:bg-black/30"
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

