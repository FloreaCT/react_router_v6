import React, { useState, useEffect } from "react";
import { listProducts } from "./ProductsService";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const ProductsIndex = () => {
  const { state } = useLocation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (state) {
      console.warn(`Nothing found for ${state.id}`);
    }
  });

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }
  console.log(products);
  return (
    <div>
      {products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsIndex;
