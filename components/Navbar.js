'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TIENDA } from '@/lib/config'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname.startsWith(path)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-widest uppercase">
          {TIENDA.nombre}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/catalogo/todo"
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-colors
              ${isActive('/catalogo/todo')
                ? 'bg-black text-white'
                : 'text-gray-500 hover:text-black'
              }`}
          >
            Todo
          </Link>
          <Link
            href="/catalogo/hombre"
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-colors
              ${isActive('/catalogo/hombre')
                ? 'bg-black text-white'
                : 'text-gray-500 hover:text-black'
              }`}
          >
            Hombre
          </Link>
          <Link
            href="/catalogo/mujer"
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-colors
              ${isActive('/catalogo/mujer')
                ? 'bg-black text-white'
                : 'text-gray-500 hover:text-black'
              }`}
          >
            Mujer
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen(!menuOpen)}
          onTouchEnd={(e) => {
            e.preventDefault()
            setMenuOpen(!menuOpen)
          }}
          style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6">
          <div className="flex flex-col gap-2">
            <Link
              href="/catalogo/todo"
              onClick={() => setMenuOpen(false)}
              className={`px-5 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-colors text-center
                ${isActive('/catalogo/todo') ? 'bg-black text-white' : 'border border-gray-200 text-gray-600'}`}
            >
              Todo
            </Link>
            <Link
              href="/catalogo/hombre"
              onClick={() => setMenuOpen(false)}
              className={`px-5 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-colors text-center
                ${isActive('/catalogo/hombre') ? 'bg-black text-white' : 'border border-gray-200 text-gray-600'}`}
            >
              Hombre
            </Link>
            <Link
              href="/catalogo/mujer"
              onClick={() => setMenuOpen(false)}
              className={`px-5 py-3 rounded-full text-xs uppercase tracking-widest font-medium transition-colors text-center
                ${isActive('/catalogo/mujer') ? 'bg-black text-white' : 'border border-gray-200 text-gray-600'}`}
            >
              Mujer
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}