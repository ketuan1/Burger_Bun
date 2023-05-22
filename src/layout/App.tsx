import { createTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Home from "../components/Home/home";
import Menu from "../components/Menu/menu";
import "./App.css";
import Catalog from "../components/Catalog/Catalog";
import BasketPage from "../Basket/BasketPage";
import { getCookie } from "../util/util";
import axios, { AxiosResponse } from "axios";
import { StoreContext } from "../context/StoreContext";
import Loading from "../components/Loading/Loading";
import Homes from "../Admin/Homes";
import Test from "../Admin/Test";
import Products from "../Admin/Products/Products";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import AddProducts from "../Admin/Products/AddProducts";

function App() {
  const { setBasket } = useContext(StoreContext);
  const [loading, setLoading] = useState<boolean>();
  //dark more
  const [infoUser, setInfoUser] = useState<any>();
  const [darkMore, useDarkMore] = useState(false);
  const paletteType = darkMore ? "dark" : "light";
  console.log();
  const theme = createTheme({
    palette: { mode: paletteType },
  });

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      setLoading(true);
      axios
        .get("baskets")
        .then((response: AxiosResponse) => {
          setBasket(response.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [setBasket]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Routes>
        {infoUser?.role?.toUpperCase() !== "ADMIN" && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login setInfoUser={setInfoUser} />}
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/catalog" element={<Catalog />} />
          </>
        )}

        {infoUser?.role?.toUpperCase() === "ADMIN" && (
          <>
            <Route path="/admin/homes" element={<Homes />} />
            <Route path="/admin/test" element={<Test />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/add" element={<AddProducts />} />
          </>
        )}
        {/* admin */}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
