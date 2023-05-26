import { Box, Button, Container, FormControl, Input, NativeSelect, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Category } from "../../model/category";
import * as Yup from "yup";

export default function AddCategories(){
    let navigate = useNavigate();


  const formik = useFormik<Category>({
    initialValues: {
      id: 0,
      categoryName: ""
    },
    
    onSubmit: async (values, e: any) => {
      await axios
        .post(`http://localhost:8080/api/category/add`, values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.data));

      navigate("/admin/categories");
    },
    enableReinitialize: true,
  });
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
          Add Categories
        </Typography>
        <form onSubmit={formik.handleSubmit} >
          <FormControl>
            <TextField
              required
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
              Submit
            </Button>
          </FormControl>
        </form>
      </Container>
      <Box>
        <Button
          variant="contained"
          component={Link}
          to={"/admin/categories"}
          sx={{ mt: 4 }}
        >
          Go back
        </Button>
      </Box>
    </>
  );
}