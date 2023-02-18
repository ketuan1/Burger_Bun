function Footer() {
    return ( 
        <>
            <footer className="py-5">
  <div className="container py-xl-4">
    <div className="row footer-top">
      <div className="col-lg-4 footer-grid_section_1its footer-text">
        <h2>
          <a className="logo text-wh" href="index.html">
            <img src="assets/images/burger.png" alt="burger logo" width="35px" /> Burger Bun
          </a>
        </h2>
        <p className="mt-lg-4 mt-3 mb-4 pb-lg-2">We are dedicated to the safety of our guests and employees and have updated
          our safety measures. We believe in Simple, Creative, Modern and Flexible Design Standards with a Retina and Responsive Approach.
          Browse the amazing Features this template offers.</p>
        <ul className="top-right-info">
          <li>
            <p>Follow us:</p>
          </li>
          <li className="facebook-w3">
            <a href="#facebbok">
              <span className="fa fa-facebook-f"></span>
            </a>
          </li>
          <li className="twitter-w3">
            <a href="#twitter">
              <span className="fa fa-twitter"></span>
            </a>
          </li>
          <li className="google-w3">
            <a href="#google">
              <span className="fa fa-google-plus"></span>
            </a>
          </li>
          <li className="dribble-w3">
            <a href="#dribble">
              <span className="fa fa-dribbble"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-sm-6 footer-grid_section_1its mt-lg-0 mt-5">
        <div className="footer-title">
          <h3>Contact Us</h3>
        </div>
        <div className="footer-text mt-4">
          <p><strong>Address :</strong> Burger Bun, 208 Trainer Avenue street, Corner
            Market, NY - 62617.</p>
          <p className="my-2"><strong>Phone :</strong> <a href="tel:+12 534894364">+12 534894364</a></p>
          <p><strong>Email :</strong> <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
        <div className="footer-title mt-4 pt-md-2">
          <h3>Payments we accept</h3>
        </div>
        <ul className="list-unstyled payment-links mt-4">
          <li>
            <a href="#payment"><img src="assets/images/pay2.png" className="radius-image" width="55px" alt="" /></a>
          </li>
          <li>
            <a href="#payment"><img src="assets/images/pay5.png" className="radius-image" width="55px" alt="" /></a>
          </li>
          <li>
            <a href="#payment"><img src="assets/images/pay1.png" className="radius-image" width="55px" alt="" /></a>
          </li>
          <li>
            <a href="#payment"><img src="assets/images/pay4.png" className="radius-image" width="55px" alt="" /></a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-sm-6 footer-grid_section_1its footer-text mt-lg-0 mt-5">
        <div className="footer-title">
          <h3>Subscribe Newsletter</h3>
        </div>
        <div className="info-form-right mt-4 p-0">
          <p className="mb-4">Enter your email and receive the latest news, updates and special offers from us.</p>
          <form action="#" method="post">
            <div className="form-group mb-2">
              <input type="email" className="form-control" name="Email" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-style btn-primary w-100 d-block ml-auto py-2">Subscribe</button>
          </form>
          <h4 className="mt-4">Subscribe & Get $10 on Your First Order</h4>
        </div>
      </div>
    </div>
  </div>
</footer>
<div className="cpy-right text-center py-4">
  <p>© 2020 Burger Bun. All rights reserved | Design by <a href="http://w3layouts.com"> W3layouts.</a> </p>
        </div>
        </>
     );
}

export default Footer;