import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Product } from "../../model/product";
import { useEffect, useState } from "react";
import { Category } from "../../model/category";

export default function AddProducts() {
  let navigate = useNavigate();

  const [category, setCategory] = useState<Category[]>([]);

  const formik = useFormik<Product>({
    initialValues: {
      id: 0,
      name: "",
      price: 0,
      description: "",
      category: 0,
      imageUrl: "",
      unitsInStock: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be 3 character!")
        .required("Name is required!"),
      price: Yup.number().required("Price is required"),
      description: Yup.string()
        .min(2, "Description to short")
        .max(100, "Description so long!"),
      category: Yup.number().required("Category is required!").min(1),
      unitsInStock: Yup.number().required("Units in stock is required"),
    }),
    onSubmit: async (values, e: any) => {
      const bodyData = { ...values,categoryId : values.category}
      await axios
        .post(`http://localhost:8080/api/products/add`, bodyData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.data));

      navigate("/admin/products");
    },
    enableReinitialize: true,
  });

  // image
  const onFileChangeHandle = async (e: any) => {
    const formData = new FormData();
    formData.append("imageUrl", e.target.files[0]);
    await axios
      .post(`http://localhost:8080/api/file/upload`, formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const LoadCategory = async () => {
    const listCategory = await axios.get(`http://localhost:8080/api/category`);
    setCategory(listCategory.data);
  };

  useEffect(() => {
    LoadCategory();
  }, []);

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

            {/* category list */}

            <NativeSelect
               {...formik.getFieldProps('category')}
               id="category"
               onChange={formik.handleChange}
             >
              <option value="0"> -- select -- </option>
              {category.map((value) => (
                <option value={value.id}>
                  {value.categoryName}
                </option>
              ))}
              
            </NativeSelect>
            {formik.errors.category && formik.touched.category && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.category}
              </Typography>
            )}
            <Input
              sx={{ mb: 2 }}
              name="imageUrl"
              type="file"
              onInput={formik.handleChange}
              onChange={onFileChangeHandle}
              value={formik.values.imageUrl}
            />

            <TextField
              sx={{ mb: 2 }}
              id="outlined-required"
              label="Units Stock"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              inputProps={{ min: "0.50", step: "0.01" }}
              name="unitsInStock"
              value={formik.values.unitsInStock}
            />
            {formik.errors.unitsInStock && formik.touched.unitsInStock && (
              <Typography style={{ color: "#eb4034", margin: "0 20px 10px" }}>
                {formik.errors.unitsInStock}
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
          to={"/admin/products"}
          sx={{ mt: 4 }}
        >
          Go back
        </Button>
      </Box>
    </>
  );
}
