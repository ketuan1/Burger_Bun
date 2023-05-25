import { Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../model/product";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    description: "",
    category: 0,
    imageUrl: "",
    unitsInStock: 0,
  });

  useEffect(() => {
    viewProducts();
  }, []);

  const viewProducts = async () => {
    const resultView = await axios.get(
      `http://localhost:8080/api/list/products/${id}`
    );
    setProduct(resultView.data);
  };
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">View Details Products</h2>

            <div className="card">
              <div className="card-header">
                Details of Products Id:
                {product.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <p>Name</p>
                    {product.name}
                  </li>
                  <li className="list-group-item">
                    <p>Category</p>
                    {product.category}
                  </li>
                  <li className="list-group-item">
                    <p>Price</p>
                    {product.price}
                  </li>
                  <li className="list-group-item">
                    <p>Description</p>
                    {product.description}
                  </li>
                </ul>
              </div>
            </div>
            <Link to={"/"} className="btn btn-primary mt-2">
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ViewProducts;
