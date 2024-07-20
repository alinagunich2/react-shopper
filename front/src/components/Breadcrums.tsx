import arrow_icom from "./assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";
import { ProductType } from "../type/product.type";

type propsType = {
  product: ProductType;
};

const Breadcrums = (props: propsType) => {
  const { product } = props;
  return (
    <div className="my-16 mx-10 md:mx-24 lg:mx-44 flex items-center flex-wrap gap-2 text-[#5e5e5e] text-base font-semibold capitalize">
      <Link to="/">SHOP</Link> <img src={arrow_icom} alt="" />
      <Link to={`/${product.category?.toLowerCase()}s`}>
        {product.category}{" "}
      </Link>
      <img src={arrow_icom} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
