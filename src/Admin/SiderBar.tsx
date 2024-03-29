import { Link } from "react-router-dom";
import Test from "./Test";
import "./Admin.css";

function SiderBar() {
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <p className="logo">
          <span>Admin</span>Burger Bun
        </p>
        <Link to="/admin/test" className="icon-a">
          {/* <i className="fa fa-dashboard icons"></i> &nbsp;&nbsp;Dashboard */}
          Test
        </Link>
        <Link to="/customers" className="icon-a">
          <i className="fa fa-users icons"></i> &nbsp;&nbsp;Customers
        </Link>
        <Link to="/admin/products" className="icon-a">
          <i className="fa fa-list icons"></i> &nbsp;&nbsp; Products
        </Link>
        <Link to="/order" className="icon-a">
          <i className="fa fa-shopping-bag icons"></i> &nbsp;&nbsp;Orders
        </Link>
        <Link to="/admin/categories" className="icon-a">
          <i className="fa fa-tasks icons"></i> &nbsp;&nbsp;Category
        </Link>
        <Link to="/account" className="icon-a">
          <i className="fa fa-user icons"></i> &nbsp;&nbsp;Accounts
        </Link>
        <Link to="/tasks" className="icon-a">
          <i className="fa fa-list-alt icons"></i> &nbsp;&nbsp;Tasks
        </Link>
      </div>
    </>
  );
}

export default SiderBar;
