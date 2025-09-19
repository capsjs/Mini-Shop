import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { products } from "../../lib/products";

export const useProductPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const selectedProduct = products.find((product) => product.id === id);
  
  return {
    t,
    selectedProduct,
  }
};
