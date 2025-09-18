import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import LanguageSwitcher from "../components/languageSwitcher/LanguageSwitcher";

const mockChangeLanguage = vi.fn();
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: { changeLanguage: mockChangeLanguage },
  }),
}));

describe("LanguageSwitcher", () => {
  it("changed in En when cliqued", async () => {
    render(<LanguageSwitcher />);
    await userEvent.click(screen.getByText("EN"));
    expect(mockChangeLanguage).toHaveBeenCalledWith("en");
  });

  it("changed in Fr when cliqued", async () => {
    render(<LanguageSwitcher />);
    await userEvent.click(screen.getByText("FR"));
    expect(mockChangeLanguage).toHaveBeenCalledWith("fr");
  });
});
