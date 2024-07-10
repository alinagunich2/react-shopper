import React, { useState } from "react";
import star_icon from "./assets/star_icon.png";
import start_dull_icon from "./assets/star_dull_icon.png";
import { useDispatch } from "react-redux";
import { addToCart, addReviews } from "../redux/dataSlice";

const ProductDisplay = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    name: "",
    star: "",
    review: "",
  });
  const [errors, setErrors] = React.useState({});
  const changeHandler = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Fill in the name",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
    if (!form.star.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        star: "Fill in the star",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        star: "",
      }));
    }
    if (!form.review.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        review: "Fill in the review",
      }));
    }
    // else if (!/^[0-5]$/.test(form.review.trim())) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     review: "Обзор должен быть номером от 0 до 5",
    //   }));
    // }
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        review: "",
      }));
    }
    if (!errors.name && !errors.review && !errors.star) {
      dispatch(addReviews([form, product.id]));
    }
  };

  let sizes = ["S", "M", "L", "XL", "XXL"];
  let [size, setSize] = useState("");
  const { product } = props;
  const add = () => {
    let prod = { ...product, count: 1, size: size };
    dispatch(addToCart(prod));
  };

  // if(product.reviews.length!==0){

  // }
  console.log(product);
  let plusStar =
    product.rewiews.reduce((sum, item) => {
      console.log(item.star, "KJWS");
      return sum + Number(item.star);
    }, 0) / product.rewiews.length;
  let minStar = 5 - plusStar;
  let lengthPlusStar = Array.from(
    { length: plusStar },
    (_, index) => index + 1
  );
  let lengthMinStar = Array.from({ length: minStar }, (_, index) => index + 1);

  return (
    <>
      <div className="mb-20 my-0 mx-40">
        <div className="gap-4">
          <div className="mb-5 flex justify-center">
            <img src={product.image} alt="" />
          </div>
          <div className="flex gap-4 justify-center">
            <img className="h-40" src={product.image} alt="" />
            <img className="h-40" src={product.image} alt="" />
            <img className="h-40" src={product.image} alt="" />
            <img className="h-40" src={product.image} alt="" />
          </div>
        </div>
        <div>
          <div className="flex mx-0 my-16 flex-col">
            <h1 className="text-[#3d3d3d] text-4xl font-bold">
              {product.name}
            </h1>
            <div className="flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
              {lengthPlusStar.map((item, index) => (
                <div key={index}>
                  <img src={star_icon} alt="" />
                </div>
              ))}
              {lengthMinStar.length !== 0 &&
                lengthMinStar.map((item, index) => (
                  <div key={index}>
                    <img src={start_dull_icon} alt="" />
                  </div>
                ))}
              {product.rewiews.length === 0 ? (
                <div>(0)</div>
              ) : (
                <div> ({product.rewiews.length})</div>
              )}
            </div>
            <div className="flex  mx-0 my-10 gap-8 text-2xl font-bold">
              <div className="text-[#818181] line-through bg">
                ${product.old_price}
              </div>
              <div className="text-[#ff4141]">${product.new_price}</div>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            rem doloremque facilis magni aliquam optio beatae numquam id hic ex
            vero, eveniet ad deserunt maiores dolorem laudantium sit! Optio,
            quae?
          </div>
          <div>
            <h1 className="mt-14 text-[#656565] text-xl font-semibold">
              Select Size
            </h1>
            <div className="flex my-7 mx-0 p-0 gap-5 ">
              {sizes.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSize(item)}
                  className={`productDisplay-size cursor-pointer ${
                    item === size ? "border-red-500" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {size === "" && (
            <p className=" text-red-500 font-semibold text-lg">
              Select size to continue!!! &#128152;
            </p>
          )}

          <button
            onClick={() => add()}
            disabled={size === ""}
            className="disabled:cursor-not-allowed disabled:bg-slate-500 py-5 px-10 w-52 text-base font-semibold text-white bg-red-500 mb-10 border-spacing-0 outline-none cursor-pointer"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="mb-32 mx-24">
        <div className="flex">
          <div className="flex-center-all text-base font-semibold w-44 h-16 border border-solid border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">
            Reviews&nbsp;
            {product.rewiews.length === 0 ? (
              <div>(0)</div>
            ) : (
              <div> ({product.rewiews.length})</div>
            )}
          </div>
        </div>
        <div className=" h-44 overflow-y-auto flex flex-col gap-6 border border-solid border-[#d0d0d0] px-9 py-4 pb\">
          {product.rewiews.length !== 0 ? (
            <div className="">
              {product.rewiews.map((item, index) => {
                return (
                  <div
                    className={`pb-3 pt-3 ${
                      product.rewiews.length === index + 1
                        ? ""
                        : "border-b-2 border-[#d0d0d0]"
                    } `}
                    key={index}
                  >
                    <div className="mb-1 flex gap-2 items-center">
                      <p className=" font-bold">Name:</p>
                      <p>{item.name}</p>
                      <div className="flex h-3 ">
                        {Array.from(
                          { length: item.star },
                          (_, index) => index
                        ).map((item) => {
                          return (
                            <img key={item} width={12} src={star_icon} alt="" />
                          );
                        })}
                      </div>
                    </div>
                    <p>{item.review}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              There are no reviews. Please add if you purchased this product.{" "}
            </div>
          )}
        </div>
        <div className="mt-10">
          <h2 className=" text-xl font-semibold text-center">
            You can add a review about this product
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <label className="block mb-2">
              <p className="text-gray-700">Your name</p>
              <input
                value={form.name}
                onChange={changeHandler}
                name="name"
                type="text"
                className="w-full py-2 px-3 border border-gray-300  focus:border-gray-500 focus:outline-none rounded transition-all duration-300 ease-in-out"
              />
            </label>
            {errors.name && (
              <p className="-mt-5" style={{ color: "red" }}>
                {errors.name}
              </p>
            )}

            <label className="block mb-2">
              <p className="text-gray-700">Star from 0 to 5</p>
              <input
                value={form.star}
                onChange={changeHandler}
                name="star"
                type="text"
                className="w-full py-2 px-3 border border-gray-300  focus:border-gray-500 focus:outline-none rounded transition-all duration-300 ease-in-out"
              />
            </label>
            {errors.star && (
              <p className="-mt-5" style={{ color: "red" }}>
                {errors.star}
              </p>
            )}

            <label className="block mb-2">
              <p className="text-gray-700">Review</p>
              <input
                value={form.review}
                name="review"
                onChange={changeHandler}
                type="text"
                className="w-full py-2 px-3 border border-gray-300  focus:border-gray-500 focus:outline-none rounded transition-all duration-300 ease-in-out"
              />
            </label>
            {errors.review && (
              <p className="-mt-5" style={{ color: "red" }}>
                {errors.review}
              </p>
            )}

            <button
              onClick={() => dispatch(addReviews(product))}
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
            >
              Send review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
