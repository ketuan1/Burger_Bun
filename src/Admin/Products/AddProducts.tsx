import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Product } from "../../model/product";

export default function AddProducts() {
  let navigate = useNavigate();

  const onFileChangeHandle = async (e: any) => {
    const formData = new FormData();
    formData.append("image_url", e.target.files[0]);
    await axios
      .post("http://localhost:8080/api/file/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const formik = useFormik<Product>({
    initialValues: {
      id: 0,
      name: "",
      price: 0,
      description: "",
      category: "",
      image_url: "",
      units_in_stock: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be 3 character!")
        .required("Name is required!"),
      price: Yup.number().required("Price is required"),
      description: Yup.string()
        .min(2, "Description to short")
        .max(100, "Description so long!"),
      category: Yup.string()
        .min(3, "Category must be 3 character!")
        .required("Category is required!"),
      units_in_stock: Yup.number().required("Units in stock is required"),
    }),
    onSubmit: async (values, e: any) => {
      const pathString = "C:\\fakepath\\";
      values.image_url = values.image_url.replace(pathString, "");

      await axios
        .post("http://localhost:8080/api/product/add", values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.data));

      navigate("/");
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
          Add Products Form
        </Typography>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <FormControl>
            <TextField
              required
              sx={{ mb: 2, width: 500 }}
              id="outlined-required"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.name}
              </Typography>
            )}

            <TextField
              sx={{ mb: 2 }}
              id="outlined-required"
              label="Price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              inputProps={{ min: "0.50", step: "0.01" }}
              name="price"
              value={formik.values.price}
            />
            {formik.errors.price && formik.touched.price && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.price}
              </Typography>
            )}

            <TextField
              required
              multiline
              sx={{ mb: 2 }}
              id="outlined-multiline-static"
              rows={4}
              label="Description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              value={formik.values.description}
            />
            {formik.errors.description && formik.touched.description && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.description}
              </Typography>
            )}

            <TextField
              required
              multiline
              sx={{ mb: 2 }}
              id="outlined-multiline-static"
              rows={4}
              label="Category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="category"
              value={formik.values.category}
            />
            {formik.errors.category && formik.touched.category && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.category}
              </Typography>
            )}

            <Input
              sx={{ mb: 2 }}
              name="image_url"
              type="file"
              onInput={formik.handleChange}
              onChange={onFileChangeHandle}
              value={formik.values.image_url}
            />

            <TextField
              sx={{ mb: 2 }}
              id="outlined-required"
              label="Units Stock"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              inputProps={{ min: "0.50", step: "0.01" }}
              name="units_in_stock"
              value={formik.values.units_in_stock}
            />
            {formik.errors.units_in_stock && formik.touched.units_in_stock && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.units_in_stock}
              </Typography>
            )}

            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </Container>
      <Box>
        <Button variant="contained" component={Link} to={"/"} sx={{ mt: 4 }}>
          Go back
        </Button>
      </Box>
    </>
  );
}
