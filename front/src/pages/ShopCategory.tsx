import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { useSelector } from "react-redux";
import { ProductType } from "../type/product.type";
import { PageType } from "../type/page.type";
import { Skeleton } from "../components/Skeleton";

const ShopCategory = (props: PageType) => {
  const { all_product } = useSelector((state: any) => state.data);
  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLogout(true);
    }, 1000);
    return () => {
      setLogout(false);
    };
  }, [props.category]);
  return (
    <div className="">
      <img
        className="block my-7 mx-auto w-3/4"
        src={props.banner}
        alt="props.banner"
      />

      <div className="">
        {logout ? (
          <div className="flex flex-wrap gap-7 md:gap-16 mb-6 justify-center">
            {" "}
            {all_product.map((item: ProductType, i: number) => {
              if (props.category === item.category) {
                return <Item key={i} {...item} />;
              } else {
                return null;
              }
            })}
          </div>
        ) : (
          <div className="mt-12 justify-center flex flex-wrap gap-7">
            {skeletons}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
