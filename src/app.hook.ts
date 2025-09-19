import { useState } from "react";
import { useTranslation } from "react-i18next";

import type { TProduct } from "./lib/types/product.types";
import { products } from "./lib/products";

export const useApp = () => {
  const { t } = useTranslation();
  const [sortedProducts, setSortedProducts] = useState<TProduct[]>(products);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [updatedProductPrice, setUpdatedProductPrice] = useState<number | null>(null);  
  const [updatedProductStock, setUpdatedProductStock] = useState<number | null>(null);

const handleOpenModal = (productId: number) => {
  const productsIds = products.map(product => parseInt(product.id));
  if (productsIds.includes(productId)) {
  setSelectedProductId(productId);
  setIsOpenModal(true);
  }
};

const getSelectedProduct = () => {
  return sortedProducts.find(product => parseInt(product.id) === selectedProductId) ?? null;
};

const handleCloseModal = () => {
  setIsOpenModal(false);
  setSelectedProductId(null);
};

const handleProductPriceChange = (price: number) => {
  if (price <= 0) {
    alert(t("price cannot be less than zero."));
    setUpdatedProductPrice(0);
    return;
  }
  setUpdatedProductPrice(price);
};

const handleProductStockChange = (stock: number) => {
  if (stock <= 0) {
    alert(t("stock cannot be less than or equal to zero."));
    setUpdatedProductStock(1);
    return;
}
  setUpdatedProductStock(stock);
};

const handleConfirmChanges = () => {
  if (!selectedProductId) return;
    setSortedProducts(prevProducts =>
      prevProducts.map(product =>
        parseInt(product.id) === selectedProductId
        ? {
            ...product,
            price: updatedProductPrice ?? product.price,
            stock: updatedProductStock ?? product.stock,
        }
        : product
      )
    );
  setIsOpenModal(false);
  setUpdatedProductPrice(null);
  setUpdatedProductStock(null);
  setSelectedProductId(null);
};


  return {
    t,
    sortedProducts,
    isOpenModal,
    updatedProductPrice,
    updatedProductStock,
    setSortedProducts,
    handleOpenModal,
    getSelectedProduct,
    handleCloseModal,
    handleProductPriceChange,
    handleConfirmChanges,
    handleProductStockChange,
  }
}