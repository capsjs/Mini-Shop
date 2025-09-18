import { describe, it, expect } from "vitest"

import { mockProducts } from "./mockproducts";
import { filteredByName } from "../lib/filter";

describe("filteredByName", () => {
  it("return search terms", () => {
    const result = filteredByName("desk", mockProducts)
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe("Desk Lamp")
  })
});
