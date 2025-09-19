import { useState } from "react";
import { useTranslation } from "react-i18next";

import type { TProduct } from "./lib/types/product.types";
import { products } from "./lib/products";
import { sortAscending, sortDescending } from "./lib/sort";

export const useApp = () => {
  const { t } = useTranslation();
  const [sortedProducts, setSortedProducts] = useState<TProduct[]>(products);
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))]
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [updatedProductPrice, setUpdatedProductPrice] = useState<number | null>(null);  
  const [updatedProductStock, setUpdatedProductStock] = useState<number | null>(null);

  const sortByAscendingPrice = () => {
    setSortedProducts(prev => sortAscending(prev))
  };

  const sortByDescendingPrice = () => {
    setSortedProducts(prev => sortDescending(prev))
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
    setSortedProducts,
    sortByAscendingPrice,
    sortByDescendingPrice,
    filterByCategory,
    handleOpenModal,
    getSelectedProduct,
    handleCloseModal,
    handleProductPriceChange,
    handleConfirmPriceChange,
    handleProductStockChange,
  }
}