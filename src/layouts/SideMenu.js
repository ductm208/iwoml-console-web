import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component{
    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title">
                        <Link to="/" className="site_title"><i className="fa fa-print"></i> <span>IWOML console</span></Link>
                    </div>

                    <div className="clearfix"></div>

                    {/*sidebar menu */}
                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <ul className="nav side-menu">
                                <li><a><i className="fa fa-gear"></i> Configuration <span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><Link to="/app/network">Network</Link></li>
                                        <li><Link to="/app/MQTT">MQTT</Link></li>
                                        <li><Link to="/app/printing">Printing</Link></li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-table"></i> Printing <span
                                    className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><Link to="/app/jobs">Jobs</Link></li>
                                        <li><a href="/app/tables_dynamic.html">Table Dynamic</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/*/sidebar menu */}


                </div>
            </div>
        )
    }

}

export default Footer;