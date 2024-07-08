import Breadcrumbs from "@/components/Breadcrumbs";
import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";
import Banner from "./_components/Banner";
import DetailsInfo from "./_components/DetailsInfo";
import ProductList from "@/components/ProductList";

type Props = {
  params: DetailParams;
};

type DetailParams = {
  id: Number;
};

const getProductById = async (id: Number): Promise<Product> => {
  const res = await GlobalApi.getProductById(id);
  const { data } = await res.data;
  return data;
};

const getProductByCategory = async (category: string | undefined) => {
  if (!category) return;
  const res = await GlobalApi.getProductByCategory(category);
  const { data } = await res.data;
  return data;
};

const Details: React.FC<Props> = async ({ params }) => {
  const productDetail = await getProductById(params.id);
  const productList = await getProductByCategory(
    productDetail.attributes.category
  );

  return (
    <div className="p-5 py-12 px-10 md:px-28">
      <Breadcrumbs />
      {Object.keys(productDetail).length != 0 && (
        <div className="grid grid-cols-1 flex-col mt-10 lg:grid-cols-2 gap-20 sm:justify-evenly">
          <Banner
            image={productDetail?.attributes?.banner?.data?.attributes?.url}
          />
          <DetailsInfo product={productDetail} />
        </div>
      )}
      {productList && (
        <div>
          <h2>Similar Projects</h2>
          <ProductList products={productList} />
        </div>
      )}
    </div>
  );
};

export default Details;
