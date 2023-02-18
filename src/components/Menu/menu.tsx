import Navigator from "../Navigator/navigator";
import '../Menu/menu.css';
import Footer from "../Footer/footer";

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
            <div className="grids-area-hny main-cont-wthree-fea row">
                <div className="col-lg-3 col-md-6 grids-feature">
                    <div className="area-box are-box__custom">
                        <div className="img_custom">
                          <img  className="img_custom" src="./assets/images/g1.jpg" alt="" />
                        </div>
                         <div className="title_custom">
                           <h3>Humburger</h3>
                           <h4>15.000d</h4>
                          </div>
                          <p>lorem ipsum dolor sit amet, consectetur adip</p>
                          <div>
                            <button className="button_custom">add</button>
                          </div>
                    </div>

                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">10%</span>
                      <span className="home-product-item__sale-off-lable">Giam</span>
                  </div>
                    
                </div>
                <div className="col-lg-3 col-md-6 grids-feature mt-md-0 mt-4">
                    <div className="area-box">
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
                    <div className="area-box">
                        
                    </div>
                </div>
    
                <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
                  <div className="area-box">
                      
                  </div>
              </div>
            </div>
        </div>
   

   <div className="container py-lg-5 py-md-4 py-2 container_custom">
    <div className="mb-3 mx-3">
      <h2>title</h2>
     </div>
 <div className="grids-area-hny main-cont-wthree-fea row">
     <div className="col-lg-3 col-md-6 grids-feature">
         <div className="area-box are-box__custom">
             <div className="img_custom">
               <img  className="img_custom" src="./assets/images/g1.jpg" alt="" />
             </div>
              <div className="title_custom">
                <h3>Humburger</h3>
                <h4>15.000d</h4>
               </div>
               <p>lorem ipsum dolor sit amet, consectetur adip</p>
               <div>
                 <button className="button_custom">add</button>
               </div>
         </div>
     </div>
     <div className="col-lg-3 col-md-6 grids-feature mt-md-0 mt-4">
         <div className="area-box">
             
         </div>
     </div>
     <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
         <div className="area-box">
             
         </div>
     </div>

     <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
       <div className="area-box">
           
       </div>
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