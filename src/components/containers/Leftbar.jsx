import React from "react";
import { FaBars, FaUser, FaPlus, FaFolder } from "react-icons/fa";
import './Leftbar.scss';
import { Link } from 'react-router-dom';
import logo3 from './umbrella_32.png'


export default function Leftbar() {


    return (
        <div className="leftbar">
            <div className="leftbar-options">
                <Link to='/inbox'>
                <img className="leftbar-title-img" src={logo3} alt="logo3" />
                </Link>
                <Link to='/inbox' className="leftbar-title">
                <h1 className="leftbar-title">JustSend</h1>
                </Link>
            </div>
            <div className="leftbar-newchat">
                <Link className="leftbar-links" to='/compose'><FaPlus size={22} color="#164863" /></Link>
                <Link className="leftbar-links" to='/compose' >Compose Mail</Link>
            </div>
            <div className="leftbar-folder">
                <div className="leftbar-folder-options">
                    <Link className="leftbar-folder-links" to='/inbox' >Sent Mail</Link>
                    <Link className="leftbar-folder-links" to='/sent' >Inbox</Link>
                </div>
            </div>
        </div>
    )
}