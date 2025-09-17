import { useState } from "react";

import type { TProduct } from "./lib/types/product.types";
import { products } from "./lib/products";

export const useApp = () => {
  const [sortedProducts, setSortedProducts] = useState<TProduct[]>(products);
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))]
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [updatedProductPrice, setUpdatedProductPrice] = useState<number | null>(null);  

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

const handleOpenModal = (productId: number) => {
  const productsIds = products.map(product => parseInt(product.id));
  if (productsIds.includes(productId)) {
  setSelectedProductId(productId);
  setIsOpenModal(true);
  }
};

const getSelectedProduct = () => {
  return products.find(product => parseInt(product.id) === selectedProductId) || null;
};

const handleCloseModal = () => {
  setIsOpenModal(false);
  setSelectedProductId(null);
};

const handleProductPriceChange = (price: number) => {
  setUpdatedProductPrice(price);
  console.log(price); 
};

const handleConfirmPriceChange = () => {
  if (selectedProductId !== null && updatedProductPrice !== null) {
    setSortedProducts(prevProducts =>
      prevProducts.map(product =>
        parseInt(product.id) === selectedProductId
          ? { ...product, price: updatedProductPrice }
          : product
      )
    );
    setIsOpenModal(false);
    setSelectedProductId(null);
    setUpdatedProductPrice(null);
  } 
};

  return {
    sortedProducts,
    categories,
    isOpenModal,
    updatedProductPrice,
    sortByAscendingPrice,
    sortByDescendingPrice,
    handleChangeSearchInput,
    filterByCategory,
    handleOpenModal,
    getSelectedProduct,
    handleCloseModal,
    handleProductPriceChange,
    handleConfirmPriceChange,
  }
}