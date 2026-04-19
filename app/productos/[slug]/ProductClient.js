'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import ProductCard from '@/components/ProductCard'
import { TIENDA, CATEGORIAS } from '@/lib/config'


export default function ProductClient({ product, related }) {
  const [imagenActiva, setImagenActiva] = useState(0)
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null)

  const phoneNumber = '5213327862523'

  const mensajeWhatsApp = tallaSeleccionada
    ? `Hola! Me interesa el producto: *${product.name}* en talla *${tallaSeleccionada}* ($${product.price?.toLocaleString('es-MX')} MXN). ¿Está disponible?`
    : `Hola! Me interesa el producto: *${product.name}* ($${product.price?.toLocaleString('es-MX')} MXN). ¿Me puedes dar más información?`

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensajeWhatsApp)}`

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          <span>/</span>
          <Link href={`/catalogo/${product.gender}`} className="hover:text-black transition-colors capitalize">
            {product.gender}
          </Link>
          <span>/</span>
          <Link href={`/catalogo/${product.gender}?categoria=${product.category}`} className="hover:text-black transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-black truncate max-w-32">{product.name}</span>
        </div>

        {/* Producto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* Imagenes */}
          <div className="flex flex-col gap-4">

            {/* Imagen principal */}
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              {product.images?.[imagenActiva] ? (
                <Image
                  src={urlFor(product.images[imagenActiva]).width(800).height(800).url()}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              {/* Badge sin stock */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
                  <span className="bg-gray-800 text-white px-6 py-2 text-sm uppercase tracking-widest rounded-full">
                    Agotado
                  </span>
                </div>
              )}
            </div>

            {/* Miniaturas */}
            {product.images?.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImagenActiva(index)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-colors
                      ${imagenActiva === index ? 'border-black' : 'border-transparent'}`}
                  >
                    <Image
                      src={urlFor(img).width(200).height(200).url()}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info del producto */}
          <div className="flex flex-col">

            {/* Categoria y genero */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-gray-400 capitalize">
                {product.gender}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 capitalize">
                {product.category}
              </span>
            </div>

            {/* Nombre */}
            <h1 className="text-3xl font-bold text-black mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Precio */}
            <p className="text-2xl font-bold mb-6">
              ${product.price?.toLocaleString('es-MX')}
              <span className="text-sm font-normal text-gray-400 ml-2">MXN</span>
            </p>

            {/* Descripcion */}
            {product.description && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Tallas */}
            {product.isUnitalla ? (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Talla</p>
                <span className="inline-block border-2 border-black px-6 py-2 text-sm font-medium rounded-full">
                  Unitalla
                </span>
              </div>
            ) : product.sizes?.length > 0 ? (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Talla
                  </p>
                  {tallaSeleccionada && (
                    <p className="text-xs text-gray-500">
                      Seleccionada: <span className="font-bold text-black">{tallaSeleccionada}</span>
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((talla) => (
                    <button
                      key={talla}
                      onClick={() => setTallaSeleccionada(talla)}
                      className={`w-12 h-12 rounded-xl text-sm font-medium border-2 transition-colors
                        ${tallaSeleccionada === talla
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-700 hover:border-black'
                        }`}
                    >
                      {talla}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Disponibilidad */}
            <div className="flex items-center gap-2 mb-8">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-gray-300'}`} />
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                {product.inStock ? 'Disponible' : 'Agotado'}
              </p>
            </div>

            {/* Boton WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-sm uppercase tracking-widest font-medium transition-colors mb-4
                ${product.inStock
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'bg-gray-200 text-gray-400 pointer-events-none'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {product.inStock ? 'Preguntar por WhatsApp' : 'No disponible'}
            </a>

            {/* Info extra */}
            <div className="border-t border-gray-100 pt-6 mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {TIENDA.direccion}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Atención por WhatsApp
              </div>
            </div>

          </div>
        </div>

        {/* Productos relacionados */}
        {related?.length > 0 && (
          <div className="border-t border-gray-100 pt-16">
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-8">
              También te puede interesar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}