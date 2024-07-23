import React, { useState } from "react";
import Item from "./Item";
import { ProductType } from "../type/product.type";
import { Skeleton } from "./Skeleton";

const Popular = () => {
  let [popularProducts, setPopularProducts] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:4001/popularinwomen")
      .then((res) => res.json())
      .then((data) => {
        // setTimeout(() => {
        //   setPopularProducts(data);
        // }, 1000);
        setPopularProducts(data);
      });
  }, []);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div className="flex flex-col items-center gap-3 my-11 mx-4">
      <h2 className="text-[#171717] text-xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold ">
        POPULAR IN WOMEN
      </h2>
      <hr className=" w-36 sm:w-52 h-1 rounded-xl bg-slate-700" />
      {popularProducts.length !== 0 ? (
        <div className="mt-12 justify-center flex flex-wrap gap-7">
          {popularProducts.map((item: ProductType, i) => {
            return <Item key={i} {...item} />;
          })}
        </div>
      ) : (
        <div className="mt-12 justify-center flex flex-wrap gap-7">
          {skeletons}
        </div>
      )}
    </div>
  );
};

export default Popular;
