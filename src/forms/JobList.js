import React, {Component} from "react";

class JobList extends Component{
    render() {
        return (

                <div className="">
                    <div className="page-title">
                        <div className="title_left">
                            <h3>Job list Page</h3>
                        </div>

                        <div className="title_right">
                            <div className="col-md-5 col-sm-5   form-group pull-right top_search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                      <button className="btn btn-default" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12  ">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Plain Page</h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                               aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content">
                                    Add content to the page ...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default JobList;