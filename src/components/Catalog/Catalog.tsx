import { useEffect, useState } from "react";
import { Product } from "../../model/product";
import ProductList from "./ProductList";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading/Loading";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  //loading
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    let rs = await axios
      .get("http://localhost:8080/api/products", {
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Credentials': true
        }
      })
      console.log(rs);
  }
  useEffect(() => {
    //axios fetch API
    getData()
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
