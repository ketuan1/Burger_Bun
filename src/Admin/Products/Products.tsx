import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../model/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err.data));
  }, [products]);

  const handleDelete = async (productId: number) => {
    axios
      .delete(`http://localhost:8080/api/product/${productId}`)
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box sx={{ marginBottom: 2, textAlign: "center" }}>
        <Button variant="contained" component={Link} to={"/add"}>
          Add Products
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, margin: "auto" }}
          aria-label="customized table"
        >
          <TableHead sx={{ backgroundColor: "#4797ff" }}>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center" sx={{ width: 600 }}>
                Description
              </TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center" sx={{ width: 200 }}>
                Image
              </TableCell>
              <TableCell align="center">Unit in Stock</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product: any, index: any) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.description}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">
                  <img
                    src={`http://localhost:8080/api/file/images/${product.image_url}`}
                    alt={`${product.name}`}
                    style={{ width: 100, height: 120, borderRadius: "10%" }}
                  />
                </TableCell>
                <TableCell align="center">$ {product.units_in_stock}</TableCell>
                <TableCell align="center">
                  <Button
                    sx={{
                      backgroundColor: "#ffd14f",
                      marginRight: 2,
                      "&.MuiButtonBase-root:hover": {
                        backgroundColor: "#ffd14f",
                      },
                    }}
                    variant="contained"
                    component={Link}
                    to={`/update/${product.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#f72a3f",
                      "&.MuiButtonBase-root:hover": {
                        backgroundColor: "#f72a3f",
                      },
                    }}
                    variant="contained"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
