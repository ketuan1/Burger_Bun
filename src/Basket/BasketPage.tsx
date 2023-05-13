import { useContext, useEffect, useState } from "react";
import { Basket, BasketItem } from "../model/basket";
import {
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import BasketSummary from "./BasketSumary";
import { Link } from "react-router-dom";
import { AddCircle, Delete, RemoveCircle } from "@mui/icons-material";
import { StoreContext } from "../context/StoreContext";
import axios, { AxiosResponse } from "axios";
import Navigator from "../components/Navigator/navigator";
import "./BasketStyle.css";

function BasketPage() {
  const { basket, setBasket, removeItem } = useContext(StoreContext);
  const [status, setStatus] = useState({
    loading: false,
    name: "",
  });

  // add basket
  const handleAddItem = (productId: number, name: string) => {
    setStatus({
      loading: true,
      name: name,
    });
    axios
      .post(`baskets?productId=${productId}&quantity=1`, {})
      .then((response: AxiosResponse) => setBasket(response.data))
      .catch((err) => console.log(err))
      .finally(() => setStatus({ loading: false, name }));
  };

  //remove basket
  const handleRemoveItem = (
    productId: number,
    quantity: number,
    name: string
  ) => {
    setStatus({
      loading: true,
      name: name,
    });
    axios
      .delete(`baskets?productId=${productId}&quantity=${quantity}`)
      .then(() => removeItem(productId, quantity))
      .catch((err) => console.log(err))
      .finally(() => setStatus({ loading: false, name }));
  };

  if (!basket) {
    return <Typography variant="h3">Basket is empty</Typography>;
  }
  return (
    <>
      <Navigator />
      <Container>
        <TableContainer
          component={Paper}
          elevation={3}
          className="table-baskets-custom"
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Image</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basket.basketItems.map((row: BasketItem) => (
                <TableRow
                  key={row.productId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  {/* <TableCell component="th" scope="row">
                  {row.imageUrl}
                </TableCell> */}
                  <TableCell align="right">$ {row.unitPrice}</TableCell>

                  <TableCell align="center">
                    {/* Button Remove */}
                    <LoadingButton
                      loading={
                        status.loading &&
                        status.name === "remove" + row.productId
                      }
                      onClick={() =>
                        handleRemoveItem(
                          row.productId,
                          1,
                          "remove" + row.productId
                        )
                      }
                      color="error"
                    >
                      <RemoveCircle />
                    </LoadingButton>
                    {/* row. quantity */}
                    {row.quantity}

                    {/* Button Add */}
                    <LoadingButton
                      loading={
                        status.loading && status.name === "add" + row.productId
                      }
                      onClick={() =>
                        handleAddItem(row.productId, "add" + row.productId)
                      }
                      color="secondary"
                    >
                      <AddCircle />
                    </LoadingButton>
                  </TableCell>

                  <TableCell align="right">
                    $ {(row.unitPrice * row.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    <LoadingButton
                      color="error"
                      loading={
                        status.loading &&
                        status.name === "delete" + row.productId
                      }
                      onClick={() =>
                        handleRemoveItem(
                          row.productId,
                          row.quantity,
                          "delete" + row.productId
                        )
                      }
                    >
                      <Delete />
                    </LoadingButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container>
          <Grid item xs={6} />
          <Grid item xs={6} />
          <BasketSummary />

          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            size="large"
            fullWidth
          >
            Check out
          </Button>
        </Grid>
      </Container>
    </>
  );
}

export default BasketPage;
