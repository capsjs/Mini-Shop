import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { products } from "../../lib/products";

const ProductPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const selectedProduct = products.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Produit introuvable</div>;
  }

  return (
    <div>
      <img src={selectedProduct.img} className="max-h-28" />
      <p>{selectedProduct.name}</p>
      <p>{selectedProduct.description}</p>
      <p>{selectedProduct.price} €</p>
      <div>
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
