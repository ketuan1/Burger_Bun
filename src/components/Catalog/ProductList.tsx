import { Product } from "../../model/product";
import Navigator from "../Navigator/navigator";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

function ProductList(props: Props) {
  return (
    <>
      <Navigator />

      {/* menu List start */}
      <div className="w3l-menublock py-5">
        <section className="w3l-bottom-grids-6 py-5">
          <h2 className="text-center">welcome Project</h2>
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="mb-3 mx-3">
              <h2>title</h2>
            </div>
            <div className="grids-area-hny main-cont-wthree-fea row">
              {/* products Card */}
              {props.products.map((product, index) => (
                <div className="col-lg-3 col-md-6 grids-feature" key={index}>
                  <ProductCard key={product.id} product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductList;
