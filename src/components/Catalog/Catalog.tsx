import { useEffect, useState } from "react";
import { Product } from "../../model/product";
import ProductList from "./ProductList";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading/Loading";

function Catalog() {
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
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
