import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Product } from "../../model/product";

export default function EditProducts() {
  let navigate = useNavigate();

  const { productId } = useParams();

  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    description: "",
    category: "",
    imageUrl: "",
    unitsInStock: 0,
  });

  const formik = useFormik<Product>({
    initialValues: {
      id: product.id ?? 0,
      name: product.name ?? "",
      price: product.price ?? "",
      description: product.description ?? "",
      category: product.category ?? "",
      imageUrl: product.imageUrl,
      unitsInStock: product.unitsInStock ?? 0,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Title must be 3 character!")
        .required("Title is required!"),
      description: Yup.string()
        .min(2, "Description to short")
        .max(100, "Description so long!"),
      unitPrice: Yup.number().required("Price is required"),
    }),
    onSubmit: async (values) => {
      await axios
        .put(`http://localhost:8080/api/product/update/${productId}`, values)
        .catch((err) => console.log(err.data));
      navigate("/");
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err.data));
  }, [product]);

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
          Edit Products Form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <TextField
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

            <TextField
              sx={{ mb: 2 }}
              id="outlined-required"
              label="Units Stock"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              inputProps={{ min: "0.50", step: "0.01" }}
              name="Units Stock"
              value={formik.values.unitsInStock}
            />
            {formik.errors.unitsInStock && formik.touched.unitsInStock && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.unitsInStock}
              </Typography>
            )}

            <Button variant="contained" color="success" type="submit">
              Update
            </Button>
          </FormControl>
        </form>
      </Box>
      <Box>
        <Button variant="contained" component={Link} to={"/"} sx={{ mt: 4 }}>
          Go back
        </Button>
      </Box>
    </>
  );
}
