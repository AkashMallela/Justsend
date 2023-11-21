import React, { useEffect, useState } from "react";
import Leftbar from "./Leftbar";import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import './inbox.scss'
import { getmails } from "../../Api/emailApi";

export default function Inbox(){

    const [mails, setMails ] = useState([]);
    const navigate = useNavigate();
    const [filteredMails,setFilteredMails] = useState([])
    const [search,setSearch] = useState("");
    const filterMails = (mails,q) => {
        console.log(mails,q);
        return mails.filter(mail => (mail.templateAlias.includes(q) || mail.to.includes(q)));
    }
    const handleChange = (e) =>{
        const q = e.target.value;
        setFilteredMails(filterMails(mails,q));
        setSearch(q);
    }
    const mailsToRender = filteredMails.length > 0 ? filteredMails:mails;

    useEffect(()=>{
        const fetchMail = async() => {
            const response = await getmails()
            console.log(response);
            setMails(response.data.sentMails);
        }
        fetchMail();
    },[])

    const logOut = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }

    return(
        <div className="inbox">
        <Leftbar/>
        <div className="main">
            <div className="main-header">
                <div className="main-header-form">
                    <label className="main-header-form-search-icon"><FaSearch size={20} /></label>
                    <input value={search} onChange={handleChange} className="main-header-form-input" type="search" placeholder="Search Mail" />
                </div>
                <button onClick={logOut} className="logout-btn">Log out</button>
            </div>
            <div className="main-content">
                <div>
                    <div className="main-content-header">
                    <h1>Recieved Mails</h1>
                </div>
                <div className="main-content-mails">
                    {
                        mailsToRender.map((item, key) => {
                            return (
                                <div key={key} className="main-content-mails-div">
                                    <div className="main-content-mails-2">
                                    <div className="main-content-mails-name">
                                    <h1>{item.templateAlias}</h1>
                                    </div>
                                    <div className="main-content-mails-subject">
                                    <h2>{item.to}</h2>
                                    </div>
                                    <div className="main-content-mails-message">
                                    <p>{(new Date(item.submittedAt)).toISOString()}</p>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}