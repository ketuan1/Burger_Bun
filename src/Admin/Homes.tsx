import SiderBar from "./SiderBar";
import "./Admin.css";

function Homes() {
  return (
    <>
      <SiderBar />
      <div id="main">
        <div className="head">
          <div className="col-div-6">
            <span className="nav nav-custom">&#9776; Dashboard</span>
            <span className="nav2 nav-custom">&#9776; Dashboard</span>
          </div>

          <div className="col-div-6">
            <div className="profile">
              <img src="images/user.png" className="pro-img" alt="" />
              <p>
                Manoj Adhikari <span>UI / UX DESIGNER</span>
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="clearfix"></div>
        <br />

        <div className="col-div-3">
          <div className="box">
            <p>
              67
              <br />
              <span>Customers</span>
            </p>
            <i className="fa fa-users box-icon"></i>
          </div>
        </div>
        <div className="col-div-3">
          <div className="box">
            <p>
              88
              <br />
              <span>Projects</span>
            </p>
            <i className="fa fa-list box-icon"></i>
          </div>
        </div>
        <div className="col-div-3">
          <div className="box">
            <p>
              99
              <br />
              <span>Orders</span>
            </p>
            <i className="fa fa-shopping-bag box-icon"></i>
          </div>
        </div>
        <div className="col-div-3">
          <div className="box">
            <p>
              78
              <br />
              <span>Tasks</span>
            </p>
            <i className="fa fa-tasks box-icon"></i>
          </div>
        </div>
        <div className="clearfix"></div>
        <br />
        <br />
        <div className="col-div-8">
          <div className="box-8">
            <div className="content-box">
              <p>
                Top Selling Projects <span>Sell All</span>
              </p>
              <br />
              <table>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="col-div-4">
          <div className="box-4">
            <div className="content-box">
              <p>
                Total Sale <span>Sell All</span>
              </p>

              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle"> 70% </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Homes;
