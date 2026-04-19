import { getProductBySlug, getRelatedProducts } from '@/lib/queries'
import ProductClient from './ProductClient'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) return notFound()

  const related = await getRelatedProducts(product.category, slug)

  return <ProductClient product={product} related={related} />
}