import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { products } from "../../lib/products";
import Card from "../../components/card/Card";

const ProductPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const selectedProduct = products.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Produit introuvable</div>;
  }

  return (
    <div>
      <Card>
        <div className="flex flex-col justify-center w-1/2  p-4 m-4 items-center">
          <img src={selectedProduct.img} className="max-h-28 max-w-28" />
        </div>
      </Card>
      <div className="flex-A flex-col justify-center p-4 m-4">
        <p>{selectedProduct.name}</p>
        <p>{selectedProduct.description}</p>
        <p>{selectedProduct.price} €</p>
        <p>
          {t("stock")}: {selectedProduct.stock}
        </p>
        <p className="text-red-500">
          {selectedProduct.stock === 0 && <span>{t("out of stock")}</span>}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
