import {
    Box,
    Button,
    Container,
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
  import SiderBar from "../SiderBar";
import { Category } from "../../model/category";
  
  export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/category`)
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err.data));
    }, [categories]);
  
    const handleDelete = async (productId: number) => {
      axios
        .delete(`http://localhost:8080/api/category/${productId}`)
        .catch((err) => console.log(err));
    };
  
    return (
      <>
        <SiderBar />
        <Container>
          <Box sx={{ marginBottom: 2, textAlign: "center" }}>
            <Button variant="contained" component={Link} to={"./add"}>
              Add Categories  
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
                  <TableCell align="center">Actions</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((item: any, index: any) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell align="center">{item.categoryName}</TableCell>
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
                        to={`./update/${item.id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: "purple",
                          marginRight: 2,
                          "&.MuiButtonBase-root:hover": {
                            backgroundColor: "purple",
                          },
                        }}
                        variant="contained"
                        component={Link}
                        to={`./view/${item.id}`}
                      >
                        View
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: "#f72a3f",
                          "&.MuiButtonBase-root:hover": {
                            backgroundColor: "#f72a3f",
                          },
                        }}
                        variant="contained"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }
  