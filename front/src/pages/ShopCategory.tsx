import React from "react";
import Item from "../components/Item";
import { useSelector } from "react-redux";
import { ProductType } from "../type/product.type";
import { RootState } from "../redux/store";
import { PageType } from "../type/page.type";

const ShopCategory = (props: PageType) => {
  const { all_product } = useSelector((state: any) => state.data);

  return (
    <div className="">
      <img
        className="block my-7 mx-auto w-3/4"
        src={props.banner}
        alt="props.banner"
      />

      <div className="flex flex-wrap gap-7 md:gap-16 mb-6 justify-center">
        {all_product.map((item: ProductType, i: number) => {
          if (props.category === item.category) {
            return <Item key={i} {...item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
