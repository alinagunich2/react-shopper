import React from "react";
import Item from "./Item";
import { ProductType } from "../type/product.type";
import { Skeleton } from "./Skeleton";

const NewCollections = () => {
  const [new_collection, setNew_collection] = React.useState([]);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));
  React.useEffect(() => {
    fetch("http://localhost:4001/newcollections")
      .then((res) => res.json())
      .then((data) => {
        setNew_collection(data);
      });
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 mb-11">
      <h2 className="text-[#171717] text-xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold ">
        NEW COLLECTIONS
      </h2>
      <hr className=" w-36 sm:w-52 h-1 rounded-xl bg-slate-700" />
      <div className="">
        {new_collection.length !== 0 ? (
          <div className="mt-12 justify-center flex flex-wrap gap-7">
            {" "}
            {new_collection.map((item: ProductType, i) => {
              return <Item key={i} {...item} />;
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

export default NewCollections;
