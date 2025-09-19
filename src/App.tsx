import "./translation/locales/i18n";

import "./App.css";
import { useApp } from "./app.hook";
import { products } from "./lib/products";
import { Modal } from "./components/modal/Modal";
import { ProductList } from "./modules/productList/ProductList";
import { Header } from "./modules/header/Header";

function App() {
  const {
    t,
    sortedProducts,
    categories,
    isOpenModal,
    updatedProductPrice,
    updatedProductStock,
    setSortedProducts,
    handleOpenModal,
    sortByAscendingPrice,
    sortByDescendingPrice,
    filterByCategory,
    getSelectedProduct,
    handleCloseModal,
    handleProductPriceChange,
    handleConfirmPriceChange,
    handleProductStockChange,
  } = useApp();
  const selectedProduct = getSelectedProduct();

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header setSortedProducts={setSortedProducts} />

        <div className="grid grid-cols-5 h-full">
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
                onClick={handleConfirmPriceChange}
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
