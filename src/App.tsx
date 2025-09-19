import "./translation/locales/i18n";

import "./App.css";
import { useApp } from "./app.hook";
import { Modal } from "./components/modal/Modal";
import { ProductList } from "./modules/productList/ProductList";
import { Header } from "./modules/header/Header";
import { Filter } from "./components/filter/Filter";

function App() {
  const {
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
  } = useApp();
  const selectedProduct = getSelectedProduct();

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header setSortedProducts={setSortedProducts} />

        <div className="grid grid-cols-5 h-full">
          <Filter setSortedProducts={setSortedProducts} />

          <div className="col-span-4 flex gap-2 h-full">
            <ProductList
              sortedProducts={sortedProducts}
              handleOpenModal={handleOpenModal}
            />
          </div>
        </div>
        {isOpenModal && selectedProduct && (
          <Modal isOpen={isOpenModal} onClose={() => false}>
            <div className="flex flex-col justify-center items-center">
              <img src={selectedProduct.img} className="max-h-28" />
              <p>{selectedProduct.name}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 pl-2  ">
              <label>
                {t("stock")}:
                <input
                  aria-label={t("input number")}
                  type="number"
                  value={updatedProductStock ?? selectedProduct.stock}
                  min={0}
                  className="border-2 border-[#7c52b7] rounded-md"
                  onChange={(e) =>
                    handleProductStockChange(Number(e.target.value))
                  }
                />
              </label>
              <label>
                {t("price")}:
                <input
                  type="number"
                  aria-label={t("input number")}
                  value={updatedProductPrice ?? selectedProduct.price}
                  min={0}
                  className="border-2 border-[#7c52b7] rounded-md"
                  onChange={(e) =>
                    handleProductPriceChange(Number(e.target.value))
                  }
                />
              </label>
            </div>
            <div className="flex justify-evenly pt-3 m-3">
              <button
                className="bg-green-600 rounded-md p-2"
                onClick={handleConfirmChanges}
              >
                <p>{t("confirm")}</p>
              </button>
              <button
                className="bg-red-700 rounded-md p-2"
                onClick={handleCloseModal}
              >
                <p>{t("cancel")}</p>
              </button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
