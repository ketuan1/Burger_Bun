import { Container } from "@mui/material";
import SiderBar from "../SiderBar";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Products() {
  return (
    <>
      <SiderBar />
      <Container>
        <div className="py-4 border shadow">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.name}</td>
                    <td>{value.category}</td>
                    <td>{value.price}</td>
                    <td>{value.description}</td>
                    <td>
                      <Link to="/addproducts" className="btn btn-outline-light">
                        Add
                      </Link>
                      <Link
                        to={`/viewproducts/${value.id}`}
                        className="btn btn-outline-primary"
                      >
                        View
                      </Link>

                      <Link
                        to={`/editproducts/${value.id}`}
                        className="btn btn-outline-success"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteProducts(value.id)}
                        className="btn btn-outline-danger"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export default Products;
