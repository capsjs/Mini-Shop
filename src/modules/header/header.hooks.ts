import { useTranslation } from "react-i18next";

import { filteredByName } from "../../shared/filter";
import { products } from "../../lib/products";
import type { TProduct } from "../../lib/types/product.types";

export type THeaderHookProps = {
  setSortedProducts: React.Dispatch<React.SetStateAction<TProduct[]>>
}

export const useHeader = (props: THeaderHookProps) => {
  const { setSortedProducts } = props;
  const { t } = useTranslation();

 const filteredProductsByName = (inputText: string, products: TProduct[]) => {
    return filteredByName(inputText, products); 
  };

  const handleChangeSearchInput = (inputText: string) => {
    setSortedProducts(filteredProductsByName(inputText, products))
  };

  return {
    t,
    handleChangeSearchInput
  }
};
