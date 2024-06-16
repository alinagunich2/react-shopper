import { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";
import "./ListProduct.css";

const ListProduct = () => {
  const [allproduct, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="listproduct flex flex-col items-center w-full py-3 px-12 m-8 rounded-md bg-white">
      <h1 className="text-xl font-bold mb-7">All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproduct.map((product, i) => {
          return (
            <div
              key={i}
              className="listproduct-format-main list-format items-center font-medium"
            >
              <img
                src={product.image}
                alt="image"
                className="list-prod-item h-20"
              />
              <p>{product.name}</p>
              <p>$ {product.old_price}</p>
              <p>$ {product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => remove_product(Number(product.id))}
                className="listproduct-remove-icon
                 cursor-pointer m-auto"
                src={cross_icon}
                alt="cross_icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
