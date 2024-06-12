import React from "react";
import all_product from "../components/assets/all_product";
export const ShopContext = React.createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = {
    all_product,
  };
  console.log(all_product);
  console.log(contextValue);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
