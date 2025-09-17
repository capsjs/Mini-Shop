import { useState } from "react";
import { useTranslation } from "react-i18next";

import type { TProduct } from "./lib/types/product.types";
import { products } from "./lib/products";

export const useApp = () => {
  const { t } = useTranslation();
  const [sortedProducts, setSortedProducts] = useState<TProduct[]>(products);
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))]
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [updatedProductPrice, setUpdatedProductPrice] = useState<number | null>(null);  
  const [updatedProductStock, setUpdatedProductStock] = useState<number | null>(null);

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
  if (price <= 0) {
    alert(t("price cannot be less than or equal to zero."));
    setUpdatedProductPrice(1);
  }
};

const handleProductStockChange = (stock: number) => {
  setUpdatedProductStock(stock);
  if (stock <= 0) {
    alert(t("stock cannot be less than or equal to zero."));
    setUpdatedProductStock(1);
  };
}

const handleConfirmPriceChange = () => {
  if (selectedProductId !== null && updatedProductPrice !== null ) {
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
  if (selectedProductId !== null && updatedProductStock !== null ) {
    setSortedProducts(prevProducts =>
      prevProducts.map(product =>
        parseInt(product.id) === selectedProductId
          ? { ...product, stock: updatedProductStock }
          : product
      )
    );
    setIsOpenModal(false);
  };
  setSelectedProductId(null);
  setUpdatedProductStock(null);
};


  return {
    t,
    sortedProducts,
    categories,
    isOpenModal,
    updatedProductPrice,
    updatedProductStock,
    sortByAscendingPrice,
    sortByDescendingPrice,
    handleChangeSearchInput,
    filterByCategory,
    handleOpenModal,
    getSelectedProduct,
    handleCloseModal,
    handleProductPriceChange,
    handleConfirmPriceChange,
    handleProductStockChange,
  }
}