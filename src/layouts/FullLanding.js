import React, {Component} from "react";
import {Outlet} from "react-router-dom";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

class FullLanding extends Component{
    render() {
        return (
            <div className="main_container">
                <SideMenu/>
                <TopMenu/>
                <div className="right_col" role="main">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default FullLanding;