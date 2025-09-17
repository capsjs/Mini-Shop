import { useState } from "react";

import type { TProduct } from "./lib/types/product.types";
import { products } from "./lib/products";

export const useApp = () => {
  const [sortedProducts, setSortedProducts] = useState<TProduct[]>(products);

const sortByAscendingPrice = () => {
  setSortedProducts(prev => [...prev].sort((a, b) => +a.price - +b.price))
};

const sortByDescendingPrice = () => {
  setSortedProducts(prev => [...prev].sort((a, b) => +b.price - +a.price))
};

const filteredByName = (name: string, products: TProduct[]) => {
  return products.filter((product) =>
    product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
};

const filteredProductsByName = (inputText: string, products: TProduct[]) => {
  return filteredByName(inputText, products); 
};

const handleChangeSearchInput = (inputText: string) => {
  setSortedProducts(filteredProductsByName(inputText, products))
};

  return {
    sortedProducts,
    sortByAscendingPrice,
    sortByDescendingPrice,
    handleChangeSearchInput
  }
}