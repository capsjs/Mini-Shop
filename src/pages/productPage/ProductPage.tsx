import { useLocation } from "react-router-dom";

import Card from "../../components/card/Card";
import { useProductPage } from "./productPage.hooks";
import type { TProduct } from "../../lib/types/product.types";

export type LocationState = { state?: { product?: TProduct } };

const ProductPage = () => {
  const { t, selectedProduct } = useProductPage();
  const location = useLocation() as LocationState;

  const productFromState = location.state?.product;
  const selectedProductInfo = productFromState ?? selectedProduct;

  if (!selectedProductInfo) {
    return <div>{t("product not found")}</div>;
  }

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex justify-center items-center mt-10">
        <Card className="w-96 h-96">
          <div className="flex justify-center items-center">
            <img src={selectedProductInfo.img} className="max-h-38 max-w-38" />
          </div>
        </Card>
      </div>

      <div className="flex flex-col justify-center p-4 m-4 gap-6 text-[#7c52b7]">
        <span className="font-bold text-2xl">
          <p>{selectedProductInfo.name}</p>
        </span>

        <span className="flex flex-col p-4 rounded-lg justify-center bg-[#faf8f6]">
          <p>{selectedProductInfo.description}</p>
        </span>

        <span className="bg-[#faf8f6] flex flex-col gap-2 p-2 font-semibold">
          <p>{selectedProductInfo.price} €</p>
          <p>
            {t("stock")}: {selectedProductInfo.stock}
          </p>
        </span>

        {selectedProductInfo.stock === 0 && (
          <span className="bg-[#faf8f6] p-4">
            <p className="text-red-500 font-bold">{t("out of stock")}</p>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
