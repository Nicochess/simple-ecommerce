import React from "react";
import ProductList from "./ProductList";
import GlobalApi from "@/utils/GlobalApi";

const getLastestProducts = async (): Promise<Product[]> => {
  const res = await GlobalApi.getLastestProducts();
  const { data } = await res.data;

  return data;
};

const ProductSection = async () => {
  const products = await getLastestProducts();

  return (
    <section className="px-10 md:px-16 py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Most Recent</h2>
      {products && <ProductList products={products} />}
    </section>
  );
};

export default ProductSection;
