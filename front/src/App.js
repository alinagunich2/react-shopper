import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Fooret from "./components/Fooret";
import React from "react";

import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataCart, fetchDataProducts } from "./redux/asyncActions";
import { Skeleton } from "./components/Skeleton";
import PagesContacts from "./pages/PagesContacts";
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchDataProducts());
    dispatch(fetchDataCart());
  }, []);

  return (
    <div className="contain">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kid_banner} category="kid" />}
            />
            <Route
              path="/company"
              element={<PagesContacts category="company" />}
            />
            <Route
              path="/offices"
              element={<PagesContacts category="offices" />}
            />
            <Route path="/about" element={<PagesContacts category="about" />} />
            <Route
              path="/contact"
              element={<PagesContacts category="contact" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </div>

        <Fooret />
      </BrowserRouter>
    </div>
  );
}

export default App;
