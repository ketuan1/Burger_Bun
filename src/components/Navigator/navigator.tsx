import logo from '../../image/lg.png';
import '../Navigator/navigator.css';

function Navigator() {
    return (  
        <>
              <header id="site-header"  className= "fixed-top" >
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke px-0">
                  <h1>
                    <a className="navbar-brand" href="index.html">
                  <img src={logo} alt="burger logo" width="50px" /> Burger Bun
                  </a>
                </h1>
          <button  className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
              data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item @@about__active">
                      <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item @@menu__active">
                      <a className="nav-link" href="menu.html">Menu</a>
                  </li>
                  <li className="nav-item @@menu__active">
                    <a className="nav-link" href="menu_aptech.html">Menu Aptech</a>
                </li>
                  <li className="nav-item @@contact__active">
                      <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                  <div className="search-right">
                      <a href="#search" title="search"><span className="fa fa-search" aria-hidden="true"></span></a>
                      <div id="search" className="pop-overlay">
                          <div className="popup">
                              <h4 className="mb-3">Search here</h4>
                              <form action="error.html" method="GET" className="search-box">
                                  <input type="search" placeholder="Enter Keyword" name="search" />
                                  <button type="submit" className="btn btn-style btn-primary">Search</button>
                              </form>

                          </div>
                          <a className="close" href="#close">×</a>
                      </div>
                  </div>
              </ul>
          </div>
          <div className="mobile-position">
              <nav className="navigation">
                  <div className="theme-switch-wrapper">
                      <label className="theme-switch">
                          <input type="checkbox" id="checkbox" />
                          <div className="mode-container">
                              <i className="gg-sun"></i>
                              <i className="gg-moon"></i>
                          </div>
                      </label>
                  </div>
              </nav>
          </div>
      </nav>
  </div>
</header>
        </>
    );
}

export default Navigator;