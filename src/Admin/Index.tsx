import { Route, Routes } from "react-router-dom";
import Home from "./Homes";
import "./Admin.css";

function Index() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default Index;
