import { useTranslation } from "react-i18next";
import "./translation/locales/i18n";

import "./App.css";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import Card from "./components/card/Card";
import { useApp } from "./app.hook";

function App() {
  const { t } = useTranslation();
  const {
    sortedProducts,
    sortByAscendingPrice,
    sortByDescendingPrice,
    handleChangeSearchInput,
  } = useApp();

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-end m-4 gap-4 text-black">
          <LanguageSwitcher />
        </div>
        <div
          id="header-logo"
          className="flex items-center h-32 justify-center text-center text-5xl text-[#7c52b7] font-bold bg-[#fffbdd]"
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
              <span className="flex flex-col">
                <label>
                  <input type="radio" name="category" value="home" />
                  {t("home")}
                </label>
                <label>
                  <input
                    aria-label="category"
                    type="radio"
                    name="category"
                    value="tech"
                  />
                  {t("tech")}
                </label>
                <label>
                  <input
                    aria-label="category"
                    type="radio"
                    name="category"
                    value="stationery"
                  />
                  {t("stationery")}
                </label>
              </span>
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
              <Card key={product.id}>
                <div className="flex justify-end">
                  <div className="p-3">🖊️</div>
                </div>
                <div className="p-4 flex justify-center">
                  <img src={product.img} className="max-h-28" />
                </div>
                <span className="flex justify-between m-2 text-[#7c52b7]">
                  <p>{product.name}</p>
                  <p>{product.price}€</p>
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
