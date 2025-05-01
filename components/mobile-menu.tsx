"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu when clicking a link
  const handleLinkClick = () => {
    onClose()
  }

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-blue-500 flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between p-4 border-b border-blue-400">
        <h2 className="text-2xl font-heading text-white">Menu</h2>
        <button
          onClick={onClose}
          className="text-white p-2 hover:bg-blue-600 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex-1 px-4 py-8">
        <ul className="space-y-6">
          <li>
            <Link
              href="#wsl"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              WSL Tour
            </Link>
          </li>
          <li>
            <Link
              href="#parkoff"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              Park Off
            </Link>
          </li>
          <li>
            <Link
              href="#comedy"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              Comedy Night
            </Link>
          </li>
          <li>
            <Link
              href="#fanpark"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              Fan Park
            </Link>
          </li>
          <li>
            <Link
              href="#mtb"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              MTB
            </Link>
          </li>
          <li>
            <Link
              href="#jiujitsu"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              Jiujitsu
            </Link>
          </li>
          <li>
            <Link
              href="#funduro"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              Funduro
            </Link>
          </li>
          <li>
            <Link
              href="#fishing"
              onClick={handleLinkClick}
              className="text-white text-2xl font-heading hover:text-blue-100 block py-2"
            >
              Fishing
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-400">
        <Link
          href="#tickets"
          onClick={handleLinkClick}
          className="block w-full text-center bg-white text-blue-600 font-heading text-xl py-4 rounded-md hover:bg-blue-50 transition-colors"
        >
          Get Tickets
        </Link>
      </div>
    </div>
  )
}
