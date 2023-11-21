import React from "react";
import { Link } from "react-router-dom";
import './Auth.scss'

export default function Navbar(){
    return(
        <nav className="auth-nav">
                <div className="auth-nav-title-div">
                <img src="./umbrella_6143012.png" size={20} alt="j" />
                    {/* <FaUmbrella className="auth-nav-title-icon" size={30} /> */}
                    <h1 className="auth-nav-title">JustSend</h1>
                </div>
                <div className="auth-nav-btn-div">
                    <Link to='/login'><button className="auth-nav-signin-btn">Sign in</button></Link>
                    <Link to='/login'><button className="auth-nav-create-btn">Create An Account</button></Link>
                </div>
            </nav>
    )
}