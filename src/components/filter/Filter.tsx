import type { Dispatch, FC, SetStateAction } from "react";

import { useFilter } from "./filter.hooks";
import type { TProduct } from "../../lib/types/product.types";

export type TFilter = {
  setSortedProducts: Dispatch<SetStateAction<TProduct[]>>;
};

export const Filter: FC<TFilter> = (props: TFilter) => {
  const {
    t,
    products,
    categories,
    filterByCategory,
    sortByAscendingPrice,
    sortByDescendingPrice,
  } = useFilter(props);
  return (
    <div
      id="menu-content"
      className="col-span-1 flex flex-col text-[#7c52b7] font-semibold h-full p-4 m-4 border-r-2 border-[#7c52b7] gap-4"
    >
      <p>{t("filter")}</p>
      <div className="flex flex-col gap-2">
        <p>{t("category")}</p>
        {categories.map((item) => (
          <span className="flex flex-col">
            <label>
              <input
                type="radio"
                name="category"
                aria-label={t("category")}
                value={item}
                onChange={() => filterByCategory(item, products)}
              />
              {t(`${item}`)}
            </label>
          </span>
        ))}
        <p>{t("price")}</p>
        <span className="flex flex-col">
          <label>
            <input
              aria-label="ascending"
              type="radio"
              name="price"
              value="ascending"
              onChange={sortByAscendingPrice}
              defaultChecked={false}
            />
            {t("ascending")}
          </label>
          <label>
            <input
              aria-label="descending"
              type="radio"
              name="price"
              value="descending"
              onChange={sortByDescendingPrice}
              defaultChecked={false}
            />
            {t("descending")}
          </label>
        </span>
      </div>
    </div>
  );
};
