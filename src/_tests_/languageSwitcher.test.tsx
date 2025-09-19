/** @vitest-environment jsdom */

import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

let currentLanguage = "en";
const mockChangeLanguage = vi.fn();

vi.mock("../components/languageSwitcher/languageSwitcher.hooks", () => ({
  useLanguageSwitcher: () => ({
    i18n: { language: currentLanguage },
    changeLanguage: mockChangeLanguage,
  }),
}));

import LanguageSwitcher from "../components/languageSwitcher/LanguageSwitcher";

afterEach(() => cleanup());

beforeEach(() => {
  currentLanguage = "en";
  mockChangeLanguage.mockClear();
});

describe("LanguageSwitcher", () => {
  it("calls changeLanguage function when en button is cliqued", async () => {
    currentLanguage = "fr";
    render(<LanguageSwitcher />);
    const enButton = screen.getByRole("button", { name: "EN" });
    await userEvent.click(enButton);
    expect(mockChangeLanguage).toHaveBeenCalledWith("en");
  });

  it("calls changeLanguage function when fr button is cliqued", async () => {
    currentLanguage = "en";
    render(<LanguageSwitcher />);
    const frButton = screen.getByRole("button", { name: "FR" });
    await userEvent.click(frButton);
    expect(mockChangeLanguage).toHaveBeenCalledWith("fr");
  });
});
