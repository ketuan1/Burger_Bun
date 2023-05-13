import { useEffect, useState } from "react";
import { Product } from "../../model/product";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading/Loading";
import ProductPageList from "./productPageList";

function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  //loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //axios fetch API
    axios
      .get("http://localhost:8080/api/products")
      .then((response: AxiosResponse) => setProducts(response.data.slice(0, 8)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ProductPageList products={products} />
    </>
  );
}

export default ProductPage;
