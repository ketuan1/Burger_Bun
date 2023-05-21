import { useEffect, useState } from "react";
import { Product } from "../../model/product";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading/Loading";
import AllMenuList from "./allMenuList";

function AllMenu() {
  const [products, setProducts] = useState<Product[]>([]);

  //loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //axios fetch API
    axios
      .get("http://localhost:8080/api/products")
      .then((response: AxiosResponse) => setProducts(response.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <AllMenuList products={products} />
    </>
  );
}

export default AllMenu;
