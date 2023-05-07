import { Container } from "@mui/material";
import SiderBar from "../SiderBar";
import { Link } from "react-router-dom";

function User() {
  return (
    <>
      <SiderBar />
      <Container>
        <div className="py-4 border shadow">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>{value.phone}</td>
                    <td>
                      <Link to="/addUser" className="btn btn-outline-light">
                        Add
                      </Link>
                      <Link
                        to={`/viewUser/${value.id}`}
                        className="btn btn-outline-primary"
                      >
                        View
                      </Link>

                      <Link
                        to={`/editUser/${value.id}`}
                        className="btn btn-outline-success"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteUser(value.id)}
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

export default User;
