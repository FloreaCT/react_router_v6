import React from "react";
import { Routes, Route } from "react-router-dom";
import { css } from "@emotion/css";

import ProductsIndex from "./ProductsIndex";
import Product from "./Product";

const ProductStyles = css`
  display: flex;
  flex-direction: column;
  .Logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

const Products = () => (
  <div className={ProductStyles}>
    <img src="/assets/img/logo.svg" alt="Ultimate Burgers" className="Logo" />{" "}
    <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path=":id" element={<Product />} />
    </Routes>
  </div>
);

export default Products;
