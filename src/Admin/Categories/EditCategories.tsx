import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Category } from "../../model/category";
import * as Yup from "yup";
export default function EditCategories(){
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
  
  const formik = useFormik<Category>({
    initialValues: {
      id: categories.id ,
      categoryName: categories.categoryName
    },
    onSubmit: async (values, e: any) => {
      await axios
        .put(`http://localhost:8080/api/category/update/${categoriesId}`, values)
        .catch((err) => console.log(err.data));
      navigate("/admin/categories");
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
          Edit Categories Form
        </Typography>
        <form onSubmit={formik.handleSubmit}  encType="multipart/form-data">
          <FormControl>
            <TextField
              sx={{ mb: 2, width: 500 }}
              id="outlined-required"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="categoryName"
              value={formik.values.categoryName}
            />

            {formik.errors.categoryName && formik.touched.categoryName && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.categoryName}
              </Typography>
            )}
            <Button variant="contained" color="success" type="submit">
              Update
            </Button>
          </FormControl>
        </form>
      </Box>
      <Box>
        <Button variant="contained" component={Link} to={"/admin/categories/"} sx={{ mt: 4 }}>
          Go back
        </Button>
      </Box>
    </>)
}