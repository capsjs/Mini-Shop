import { useState } from "react";

import type { TProduct } from "./lib/types/product.types";
import { products } from "./lib/products";

export const useApp = () => {
  const [sortedPrices, setSortedPrices] = useState<TProduct[]>(products);

const sortByAscendingPrice = () => {
  setSortedPrices(prev => [...prev].sort((a, b) => +a.price - +b.price))
};

const sortByDescendingPrice = () => {
  setSortedPrices(prev => [...prev].sort((a, b) => +b.price - +a.price))
};

  return {
    sortedPrices,
    sortByAscendingPrice,
    sortByDescendingPrice
  }
}