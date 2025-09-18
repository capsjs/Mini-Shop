import { describe, it, expect } from "vitest"
import { sortAscending, sortDescending } from "../lib/sort"
import { mockProducts } from "./mockproducts";

describe("sortAscending", () => {
  it("filter by ascending order", () => {
    const result = sortAscending(mockProducts)
    expect(result.map(product => product.price)).toEqual([ 5.2, 19.5, 25, 29.9 ])
  })
});

describe("sortDescending", () => {
  it("filter by descending order", () => {
    const result = sortDescending(mockProducts)
    expect(result.map(product => product.price)).toEqual([29.9, 25, 19.5, 5.2])
  })
});

