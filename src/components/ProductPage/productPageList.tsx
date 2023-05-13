import { Product } from "../../model/product";
import ProductPageCard from "./productPageCard";

interface Props {
  products: Product[];
}

function ProductPageList(props: Props) {
  return (
    <>
      <section className="w3l-bottom-grids-6 py-5">
        <h2 className="text-center">Product Burger Bun</h2>
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="grids-area-hny main-cont-wthree-fea row">
            {/* products Card */}
            {props.products.map((product, index) => (
              <div className="col-lg-3 col-md-6 grids-feature" key={index}>
                <ProductPageCard key={product.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPageList;
