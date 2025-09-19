/** @vitest-environment jsdom */

import { describe, it, expect } from "vitest";
import { useApp } from "../app.hook";
import { renderHook, act } from "@testing-library/react";

describe("handleConfirmChanges, price update", () => {
  it("should update the product price of selected Id", () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.handleOpenModal(1);
      result.current.handleProductPriceChange(94);
      result.current.handleConfirmChanges();
    });
    expect(
      result.current.sortedProducts.find((product) => product.id === "1")?.price
    ).toBe(29.9);
  });
});
