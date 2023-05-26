import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Category } from "../../model/category";

export default function ViewCategories(){
    const { categoriesId } = useParams<Record<string, string>>();
  let navigate = useNavigate();
  
  const [categories, setCategories] = useState<Category>({
    id: 0,
    categoryName: "",
  });
  async function fetchData(){
    try {
      const response = await axios.get(`http://localhost:8080/api/category/${categoriesId}`)
      setCategories( response.data)
    } catch (error) {
      console.error(error)
    }
  }
  

  useEffect(() => {
    fetchData();
  }, []);
    return (
        <>
      <Container>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">View Details Products</h2>

            <div className="card">
              <div className="card-header">
                Details of Products Id:
                {categories.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <p>Name</p>
                    {categories.categoryName}
                  </li>
                </ul>
              </div>
            </div>
            <Link to={"/admin/categories"} className="btn btn-primary mt-2">
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </>
    )
}