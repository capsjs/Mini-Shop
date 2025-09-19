import type { TProduct } from "../lib/types/product.types"

export function sortAscending(products: TProduct[]): TProduct[] {
  return [...products].sort((a, b) => +a.price - +b.price)
}

export function sortDescending(products: TProduct[]): TProduct[] {
  return [...products].sort((a, b) => +b.price - +a.price)
}
