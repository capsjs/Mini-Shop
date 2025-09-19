import { type FC } from "react";
import { useNavigate } from "react-router-dom";

import type { TProduct } from "../../lib/types/product.types";
import Card from "../../components/card/Card";

export type TProductList = {
  sortedProducts: TProduct[];
  handleOpenModal: (productId: number) => void;
};

export const ProductList: FC<TProductList> = (props: TProductList) => {
  const { sortedProducts, handleOpenModal } = props;
  const navigate = useNavigate();

  return (
    <div className="col-span-4 flex flex-wrap gap-2 h-full">
      {sortedProducts.map((product) => (
        <>
          <Card key={product.id}>
            <div
              className="flex justify-end"
              onClick={() => handleOpenModal(parseInt(product.id))}
            >
              <div className="p-3 cursor-pointer">🖊️</div>
            </div>
            <div
              className="p-4 flex justify-center"
              onClick={() =>
                navigate(`/product/${product.id}`, { state: { product } })
              }
            >
              <img src={product.img} className="max-h-28" />
            </div>
            <span className="flex flex-col m-2 text-[#7c52b7]">
              <p className="font-bold">{product.name}</p>
              <p>{product.price}€</p>
            </span>
          </Card>
        </>
      ))}
    </div>
  );
};
