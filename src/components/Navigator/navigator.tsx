import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/lg.png";
import { ShoppingCart } from "@mui/icons-material";
import "../Navigator/navigator.css";
import { StoreContext } from "../../context/StoreContext";
import { Badge } from "@mui/material";

function Navigator() {
  // dark more
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { basket } = useContext(StoreContext);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        setIsDarkMode(true);
      }
    }
  }, []);

  // Basket Counter
  const itemCount = basket?.basketItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  //function switch dark more
  function switchTheme(event: any) {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }

  return (
    <>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke px-0">
            <h1>
              <a className="navbar-brand" href="/">
                <img src={logo} alt="burger logo" width="50px" /> Burger Bun
              </a>
            </h1>
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item @@about__active">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item @@menu__active">
                  <Link className="nav-link" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item @@contact__active">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item @@basket__active">
                  <Link className="nav-link" to="/basket">
                    <Badge badgeContent={itemCount} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </Link>
                </li>

                <li className="nav-item @@basket__active">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>

                <li className="nav-item @@basket__active">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                {/* <div className="search-right">
                  <a href="#search" title="search">
                    <span className="fa fa-search" aria-hidden="true"></span>
                  </a>
                  <div id="search" className="pop-overlay">
                    <div className="popup">
                      <h4 className="mb-3">Search here</h4>
                      <form
                        action="error.html"
                        method="GET"
                        className="search-box"
                      >
                        <input
                          type="search"
                          placeholder="Enter Keyword"
                          name="search"
                        />
                        <button
                          type="submit"
                          className="btn btn-style btn-primary"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                    <a className="close" href="#close">
                      ×
                    </a>
                  </div>
                </div> */}
              </ul>
            </div>
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch">
                    {/* dark more  */}
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={switchTheme}
                      className="theme-switch"
                    />
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
