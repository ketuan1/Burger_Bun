import Navigator from "../Navigator/navigator";
import "../Menu/menu.css";
import Footer from "../Footer/footer";
import ProductCard from "../Catalog/ProductCard";

function Menu() {
  return (
    <>
      <Navigator />

      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">Menu items</h2>
          </div>
        </div>
      </section>
      <div className="w3l-menublock py-5">
        <section className="w3l-bottom-grids-6 py-5">
          <h2 className="text-center">welcome Project</h2>
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="mb-3 mx-3">
              <h2>title</h2>
            </div>

            {/* products card */}
            <div className="grids-area-hny main-cont-wthree-fea row">
              <div className="col-lg-3 col-md-6 grids-feature">
                {/* <ProductCard /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
