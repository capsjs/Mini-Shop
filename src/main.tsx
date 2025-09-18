import { Routes, Route, BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import ProductPage from "./pages/productPage/ProductPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
);
