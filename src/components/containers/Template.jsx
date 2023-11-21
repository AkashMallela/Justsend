import React from "react";
import Leftbar from "./Leftbar";import { Outlet, useLocation } from "react-router-dom";
import '../../pages/Home/Home.scss'
import Templates from "../../pages/Home/templates";
import { templatesData } from "../../pages/Home/templatesData";

export default function Template(){
    const location = useLocation()
    const id = location.state.id;
    return(
        <div className="home">
        <Leftbar/>
        <Templates templateData={templatesData[id]}/>
        </div>
    )
}