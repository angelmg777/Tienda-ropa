import { getProductsByGender } from '@/lib/queries'
import CategoriaClient from './CategoriaClient'

export default async function CategoriaPage({ params }) {
  const { categoria } = await params
  const partes = categoria.split('-')
  const gender = partes[0]
  const category = partes.slice(1).join('-')

  const products = await getProductsByGender(gender)

  return (
    <CategoriaClient
      products={products}
      gender={gender}
      category={category}
    />
  )
}
