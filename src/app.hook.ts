import { useState } from "react";

import type { TProduct } from "./lib/types/product.types";
import { products } from "./lib/products";

export const useApp = () => {
  const [sortedProducts, setSortedProducts] = useState<TProduct[]>(products);
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))]

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

const filterByCategory = (category: string, products: TProduct[]) => {
  if (category === "all") {
    setSortedProducts(products);
  } else {
    setSortedProducts(products.filter(product => product.category === category));
  }
};

  return {
    sortedProducts,
    categories,
    sortByAscendingPrice,
    sortByDescendingPrice,
    handleChangeSearchInput,
    filterByCategory
  }
}