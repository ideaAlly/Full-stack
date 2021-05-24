import React from "react"
import "./style.css"
import "./Nav.css"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white bg-grey" >
        {/* <a className="navbar-brand text-success" href="#">Navbar</a> */}

        <div id="navbar" className="collapse navbar-collapse" style={{paddingTop:"2px",paddingBottom:"2px",paddingLeft:"5px",
            paddingRight:"30px"}}>
          <ul className="navbar-nav mr-auto">
            <li style={{paddingLeft:"45px"}}>
                <a className="navbar-brand navbar-brand-logo" href="#">
                    
                    <div className="logo">
                        <img src="Avatar.png" alt="profile"/>
                    </div>
                    {/* <div className="brand"> Creative Tim </div> */}
                </a>     
            </li> 

            <form className="form-inline my-2 my-lg-0" style={{paddingLeft:"30px"}}>
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for a Partner or Domain"
                aria-label="Search"
                style={{width:"45rem",borderRadius:"5px"}}
                
                />
            
            </form>

            {/* <div class="search">
              <form action="#">
                  <input type="text"
                      placeholder=" Search Courses"
                      name="search" />
                  <button>
                      <i className="fa fa-search"
                          style={{fontSize: "18px"}}>
                      </i>
                  </button>
              </form>
            </div> */}


            {/* <button className="btn btn-outline-success my-2 my-sm-0" className="button" type="submit">
              <a href="#">

              </a>
            </button>  */}

            <button className="btn btn-outline-success my-2 my-sm-0" className="button" type="submit" style={{borderRadius:"40px"}}>
              <i className="fa fa-search" style={{fontSize: "18px"}} />
              
            </button>


             {/* <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                  <div className="logo">
                      <img src="search.png" alt="srch"/>
                  </div>
              </a>
               
            </li> */}

            <li className="nav-item active" style={{paddingLeft:"200px"}}>
              <a className="nav-link text-white" href="#">
                  <div className="logo">
                      <img src="msges.png" alt="msg"/>
                  </div>
              </a>
               
            </li>

            <li className="nav-item active" style={{paddingLeft:"30px"}}>
              <a className="nav-link text-white" href="#">
                  <div className="logo" >
                      <img src="notification.jpg" alt="Notification"/>
                  </div>
              </a>
               
            </li>
            <li className="nav-item active" style={{paddingLeft:"30px"}}>
              <a className="nav-link text-white" href="#">
                  <div className="logo">
                      <img src="people.png" alt="User"/>
                  </div>
              </a>
               
            </li>
            
          </ul>
          
        </div>
      </nav>



    )
}


export default NavBar;