import Navigator from "../Navigator/navigator";

function Contact() {
  return (
    <>
      <Navigator />

      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">Contact Us</h2>
          </div>
        </div>
      </section>

      <section className="w3l-contact-7 py-5" id="contact">
        <div className="contacts-9 py-lg-5 py-md-4">
          <div className="container">
            <div className="top-map">
              <div className="row map-content-9">
                <div className="col-lg-8">
                  <h3 className="title-big">Get in touch with us</h3>
                  <p className="mb-4 mt-lg-0 mt-2">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form
                    action="https://sendmail.w3layouts.com/submitForm"
                    method="post"
                    className="text-right"
                  >
                    <div className="form-grid">
                      <input
                        type="text"
                        name="w3lName"
                        id="w3lName"
                        placeholder="Name*"
                      />
                      <input
                        type="email"
                        name="w3lSender"
                        id="w3lSender"
                        placeholder="Email*"
                      />
                      <input
                        type="text"
                        name="w3lPhone"
                        id="w3lPhone"
                        placeholder="Phone number*"
                      />
                      <input
                        type="text"
                        name="w3lSubject"
                        id="w3lSubject"
                        placeholder="Subject"
                      />
                    </div>
                    <textarea
                      name="w3lMessage"
                      id="w3lMessage"
                      placeholder="Message"
                    ></textarea>
                    <button
                      type="submit"
                      className="btn btn-primary btn-style mt-3"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-lg-4 cont-details">
                  <address>
                    <h5 className="mt-md-5 mt-4">Contact Address</h5>
                    <p>
                      <span className="fa fa-map-marker"></span>Burger Bun, 208
                      Trainer Avenue street, Corner Market, NY - 62617.{" "}
                    </p>
                    <p>
                      {" "}
                      <a href="mailto:info@example.com">
                        <span className="fa fa-envelope"></span>info@example.com
                      </a>
                    </p>
                    <p>
                      <span className="fa fa-phone"></span>
                      <a href="tel:+12 5348943649"> +12 534894364</a>
                    </p>

                    <h5 className="mt-4 mb-3">Opening Hours</h5>
                    <div className="hours">
                      <p>
                        <span className="fa fa-clock-o"></span>10:00am - 09:00pm
                      </p>
                      <p>Sunday Closed</p>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0611814787812!2d106.71007721474923!3d10.8066261923011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a330e608a5%3A0x4cc00c5927dcb361!2zMzUsIDYgxJDGsOG7nW5nIEQ1LCBQaMaw4budbmcgMjUsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MjMwOCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1676105664672!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <footer className="py-5">
        <div className="container py-xl-4">
          <div className="row footer-top">
            <div className="col-lg-4 footer-grid_section_1its footer-text">
              <h2>
                <a className="logo text-wh" href="index.html">
                  <img
                    src="assets/images/burger.png"
                    alt="burger logo"
                    width="35px"
                  />{" "}
                  Burger Bun
                </a>
              </h2>
              <p className="mt-lg-4 mt-3 mb-4 pb-lg-2">
                We are dedicated to the safety of our guests and employees and
                have updated our safety measures. We believe in Simple,
                Creative, Modern and Flexible Design Standards with a Retina and
                Responsive Approach. Browse the amazing Features this template
                offers.
              </p>
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
                <p>
                  <strong>Address :</strong> 6 Đường D5, Phường 25, Bình Thạnh,
                  Thành phố Hồ Chí Minh 72308
                </p>
                <p className="my-2">
                  <strong>Phone :</strong>{" "}
                  <a href="tel:+12 534894364">+123 456 789</a>
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:info@example.com">ketuan81@example.com</a>
                </p>
              </div>
              <div className="footer-title mt-4 pt-md-2">
                <h3>Payments we accept</h3>
              </div>
              <ul className="list-unstyled payment-links mt-4">
                <li>
                  <a href="#payment">
                    <img
                      src="assets/images/pay2.png"
                      className="radius-image"
                      width="55px"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#payment">
                    <img
                      src="assets/images/pay5.png"
                      className="radius-image"
                      width="55px"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#payment">
                    <img
                      src="assets/images/pay1.png"
                      className="radius-image"
                      width="55px"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#payment">
                    <img
                      src="assets/images/pay4.png"
                      className="radius-image"
                      width="55px"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-6 footer-grid_section_1its footer-text mt-lg-0 mt-5">
              <div className="footer-title">
                <h3>Subscribe Newsletter</h3>
              </div>
              <div className="info-form-right mt-4 p-0">
                <p className="mb-4">
                  Enter your email and receive the latest news, updates and
                  special offers from us.
                </p>
                <form action="#" method="post">
                  <div className="form-group mb-2">
                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      placeholder="Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-style btn-primary w-100 d-block ml-auto py-2"
                  >
                    Subscribe
                  </button>
                </form>
                <h4 className="mt-4">
                  Subscribe & Get $10 on Your First Order
                </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="cpy-right text-center py-4">
        <p>© 2023 KFC. All rights reserved | Design by Tuan </p>
      </div>
    </>
  );
}

export default Contact;
