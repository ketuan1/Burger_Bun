import { Container } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

function Category() {
  //   //delete
  //   const deleteCategory = async (id) => {
  //     await axios.delete(`http://localhost:8080/api/delete/products/${id}`);
  //     loadProducts();
  // };
  return (
    <>
      <Container>
        <div className="py-4 border shadow">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.name}</td>
                    <td>
                      <Link to="/addCategory" className="btn btn-outline-light">
                        Add
                      </Link>
                      <Link
                        to={`/editCategory/${value.id}`}
                        className="btn btn-outline-success"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteCategory(value.id)}
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

export default Category;
