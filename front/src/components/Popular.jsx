import React, { useState } from "react";
import Item from "./Item";

const Popular = () => {
  let [popularProducts, setPopularProducts] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => {
        setPopularProducts(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 my-11">
      <h1 className="text-[#171717] text-5xl font-semibold w-">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-52 h-1 rounded-xl bg-slate-700" />
      <div className="mt-12 justify-center flex flex-wrap gap-7">
        {popularProducts.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;