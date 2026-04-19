export default function Loading() {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
  
          {/* Breadcrumb skeleton */}
          <div className="flex gap-2 mb-8">
            <div className="h-3 w-12 bg-gray-100 rounded animate-pulse" />
            <div className="h-3 w-3 bg-gray-100 rounded animate-pulse" />
            <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
            <div className="h-3 w-3 bg-gray-100 rounded animate-pulse" />
            <div className="h-3 w-32 bg-gray-100 rounded animate-pulse" />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  
            {/* Imagen skeleton */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-gray-100 rounded-2xl animate-pulse" />
              <div className="flex gap-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-20 h-20 bg-gray-100 rounded-xl animate-pulse" />
                ))}
              </div>
            </div>
  
            {/* Info skeleton */}
            <div className="flex flex-col gap-4">
              <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
              <div className="h-8 w-64 bg-gray-100 rounded animate-pulse" />
              <div className="h-6 w-32 bg-gray-100 rounded animate-pulse" />
              <div className="h-20 w-full bg-gray-100 rounded animate-pulse" />
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-gray-100 rounded-xl animate-pulse" />
                ))}
              </div>
              <div className="h-14 w-full bg-gray-100 rounded-2xl animate-pulse mt-4" />
            </div>
  
          </div>
        </div>
      </div>
    )
  }