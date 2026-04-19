import { getProductsByGender, getAllProductsForCatalog } from '@/lib/queries'
import CatalogoClient from './CatalogoClient'

export default async function CatalogoPage({ params }) {
  const { genero } = await params

  const products = genero === 'todo'
    ? await getAllProductsForCatalog()
    : await getProductsByGender(genero)

  return (
    <CatalogoClient
      products={products}
      genero={genero}
    />
  )
}