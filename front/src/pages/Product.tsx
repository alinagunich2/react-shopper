import React from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts";
import { useSelector } from "react-redux";

const Product = () => {
  const all_product = useSelector((state) => state.data.all_product);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="">
      {all_product.length !== 0 ? (
        <div>
          <Breadcrums product={product} />
          <ProductDisplay product={product} />
          <RelatedProducts />
        </div>
      ) : (
        <h1>Загрузка...</h1>
      )}
    </div>
  );
};

export default Product;
