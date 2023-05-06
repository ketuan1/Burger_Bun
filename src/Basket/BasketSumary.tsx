import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

function BasketSummary() {
  const { basket } = useContext(StoreContext);
  const subtotal = basket
    ? basket.basketItems.reduce(
        (sum, item) => sum + item.quantity * item.unitPrice,
        0
      )
    : 0;
  const deliveryFee = subtotal > 100 ? 0 : 5;
  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell>$ {subtotal.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery Free</TableCell>
              <TableCell>$ {deliveryFee.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell>$ {(subtotal + deliveryFee).toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <span style={{ fontSize: "italic" }}>
                ** Orders over $100 will be qualified for free delivery
              </span>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BasketSummary;
