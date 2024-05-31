
import React, { useState, useContext } from "react";
import profilePic from '../Asset/login-icon.png'
import logoImage from '../Asset/logo.webp'
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { AuthContext } from "../../AuthContext";
import './Navbar.css'

const Navbar = () => {

    const [menu,setMenu] = useState("consultant")

    // const [showPopper, setShowPopper] = useState(false);

    // const togglePopper = () => {
    //     setShowPopper(!showPopper);
    // };

    // const hidePopper = () => {
    //     setShowPopper(false);
    // };
    
    const { user, logout } = useContext(AuthContext);
    // const { logout } = useAuthNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div className="nav">            
            <div><Link to="/"><img className="nav-logo" src={logoImage} alt="logImg" /></Link></div>                
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("consultant")}}>Fashion Consultant {menu==="consultant"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("collections")}}>Collection {menu==="collections"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("calendar")}}>Calendar {menu==="calendar"?<hr/>:<></>}</li>
            </ul>                        
            <div onClick={handleDropdownToggle}>
            {/* <div onClick={togglePopper}>{isLogin ? "Đăng ký" :<img className='profile-image' src={profilePic}/>}</div>
            <div className={`popper-container ${showPopper ? "show" : ""}`}
              onMouseLeave={hidePopper} // Ẩn popper khi chuột rời khỏi popper container
            >
              <Link to="/login" className="popper-item">
                Đăng nhập
              </Link>
              <Link to="/register" className="popper-item">
                Đăng ký
              </Link>
              <Link to="/help" className="popper-item">
                Trợ giúp
              </Link></div>
            </div> */}
            <img className='profile-image' src={profilePic}/>
            {dropdownOpen && (
                <DropdownMenu>
                    {user ? (
                        <>
                        {/* <span className="dropdown-item">Welcome, {user}</span> */}                                      
                        <Link to="/profile" className="dropdown-item">Trang cá nhân</Link>                            
                        {/* <li className="popper-item">Trang cá nhân</li>                         */}
                        <li onClick={logout} className="popper-item">Đăng xuất</li>                        
                        </>
                    ) : ( 
                        <> 
                            <Link to="/login" className="dropdown-item">Đăng nhập</Link>                            
                            <Link to="/register" className="dropdown-item">Đăng ký</Link>
                        </>
                    )}
                </DropdownMenu>
            )}
        </div>
        </div>
    );
}

export default Navbar;
