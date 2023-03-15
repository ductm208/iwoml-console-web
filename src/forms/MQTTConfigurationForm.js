import React, {Component} from "react";

class MQTTConfigurationForm extends Component{
    render() {
        return (
            <div className="">
                <div className="page-title">
                    <div className="title_left">
                        <h3><i className="fa fa-server"></i> Configuration Page</h3>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="row">
                    <div className="col-md-12 col-sm-12  ">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>MQTT credentials</h2>
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
                                    <form className="form-label-left input_mask">
                                        <div className="form-group row">
                                            <div className="col-md-3 col-sm-3 me-5">
                                                <label className="col-form-label col-md-3 col-sm-3">Server</label>
                                                <div className="col-md-9 col-sm-9  form-group has-feedback">
                                                    <input type="text" className="form-control has-feedback-left" placeholder="abc.xyzmqtt.com"/>
                                                    <span className="fa fa-globe form-control-feedback left"
                                                          aria-hidden="true"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 me-5">
                                                <label className="col-form-label col-md-3 col-sm-3 text-right">User account</label>
                                                <div className="col-md-9 col-sm-9  form-group has-feedback">
                                                    <input type="text" className="form-control has-feedback-left" placeholder="User account"/>
                                                        <span className="fa fa-user form-control-feedback left"
                                                              aria-hidden="true"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 me-5">
                                                <label className="col-form-label col-md-3 col-sm-3 text-right">Password</label>
                                                <div className="col-md-9 col-sm-9  form-group has-feedback">
                                                    <input type="text" className="form-control has-feedback-left" placeholder="Password"/>
                                                    <span className="fa fa-lock form-control-feedback left"
                                                          aria-hidden="true"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 me-5">
                                                <label className="col-form-label col-md-3 col-sm-3 text-right">Sub topic</label>
                                                <div className="col-md-9 col-sm-9  form-group has-feedback">
                                                    <input type="text" className="form-control has-feedback-left" placeholder="Sub topic"/>
                                                    <span className="fa fa-inbox form-control-feedback left"
                                                          aria-hidden="true"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ln_solid"></div>
                                        <div className="form-group row">
                                            <div className="col-md-9 col-sm-9  offset-md-3">
                                                <button type="button" className="btn btn-primary">Cancel</button>
                                                <button className="btn btn-primary" type="button">Echo test</button>
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MQTTConfigurationForm;