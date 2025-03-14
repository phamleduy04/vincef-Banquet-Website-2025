"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "INTRO", path: "/intro" },
    { name: "SEAT", path: "/seat" },
    { name: "FORMS", path: "/forms" },
    { name: "DRESS CODE", path: "/dress-code" },
    { name: "TIMELINE", path: "/timeline" },
    // { name: "DONATION", path: "/donation" },
    { name: "OFFICERS", path: "/officers" },
  ]

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:justify-center">
          {/* Mobile menu button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo or site name (optional) */}
          <div className="md:hidden">
            <Link href="/" className="text-lg font-bold text-white">
              
            </Link>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-1 rounded-md bg-black/20 p-1">
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

          {/* Mobile navigation */}
          <div
            className={`fixed top-16 left-0 right-0 bottom-0 bg-black/90 backdrop-blur-md transition-all duration-300 md:hidden ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="h-full overflow-y-auto">
              <ul className="flex flex-col p-4">
                {navItems.map((item) => (
                  <li key={item.path} className="py-1">
                    <Link
                      href={item.path}
                      className={`block rounded-md px-4 py-3 text-base font-medium transition-all duration-200 ${
                        pathname === item.path ? "bg-primary text-white" : "text-white hover:bg-black/30"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

