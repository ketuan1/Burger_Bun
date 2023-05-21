import { Container } from "@mui/material";
import { Route, Router, Routes } from "react-router-dom";
import Products from "./Products";
import EditProducts from "./EditProducts";
import AddProducts from "./AddProducts";
import ViewProducts from "./ViewProducts";

function MainProducts() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/add" element={<AddProducts />}></Route>
          <Route path="/view" element={<ViewProducts />}></Route>
          <Route path="/update/:productId" element={<EditProducts />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default MainProducts;
