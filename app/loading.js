export default function Loading() {
    return (
      <div className="pt-16 min-h-screen bg-white">
  
        {/* Hero skeleton */}
        <div className="bg-gray-100 min-h-[90vh] animate-pulse" />
  
        {/* Categorias skeleton */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="h-3 w-32 bg-gray-100 rounded mb-8 animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </div>
  
        {/* Productos skeleton */}
        <div className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-100">
          <div className="h-3 w-40 bg-gray-100 rounded mb-8 animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-square bg-gray-100 rounded-2xl animate-pulse" />
                <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
                <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
                <div className="h-10 bg-gray-100 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
  
      </div>
    )
  }