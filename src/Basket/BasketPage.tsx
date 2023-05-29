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
import { log } from "console";

function BasketPage() {
  const { basket, setBasket, removeItem } = useContext(StoreContext);
  const [status, setStatus] = useState({
    loading: false,
    name: "",
  });

  const getInfo =
    sessionStorage.getItem("KEY_ACCOUNT") !== null
      ? JSON.parse(sessionStorage.getItem("KEY_ACCOUNT") as string)
      : null;

  const [callApi, setCallApi] = useState(false);

  // add basket
  const handleAddItem = (productId: number, name: string) => {
    setStatus({
      loading: true,
      name: name,
    });
    axios
      .post(`/api/baskets/${getInfo.id}?productId=${productId}&quantity=1`, {})
      .then((response) => {
        setBasket(response.data);
        setCallApi(!callApi);
      })
      .catch((err) => console.log(err))
      .finally(() => setStatus({ loading: false, name }));
  };

  // //remove basket
  // const handleRemoveItem = (
  //   productId: number,
  //   quantity: number,
  //   name: string
  // ) => {
  //   setStatus({
  //     loading: true,
  //     name: name,
  //   });
  //   axios
  //     .delete(
  //       `/api/baskets/${getInfo.id}?productId=${productId}&quantity=${quantity}`
  //     )
  //     .then(() => {
  //       removeItem(productId, quantity);
  //       setCallApi(!callApi);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setStatus({ loading: false, name }));
  // };

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
      .post(
        `/api/baskets/${getInfo.id}?productId=${productId}&quantity=-${quantity}`
      )
      .then((response) => {
        setBasket(response.data);
        setCallApi(!callApi);
      })
      .catch((err) => console.log(err))
      .finally(() => setStatus({ loading: false, name }));
  };

  const [data, setData] = useState<any[]>([]);

  // api call basket

  useEffect(() => {
    axios
      .get(`/api/baskets/${getInfo.id}`)
      .then((data) => setData(data?.data?.basketItem));
  }, [callApi]);
  let totalSum = [...data].reduce((acc, total) => {
    return acc + total?.price * total?.quantity;
  }, 0);
  // if (!basket) {
  //   return <Typography variant="h3">Basket is empty</Typography>;
  // }
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
                {/* <TableCell>Image</TableCell> */}
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Subtotal</TableCell>
                {/* <TableCell align="right">Action</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: BasketItem) => (
                <TableRow
                  key={row.productId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell align="right">$ {row.price}</TableCell>

                  <TableCell align="center">
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
                    {row.quantity}

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

                  <TableCell align="center">
                    $ {(row.price * row.quantity).toFixed(2)}
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
            onClick={async () => {
              let rs = await axios.post(`/pay`, {
                userId: getInfo.id,
                total: totalSum + Number(5),
              });
              window.location.href = rs?.data;
              // "https://www.sandbox.paypal.com/cgi-bin/we…?cmd=_express-checkout&token=EC-46B13212DF466853P";
              console.log(rs.data);
            }}
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
