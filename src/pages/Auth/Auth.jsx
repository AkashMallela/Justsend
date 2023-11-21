import React from "react";
import './Auth.scss'
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './umbrella_32.png'
import img from './Justsend.svg';
import * as userApi from '../../Api/useApi.js'
// import GoogleLogin from "react-google-login-ng";
// import { gapi } from "gapi-script";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

export default function Auth() {
    const navigate = useNavigate()
    // const login = useGoogleLogin({
    //     onSuccess : async (e) => {
    //         console.log('Success');
    //     }
    // })

    const onSuccess = async(e) =>{
        const data = await userApi.signIn(e.credential)
        console.log(data);
        if(data.data.token){
            navigate("/inbox")
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.user))
        }
    }

    return (
        <div className="auth">
            <nav className="auth-nav">
                <div className="auth-nav-title-div">
                    <Link className="auth-nav-logo" to='/'><img src={logo} alt="j" /></Link>
                    <Link className="auth-nav-title" to='/'><h1 className="auth-nav-title">JustSend</h1></Link>
                </div>
                <div className="auth-nav-btn-div">
                    {/* <Link to='/auth/login'><button className="auth-nav-signin-btn">Sign in</button></Link> */}
                </div>
            </nav>
            <div className="auth-main">
                <div className="auth-main-div">
                    <div className="auth-main-heading-div">
                        <h1 className="auth-main-heading">Secure, smart, and easy to use email</h1>
                        <p className="auth-main-sub-heading">Get more done with JustSend, faster and safe communication now made easy with JustSend.</p>
                    </div>
                    <div className="auth-main-btn-div">
                            <GoogleLogin onSuccess={onSuccess} onError={(err)=>console.log(err)}  />
                    </div>
                </div>
                <div className="auth-main-img">
                    <img src={img} alt="developer" />
                </div>
            </div>
        </div>
    )
}