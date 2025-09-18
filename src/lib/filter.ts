import type { TProduct } from "./types/product.types"

export function filteredByName(name: string, products: TProduct[]) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  )
}