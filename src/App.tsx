import "./translation/locales/i18n";
import { useNavigate } from "react-router-dom";

import "./App.css";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import Card from "./components/card/Card";
import { useApp } from "./app.hook";
import { products } from "./lib/products";
import { Modal } from "./components/modal/Modal";

function App() {
  const navigate = useNavigate();
  const {
    t,
    sortedProducts,
    categories,
    isOpenModal,
    updatedProductPrice,
    updatedProductStock,
    handleOpenModal,
    sortByAscendingPrice,
    sortByDescendingPrice,
    handleChangeSearchInput,
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
        <div className="flex justify-end m-4 gap-4 text-black">
          <LanguageSwitcher />
        </div>
        <div
          id="header-logo"
          className="flex items-center h-32 justify-center text-center text-5xl text-[#7c52b7] font-bold bg-[#fffbdd] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p>Mini Shop</p>
        </div>

        <div className="flex justify-end">
          <input
            className="flex justify-end pl-2 m-4 w-1/4 rounded-md border-[#7c52b7] border-2"
            id="search-bar"
            aria-label="search-bar"
            type="text"
            placeholder={t("search")}
            onChange={(e) => handleChangeSearchInput(e.target.value)}
          />
        </div>

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
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <img src={product.img} className="max-h-28" />
                  </div>
                  <span className="flex justify-between m-2 text-[#7c52b7]">
                    <p>{product.name}</p>
                    <p>{product.price}€</p>
                  </span>
                </Card>
              </>
            ))}
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
                  value={updatedProductPrice ?? selectedProduct.price}
                  min={0}
                  className="border-2 border-[#7c52b7] rounded-md"
                  onChange={(e) =>
                    handleProductPriceChange(Number(e.target.value))
                  }
                />
              </label>
            </div>
            <div className="flex justify-evenly pt-3">
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
