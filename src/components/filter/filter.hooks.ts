import { useTranslation } from "react-i18next"

import { products } from "../../lib/products"
import { sortAscending, sortDescending } from "../../lib/sort"
import type { TProduct } from "../../lib/types/product.types"

export type TFilterHookProps = {
  setSortedProducts: React.Dispatch<React.SetStateAction<TProduct[]>>
}
export const useFilter = (props: TFilterHookProps) => {
  const { t } = useTranslation();
  const { setSortedProducts } = props;
  const categories = ["all", ...Array.from(new Set(products.map(product => product.category)))]
  
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

  return {
    t,
    categories,
    products,
    sortByAscendingPrice,
    sortByDescendingPrice,
    filterByCategory
  }
}