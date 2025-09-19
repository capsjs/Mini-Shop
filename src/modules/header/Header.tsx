import type { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import LanguageSwitcher from "../../components/languageSwitcher/LanguageSwitcher";
import { useHeader } from "./header.hooks";
import type { TProduct } from "../../lib/types/product.types";

export type THeader = {
  setSortedProducts: Dispatch<SetStateAction<TProduct[]>>;
};

export const Header: FC<THeader> = (props: THeader) => {
  const navigate = useNavigate();
  const { handleChangeSearchInput, t } = useHeader(props);

  return (
    <>
      <div className="flex justify-end m-4 gap-4 text-black">
        <LanguageSwitcher />
      </div>
      <div
        id="header-logo"
        className="flex items-center h-32 justify-center text-center text-5xl text-[#7c52b7] font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <p>Mini Shop</p>
      </div>

      <div className="flex justify-end">
        <input
          className="flex justify-end pl-2 m-4 w-1/4 rounded-md border-[#7c52b7] border-2"
          id="search-bar"
          aria-label={t("search-bar")}
          type="text"
          placeholder={t("search")}
          onChange={(e) => handleChangeSearchInput(e.target.value)}
        />
      </div>
    </>
  );
};
