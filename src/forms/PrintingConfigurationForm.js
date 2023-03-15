import React, {Component} from "react";
import {useRef, useState} from 'react';


class PrintingConfigurationForm extends Component{
    constructor(props) {
        super(props);
        this.printTest = this.printTest.bind(this);
        this.printTextRef = React.createRef(null);
    }
    printTest(){
        const data = new FormData();
        data.append("message", this.printTextRef.current.value);

        fetch(`/api/printing/test`, {
            method: 'post',
            body: data
        });
    }
    render() {
        return (
            <div className="">
                <div className="page-title">
                    <div className="title_left">
                        <h3><i className="fa fa-print"></i>Printing configuration</h3>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="row">
                    <div className="col-md-12 col-sm-12  ">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Printing</h2>
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
                                                <label className="col-form-label col-md-3 col-sm-3">Baud rate</label>
                                                <div className="col-md-9 col-sm-9  form-group has-feedback">
                                                    <input type="text" className="form-control has-feedback-left" placeholder="9600"/>
                                                    <span className="fa fa-forward form-control-feedback left"
                                                          aria-hidden="true"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ln_solid"></div>
                                        <div className="form-group row">
                                            <div className="col-md-9 col-sm-9  offset-md-3">
                                                <button type="button" className="btn btn-primary">Cancel</button>
                                                <button type="submit" className="btn btn-success">Save</button>
                                            </div>
                                        </div>

                                    </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="row">
                    <div className="col-md-12 col-sm-12  ">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Testing</h2>
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
                                <div className="form-group row">
                                    <div className="col-md-3 col-sm-3 me-5">
                                        <label className="col-form-label col-md-3 col-sm-3">Baud rate</label>
                                        <div className="col-md-6 col-sm-6  form-group has-feedback">
                                            <input ref={this.printTextRef} type="text" className="form-control has-feedback-left" defaultValue="My paragraph is going to be printed!!!"/>
                                            <span className="fa fa-forward form-control-feedback left"
                                                  aria-hidden="true"></span>
                                        </div>
                                        <div className="col-md-3 col-sm-3">
                                            <button type="button" className="btn btn-primary" onClick={this.printTest}>Print text</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PrintingConfigurationForm;