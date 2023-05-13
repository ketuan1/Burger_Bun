import Navigator from "../Navigator/navigator";
import "../Menu/menu.css";
import Footer from "../Footer/footer";
import ProductCard from "../Catalog/ProductCard";
import { Link } from "react-router-dom";

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
          {/* list menu category start */}

          <section className="w3l-bottom-grids-6 py-5">
            <div className="container py-lg-5 py-md-4 py-2">
              <div className="grids-area-hny main-cont-wthree-fea row">
                <div className="col-lg-2 col-md-6 grids-feature">
                  <div className="icon__menu--category">
                    <Link to="/menu">
                      <i className="fa-solid fa-plate-wheat"></i>
                      <p>All</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 grids-feature mt-md-0 mt-4">
                  <div className="icon__menu--category">
                    <Link to="/menu">
                      <i className="fa-brands fa-discourse"></i>
                      {/* <h1>{props.match.params.category}</h1> */}
                      <p>today's offer</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 grids-feature mt-lg-0 mt-4">
                  <div className="icon__menu--category">
                    <Link to="/menu">
                      <i className="fa-solid fa-wheat-awn-circle-exclamation"></i>
                      <p>new dish</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 grids-feature mt-lg-0 mt-4">
                  <div className="icon__menu--category">
                    <Link to="/menu">
                      <i className="fa-solid fa-cookie-bite"></i>
                      <p>Snacks</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 grids-feature mt-lg-0 mt-4">
                  <div className="icon__menu--category">
                    <Link to="/menu">
                      <i className="fa-solid fa-drumstick-bite"></i>
                      <p>crispy chicken</p>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 grids-feature mt-lg-0 mt-4">
                  <div className="icon__menu--category">
                    <Link to="/menu">
                      <i className="fa-solid fa-burger"></i>
                      <p>Burgers</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* list menu category end */}
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
