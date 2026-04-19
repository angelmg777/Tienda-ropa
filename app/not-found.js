import Link from 'next/link'
import { TIENDA } from '@/lib/config'

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-8xl font-bold text-gray-100 mb-4">404</p>
        <h1 className="text-2xl font-bold text-black mb-3">
          Página no encontrada
        </h1>
        <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
          La página que buscas no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-black text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gray-900 transition-colors"
          >
            Ir al inicio
          </Link>
          <a
            href={`https://wa.me/${TIENDA.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}