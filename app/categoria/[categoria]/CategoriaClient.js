'use client'
import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'
import { CATEGORIAS } from '@/lib/config'

export default function CategoriaClient({ products, gender, category }) {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState(category)

  const categorias = CATEGORIAS[gender] || []

  const productosFiltrados = useMemo(() => {
    return products.filter((p) => {
      const coincideCategoria = p.category === categoriaActiva
      const coincideBusqueda = p.name.toLowerCase().includes(busqueda.toLowerCase())
      return coincideCategoria && coincideBusqueda
    })
  }, [products, categoriaActiva, busqueda])

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            {gender}
          </p>
          <h1 className="text-3xl font-bold capitalize">
            {categoriaActiva}
          </h1>
        </div>

        {/* Barra de busqueda */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-black transition-colors pr-12"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filtros de categoria en pills */}
        <div className="flex gap-2 flex-wrap mb-8 overflow-x-auto pb-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-colors whitespace-nowrap
                ${categoriaActiva === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resultados */}
        {productosFiltrados.length > 0 ? (
          <>
            <p className="text-xs text-gray-400 mb-6">
              {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productosFiltrados.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-300 text-6xl mb-4">🛍️</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest">
              No hay productos en esta categoría
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Pronto agregaremos más productos
            </p>
          </div>
        )}

      </div>
    </div>
  )
}