import { Container } from "@mui/material";

function EditUser() {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add User</h2>

            {/* onSubmit={handleSubmit(onSubmit)} */}
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Email
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Category" className="form-label">
                  Password
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your category"
                  name="category"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Price" className="form-label">
                  FirstName
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your price"
                  name="price"
                  value={first_name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  LastName
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your description"
                  name="description"
                  value={last_name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Phone
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your description"
                  name="description"
                  value={phone}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Add User
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default EditUser;
