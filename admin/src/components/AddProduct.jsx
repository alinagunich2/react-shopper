import { useState } from "react";
import upload_area from "./../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const changeHandler = async (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accepts: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;

      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("prod added") : alert("failed");
        });
    }
  };
  return (
    <div className="box-border w-full py-7 px-12 my-5 mx-8 rounded-md bg-white">
      <div className=" mb-6 text-[#7b7b7b] w-full">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          className="border border-solid border-[#c3c3c3] box-border w-full h-12 rounded pl-4 outline-none text-[#7b7b7b] tex"
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="mb-6 text-[#7b7b7b] w-full">
        <p>Price</p>
        <input
          value={productDetails.old_price}
          onChange={changeHandler}
          className="border border-solid border-[#c3c3c3] box-border w-full h-12 rounded pl-4 outline-none text-[#7b7b7b] tex"
          type="text"
          name="old_price"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-itemfield mb-6 text-[#7b7b7b] w-full">
        <p>Offer Price</p>
        <input
          value={productDetails.new_price}
          onChange={changeHandler}
          className="border border-solid border-[#c3c3c3] first-letter:box-border w-full h-12 rounded pl-4 outline-none text-[#7b7b7b] tex"
          type="text"
          name="new_price"
          placeholder="Type here"
        />
      </div>
      <div className=" mb-11 text-[#7b7b7b] w-full">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="p-3 w-24 h-12 text-sm text-[#7b7b7b] border border-solid border-[#7b7b7b8d] rounded"
          id=""
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="mb-6 text-[#7b7b7b] w-full">
        <label htmlFor="file-input">
          <img
            className="h-32 w-32"
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="upload_area"
          />
        </label>
        <input
          onChange={imageHandler}
          className="border border-solid border-[#c3c3c3] box-border w-full h-12 rounded pl-4 outline-none text-[#7b7b7b] tex"
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={Add_Product}
        className="w-40 h-12 rounded-md border-spacing-0 bg-blue-400 cursor-pointer text-white text-base font-medium"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
