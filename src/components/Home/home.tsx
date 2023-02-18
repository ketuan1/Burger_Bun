import { Link } from 'react-router-dom';
import logo from '../../image/lg.png';
import CategoryProduct from '../CategoryProduct/categoryProduct';
import Feature from '../Feature/feature';
import Footer from '../Footer/footer';
import '../Home/home.css';
import Navigator from '../Navigator/navigator';


function Home() {

  // jquery navigation scroll

  $(window).on("scroll", function () {
    var scrolls =  window.scrollY;

    if (scrolls >= 80) {
      $("#site-header").addClass("nav-fixed");
    } else {
      $("#site-header").removeClass("nav-fixed");
    }
  });

  //Main navigation Active Class Add Remove
  $(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
  });
  $(document).on("ready", function () {
    if (window.innerWidth > 991) {
      $("header").removeClass("active");
    }
    $(window).on("resize", function () {
      if (window.innerWidth > 991) {
        $("header").removeClass("active");
      }
    });
  });

 return ( 
   <>
     <Navigator />
  
<section id="home" className="w3l-banner py-5">
    <div className="container py-lg-5 py-md-4 mt-lg-0 mt-md-5 mt-4">
        <div className="row align-items-center py-lg-5 py-4 mt-4">
            <div className="col-lg-6 col-sm-12">
                <h3 className="">Delight your Best. </h3>
                <h2 className="mb-4">Steak Burger</h2>
                <p>We are dedicated to the safety of our guests and employees and have updated our safety measures. Lorem ipsum dolor sit amet elit. Provident.
                    fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac
                    cursus quis, leo.</p>
                <div className="mt-md-5 mt-4">
                    <a className="btn btn-primary btn-style mr-2" href="menu.html"> See Menu </a>
                    <a className="btn btn-outline-primary btn-style" href="#call"> Book a table </a>
                </div>
            </div>
            <div className="col-lg-5">
            </div>
        </div>
    </div>
</section>
<section className="w3l-index3" id="work">
    <div className="midd-w3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
                <div className="col-lg-6 left-wthree-img text-righ">
                    <div className="position-relative">
                        <img src="assets/images/about.jpg" alt="" className="img-fluid radius-image-full" />
                        <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                            <span className="video-play-icon">
                                <span className="fa fa-play"></span>
                            </span>
                        </a>
                        <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                            {/* <iframe src="https://www.youtube.com/embed/dCVEY88Fn1k" allow="autoplay; fullscreen" ></iframe> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 about-right-faq align-self">
                    <h5 className="title-small mb-1">Our story</h5>
                    <h3 className="title-big">Burgers! You won't Find Anywhere Else with Best Quality <span>Ingredients</span></h3>
                    <p className="mt-sm-4 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Non quae, consequatur voluptatem ad.</p>
                    <a className="btn btn-primary btn-style mt-md-5 mt-4 mr-2" href="about.html"> Read More </a>
                </div>
            </div>
        </div>
    </div>
</section>

     {/* components */}
        <CategoryProduct />

     {/* components */}
      <Feature />
     
<div className="middle py-5" id="call">
    <div className="container py-lg-3">
        <div className="welcome-left text-center py-md-5 py-3">
            <h3>The Right Ingredients
                for the Right Food. Eat Healthy, Delicious and Perfect Burgers From Our Hotel</h3>
            <h3 className="mt-4">Call us to order: <a href="tel:+1 123 456 789">+1 123 456 789</a> </h3>
            <a href="contact.html" className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2">Contact Us</a>
            <a href="#book" className="btn btn-style btn-outline-primary mt-sm-5 mt-4">Book a table</a>
        </div>
    </div>
</div>
<div className="w3l-gallery2" id="gallery">
    <div className="burger galleryks py-5">
      <div className="container py-lg-4 py-md-3">
        <h6 className="title-small text-center">Food Gallery</h6>
        <h3 className="title-big mb-lg-5 mb-4 text-center">Our Burger Gallery</h3>
        <div className="row no-gutters masonry">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g1.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="lion">
              <img src="assets/images/g1.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g2.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="camel">
              <img src="assets/images/g2.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g3.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="hippopotamus">
              <img src="assets/images/g3.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g4.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="koala">
              <img src="assets/images/g4.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g5.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="bear">
              <img src="assets/images/g5.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g6.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="rhinoceros">
              <img src="assets/images/g6.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g7.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="hippopotamus">
              <img src="assets/images/g7.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <a href="assets/images/g8.jpg" className="js-img-viwer d-block" data-caption="The Right Ingredients for the Right Food."
              data-id="koala">
              <img src="assets/images/g8.jpg" className="img-fluid radius-image-full" alt="burger gallery" />
              <div className="content-overlay"></div>
              <div className="content-details fadeIn-top">
                <span className="fa fa-plus" aria-hidden="true"></span>
                <h4>Delight your Best</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


<section className="w3l-reasons py-5" id="why">
    <div className="main-w3 py-lg-5 py-md-d py-2">
        <div className="container">
            <div className="title-content text-center">
                <h6 className="title-small">Why we are the best</h6>
                <h3 className="title-big">4 Reasons to Choose us</h3>
            </div>
            <div className="row main-cont-wthree-fea mt-5 pt-lg-4 text-center">
                <div className="col-lg-3 col-sm-6 grids-feature">
                    <a href="#url" className="icon"><span className="fa fa-cutlery"></span></a>
                    <h4><a href="#feature" className="title-head">Tasty Burgers</a></h4>
                    <p>Dolor et sed amet eget volutp elit libero. timpus sed elit nibh quis dui, nunc tortor sit amet.</p>
                </div>
                <div className="col-lg-3 col-sm-6 grids-feature mt-sm-0 mt-5">
                    <a href="#url" className="icon"><span className="fa fa-cogs"></span></a>
                    <h4><a href="#feature" className="title-head">Quality Products</a></h4>
                    <p>Dolor et sed amet eget volutp elit libero. timpus sed elit nibh quis dui, nunc tortor sit amet.</p>
                </div>
                <div className="col-lg-3 col-sm-6 grids-feature mt-lg-0 mt-sm-5 mt-5">
                    <a href="#url" className="icon"><span className="fa fa-users"></span></a>
                    <h4><a href="#feature" className="title-head">World's best Chef</a></h4>
                    <p>Dolor et sed amet eget volutp elit libero. timpus sed elit nibh quis dui, nunc tortor sit amet.</p>
                </div>
                <div className="col-lg-3 col-sm-6 grids-feature mt-lg-0 mt-sm-5 mt-5">
                    <a href="#url" className="icon"><span className="fa fa-motorcycle"></span></a>
                    <h4><a href="#feature" className="title-head">Fastest delivery</a></h4>
                    <p>Dolor et sed amet eget volutp elit libero. timpus sed elit nibh quis dui, nunc tortor sit amet.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="w3l-app-launch-4 py-5">
    <div id="app4-block" className="py-lg-5 py-md-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 app4-left-text">
                    <h5 className="title-small">Easy way to use mobile app</h5>
                    <h3 className="title-big">Download our mobile apps today</h3>
                    <p className="mt-3"> Suspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus
                        sapien. Proin a diam et dui fermentum molestie vel id neque. Donec sed tempus enim, 
                        a congue risus. euismod massa a quam interdum. </p>
                    <div className="download-btns mt-4 pt-lg-3">
                        <a href="#url"><img src="assets/images/appstore.png" className="radius-image" alt="" /></a>
                        <a href="#url"><img src="assets/images/googleplay.png" className="radius-image" alt="" /></a>
                    </div>
                    <span className="or"> or </span>
                    <div className="download-link">
                        <h5 className="mb-2">Enter your email to get download link</h5>
                        <form action="#" className="d-flex wrap-align">
                            <input type="email" placeholder="Enter email" />
                            <button type="submit">Get link</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 app4-right-image mt-lg-0 mt-md-5 mt-4">
                    <img src="assets/images/mobile.jpg" className="img-fluid radius-image-full" alt="App Device" />
                </div>
            </div>
        </div>
    </div>
</section>
      <Footer />   
      </>
     );
}

export default Home;