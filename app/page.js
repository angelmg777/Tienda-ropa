import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/queries'
import { CATEGORIAS, CATEGORIAS_EMOJIS } from '@/lib/config'

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className="pt-16">

     
      {/* Hero */}
{/* Hero */}
<section className="relative overflow-hidden bg-black text-white min-h-[60vh] flex items-center">

  {/* Fondo holografico animado */}
  <div className="absolute inset-0">
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)',
      }}
    />

    {/* Orbes holograficos */}
    <div
      className="absolute rounded-full"
      style={{
        width: '600px',
        height: '600px',
        top: '-100px',
        right: '-100px',
        background: 'radial-gradient(circle, rgba(120,80,255,0.15) 0%, rgba(0,200,255,0.08) 40%, transparent 70%)',
        animation: 'float1 8s ease-in-out infinite',
        filter: 'blur(40px)',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: '500px',
        height: '500px',
        bottom: '-150px',
        left: '-100px',
        background: 'radial-gradient(circle, rgba(0,200,150,0.12) 0%, rgba(100,50,255,0.08) 40%, transparent 70%)',
        animation: 'float2 10s ease-in-out infinite',
        filter: 'blur(50px)',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: '350px',
        height: '350px',
        top: '30%',
        left: '40%',
        background: 'radial-gradient(circle, rgba(255,100,150,0.1) 0%, rgba(80,100,255,0.08) 40%, transparent 70%)',
        animation: 'float3 12s ease-in-out infinite',
        filter: 'blur(40px)',
      }}
    />

    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        animation: 'gridMove 20s linear infinite',
      }}
    />

    {/* Shimmer lines */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        background: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.03) 80px, rgba(255,255,255,0.03) 160px)',
        animation: 'shimmer 6s linear infinite',
      }}
    />
  </div>

  {/* Keyframes */}
  <style>{`
    @keyframes float1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(-30px, 20px) scale(1.1); }
      66% { transform: translate(20px, -30px) scale(0.95); }
    }
    @keyframes float2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -20px) scale(1.05); }
      66% { transform: translate(-20px, 30px) scale(1.1); }
    }
    @keyframes float3 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-40px, -20px) scale(1.15); }
    }
    @keyframes gridMove {
      0% { transform: translate(0, 0); }
      100% { transform: translate(60px, 60px); }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes badgePulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `}</style>

  <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
    <div className="max-w-2xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-purple-400"
          style={{ animation: 'badgePulse 2s ease-in-out infinite' }}
        />
        <p className="text-xs uppercase tracking-widest text-gray-300">
          Nueva colección
        </p>
      </div>

      {/* Titulo */}
      <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6 tracking-tight">
        Estilo que
        <span
          className="block"
          style={{
            background: 'linear-gradient(90deg, #ffffff 0%, #a78bfa 40%, #38bdf8 70%, #ffffff 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 4s linear infinite',
          }}
        >
          habla por ti
        </span>
      </h1>

      <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
        Encuentra ropa y accesorios para hombre y mujer. Calidad y diseño en cada pieza.
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/catalogo/hombre"
          className="text-center px-8 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(255,255,255,1)',
            color: '#000',
          }}
        >
          Hombre
        </Link>
        <Link
          href="/catalogo/mujer"
          className="text-center px-8 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
          }}
        >
          Mujer
        </Link>
        <Link
          href="/catalogo/todo"
          className="text-center flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-all duration-300"
        >
          Ver todo
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

    </div>
  </div>

  {/* Texto decorativo */}
  <div
    className="absolute right-0 top-1/2 -translate-y-1/2 font-bold leading-none select-none hidden lg:block"
    style={{
      fontSize: '16rem',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    Fox Shop
  </div>

</section>

{/* Categorias rapidas */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-8">
            Explorar categorías
          </h2>
          <div className="flex gap-3 flex-wrap">
            {[...new Set([...CATEGORIAS.hombre, ...CATEGORIAS.mujer])].map((cat) => (
              <Link
                key={cat}
                href={`/catalogo/todo?categoria=${cat}`}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 border border-gray-100 hover:border-black hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                <span className="text-base">{CATEGORIAS_EMOJIS[cat] || '🏷️'}</span>
                <span className="text-xs uppercase tracking-widest font-medium text-gray-700 group-hover:text-black capitalize transition-colors">
                  {cat}
                </span>
              </Link>
            ))}
          </div>
        </section>

      {/* Productos destacados */}
      {featuredProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs uppercase tracking-widest text-gray-400">
              Productos destacados
            </h2>
            <Link
              href="/catalogo/todo"
              className="text-xs uppercase tracking-widest text-black hover:text-gray-500 transition-colors"
            >
              Ver todo →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Banner intermedio */}
      <section className="bg-gray-50 py-20 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            ¿Tienes dudas?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contáctanos por WhatsApp
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Estamos para ayudarte. Pregunta por tallas, disponibilidad o cualquier duda que tengas.
          </p>
          <a
            href="https://wa.me/5213327862523"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}