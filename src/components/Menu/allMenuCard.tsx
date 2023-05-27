import axios, { AxiosResponse } from "axios";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { LoadingButton } from "@mui/lab";
import { Product } from "../../model/product";

interface Props {
  product: Product;
}

function AllMenuCard(props: Props) {
  const { setBasket } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const getInfo =
    sessionStorage.getItem("KEY_ACCOUNT") !== null
      ? JSON.parse(sessionStorage.getItem("KEY_ACCOUNT") as string)
      : null;
  const handleAddItem = (productId: number) => {
    setLoading(true);
    console.log(`${getInfo.id}`);
    axios
      .post(
        `http://localhost:8080/api/baskets/${getInfo.id}?productId=${productId}&quantity=1`,
        {}
      )
      .then((response: AxiosResponse) => setBasket(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <>
      <div className="area-box are-box__custom">
        <div className="img_custom">
          <img
            className="img_custom"
            src={`http://localhost:8080/api/file/image/${props.product.imageUrl}`}
            alt={`${props.product.name}`}
          />
        </div>
        <div className="title_custom">
          <h3>{props.product.name}</h3>
          <h4>$ {props.product.price.toFixed(2)}</h4>
        </div>
        {/* <p>{props.product.description}</p> */}
        {props.product.price < 200 && (
          <div className="home-product-item__sale-off">
            <span className="home-product-item__sale-off-percent">10%</span>
            <span className="home-product-item__sale-off-lable">discount</span>
          </div>
        )}
        <div>
          <LoadingButton
            className="button_custom"
            loading={loading}
            onClick={() => handleAddItem(props.product.id)}
          >
            Add to card
          </LoadingButton>
        </div>
      </div>
    </>
  );
}

export default AllMenuCard;
