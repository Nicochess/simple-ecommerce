import React from "react";
import ProductItem from "./ProductItem";

type Props = {
  products: Product[];
};

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
