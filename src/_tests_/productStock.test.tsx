/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import ProductPage from "../pages/productPage/ProductPage";

describe("ProductPage", () => {
  it("display out of stock message when stock is 0", () => {
    render(
      <MemoryRouter initialEntries={[`/product/2`]}>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/out of stock/i)).toBeTruthy();
  });
});
