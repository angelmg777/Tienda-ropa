export default function Loading() {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="h-8 w-40 bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-3 w-24 bg-gray-200 rounded mb-8 animate-pulse" />
          <div className="h-12 bg-white rounded-full border border-gray-200 mb-6 animate-pulse" />
          <div className="flex gap-2 mb-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 bg-gray-200 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }