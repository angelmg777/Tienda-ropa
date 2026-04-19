import { client } from './sanity'

// Todos los productos destacados para el home
export async function getFeaturedProducts() {
  return await client.fetch(`
    *[_type == "product" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      category,
      gender,
      images,
      isUnitalla,
      inStock,
      featured
    }
  `)
}

// Todos los productos
export async function getAllProducts() {
  return await client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      category,
      gender,
      images,
      isUnitalla,
      inStock
    }
  `)
}

// Productos por genero y categoria
export async function getProductsByCategory(gender, category) {
  return await client.fetch(`
    *[_type == "product" && gender == $gender && category == $category] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      category,
      gender,
      images,
      isUnitalla,
      inStock
    }
  `, { gender, category })
}

// Un producto por slug
export async function getProductBySlug(slug) {
  return await client.fetch(`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      price,
      category,
      gender,
      description,
      images,
      isUnitalla,
      sizes,
      inStock,
      featured
    }
  `, { slug })
}

// Productos relacionados
export async function getRelatedProducts(category, currentSlug) {
  return await client.fetch(`
    *[_type == "product" && category == $category && slug.current != $currentSlug] | order(_createdAt desc)[0...4] {
      _id,
      name,
      slug,
      price,
      category,
      gender,
      images,
      isUnitalla,
      inStock
    }
  `, { category, currentSlug })
}

// Todos los productos por genero
export async function getProductsByGender(gender) {
  return await client.fetch(`
    *[_type == "product" && (gender == $gender || gender == "unisex")] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      category,
      gender,
      images,
      isUnitalla,
      inStock
    }
  `, { gender })
}

export async function getAllProductsForCatalog() {
  return await client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      price,
      category,
      gender,
      images,
      isUnitalla,
      inStock
    }
  `)
}