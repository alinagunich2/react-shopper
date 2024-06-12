import React from "react";
import new_collection from "../assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="new-collections flex flex-col items-center gap-3 mb-11">
      <h1 className="text-[#171717] text-5xl font-semibold w">
        NEW COLLECTIONS
      </h1>
      <hr className="w-52 h-1 rounded-xl bg-slate-700" />
      <div className="collections mt-12 justify-center flex flex-wrap gap-7">
        {new_collection.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
