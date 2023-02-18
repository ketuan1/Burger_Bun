import { Link } from "react-router-dom";

function CategoryProduct() {
    return ( 
        <>
            <section className="w3l-bottom-grids-6 py-5">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="grids-area-hny main-cont-wthree-fea row">
            <div className="col-lg-3 col-md-6 grids-feature">
                <div className="area-box">
                    <img src="assets/images/burger.png" alt="burger logo" width="35px" /> 
                    <h4><a href="#feature" className="title-head">Burgers</a></h4>
                    <p className="mb-3">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                    <Link to="/menu" className="btn btn-text">View all </Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 grids-feature mt-md-0 mt-4">
                <div className="area-box">
                    <img src="assets/images/snack.png" alt="burger logo" width="35px" />
                    <h4><a href="#feature" className="title-head">Snacks</a></h4>
                    <p className="mb-3">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                    <Link to="/menu" className="btn btn-text">View all </Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
                <div className="area-box">
                    <img src="assets/images/beverage.png" alt="burger logo" width="35px" />
                    <h4><a href="#feature" className="title-head">Beverages</a></h4>
                    <p className="mb-3">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                    <Link to="/menu" className="btn btn-text">View all </Link>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
              <div className="area-box">
                  <img src="assets/images/beverage.png" alt="burger logo" width="35px" />
                  <h4><a href="#feature" className="title-head">Beverages2323</a></h4>
                  <p className="mb-3">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                  <Link to="/menu" className="btn btn-text">View all </Link>
              </div>
          </div>
        </div>
    </div>
</section>
        </>
     );
}

export default CategoryProduct;