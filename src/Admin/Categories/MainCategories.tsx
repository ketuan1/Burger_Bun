import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import AddCategories from "./AddCategories";
import ViewCategproes from "./ViewCategories";
import EditCategories from "./EditCategories";

export default function MainCategories(){
    return(
        <Container>
        <Routes>
          <Route path="/" element={<Categories />}></Route>
          <Route path="/add" element={<AddCategories />}></Route>
          <Route path="/view" element={<ViewCategproes />}></Route>
          <Route path="/update/:productId" element={<EditCategories />}></Route>
        </Routes>
      </Container>
    )
}