import axios, { AxiosResponse } from "axios";
import { Product } from "../../model/product";
import { StoreContext } from "../../context/StoreContext";
import { useContext, useState } from "react";
import { LoadingButton } from "@mui/lab";

interface Props {
  product: Product;
}

function ProductCard(props: Props) {
  const { setBasket } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);

  const handleAddItem = (productId: number) => {
    setLoading(true);
    axios
      .post(`baskets?productId=${productId}&quantity=1`, {})
      .then((response: AxiosResponse) => setBasket(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <>
      <div className="area-box are-box__custom">
        <div className="img_custom">
          {/* <img className="img_custom" src="./assets/images/g1.jpg" alt="" /> */}
          <img
            className="img_custom"
            src={`http://localhost:8080/api/file/image/${props.product.imageUrl}`}
            alt={`${props.product.name}`}
          />
        </div>
        <div className="title_custom">
          <h3>{props.product.brand}</h3>
          <h4>{props.product.unitPrice.toFixed(2)}</h4>
        </div>
        {/* <p>{props.product.description}</p> */}
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

      <div className="home-product-item__sale-off">
        <span className="home-product-item__sale-off-percent">10%</span>
        <span className="home-product-item__sale-off-lable">Giam</span>
      </div>
    </>
  );
}

export default ProductCard;
