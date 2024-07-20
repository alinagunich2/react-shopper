import React from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";
import { useSelector } from "react-redux";
import { ProductType } from "../type/product.type";

type AllProducType = {
  data: { all_product: ProductType[] };
};

const Product = () => {
  const all_product = useSelector<AllProducType>(
    (state) => state.data.all_product
  );
  const { productId } = useParams();
  let product: ProductType | undefined;
  if (all_product && Array.isArray(all_product)) {
    product = all_product.find((e) => e.id === Number(productId));
  }

  return (
    <div className="">
      {(all_product as []).length !== 0 ? (
        <div>
          {product && (
            <>
              <Breadcrums product={product} />
              <ProductDisplay product={product} />
              <RelatedProducts />
            </>
          )}
          {!product && <h1>Товар не найден</h1>}
        </div>
      ) : (
        <h1>Загрузка...</h1>
      )}
    </div>
  );
};

export default Product;
