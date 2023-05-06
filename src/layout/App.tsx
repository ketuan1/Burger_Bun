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
// import Index from "../Admin/Index";
import Homes from "../Admin/Homes";
import Test from "../Admin/Test";

function App() {
  const { setBasket } = useContext(StoreContext);
  const [loading, setLoading] = useState<boolean>();
  //dark more
  const [darkMore, useDarkMore] = useState(false);
  const paletteType = darkMore ? "dark" : "light";

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin/homes" element={<Homes />} />
        <Route path="/admin/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
