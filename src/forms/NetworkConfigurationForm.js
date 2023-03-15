import React, {Component} from "react";
import Alert from 'react-bootstrap/Alert';


class NetworkConfigurationForm extends Component{

    constructor(props) {
        super(props);
        this.saveNetworkConfigs = this.saveNetworkConfigs.bind(this);
        this.primaryAptNameRef = React.createRef(null);
        this.primaryAptPasswordRef = React.createRef(null);
        this.secondaryAptNameRef = React.createRef(null);
        this.secondaryAptPasswordRef = React.createRef(null);
        this.state = {
            primaryAptName: '',
            primaryAptPassword: '',
            secondaryAptName: '',
            secondaryAptPassword: '',
            showSuccessModal: false,
            showSuccessMessage: '',
        };

    }

    componentDidMount(){
        fetch(`/api/network/loadSettings`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((responseData) => responseData.json())
            .then(data => {
                this.setState({
                    primaryAptName: data.primaryApt,
                    primaryAptPassword: data.primaryPwd,
                    secondaryAptName: data.secondApt,
                    secondaryAptPassword: data.secondPwd,
                });
        });
    }

    saveNetworkConfigs(){
        this.setState({
            showSuccessModal: false,
            showSuccessMessage: '',
        });
        const data = new FormData();
        data.append("primaryApt", this.primaryAptNameRef.current.value);
        data.append("primaryPwd", this.primaryAptPasswordRef.current.value);
        data.append("secondApt", this.secondaryAptNameRef.current.value);
        data.append("secondPwd", this.secondaryAptPasswordRef.current.value);

        fetch(`/api/network/saveSettings`, {
            method: 'post',
            body: data
        }).then((response) => response.text())
        .then(reponseData=>{
            console.log(reponseData);
            this.setState({
                showSuccessModal: true,
                showSuccessMessage: reponseData,
            });
        });
    }

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
                                <h2>Network access points</h2>
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
                                            <Alert show={this.state.showSuccessModal} variant="success">
                                                <p className="mb-0">
                                                    {this.state.showSuccessMessage}
                                                </p>
                                            </Alert>
                                            <div className="col-md-6 col-sm-6">
                                                <h4>Primary access point</h4>
                                                <label className="col-form-label col-md-4 col-sm-4">Name</label>
                                                <div className="col-md-8 col-sm-8  form-group has-feedback">
                                                    <input ref={this.primaryAptNameRef} type="text" className="form-control has-feedback-left" placeholder="primary-apt" defaultValue={this.state.primaryAptName}/>
                                                    <span className="fa fa-wifi form-control-feedback left"
                                                          aria-hidden="true"></span>
                                                </div>
                                                <label className="col-form-label col-md-4 col-sm-4 text-right">Password</label>
                                                <div className="col-md-8 col-sm-8  form-group has-feedback">
                                                    <input ref={this.primaryAptPasswordRef} type="text" className="form-control has-feedback-left" placeholder="password" defaultValue={this.state.primaryAptPassword}/>
                                                        <span className="fa fa-lock form-control-feedback left"
                                                              aria-hidden="true"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <h4>Secondary access point</h4>
                                                <label className="col-form-label col-md-4 col-sm-4">Name</label>
                                                <div className="col-md-8 col-sm-8  form-group has-feedback">
                                                    <input ref={this.secondaryAptNameRef} type="text" className="form-control has-feedback-left" placeholder="secondary-apt" defaultValue={this.state.secondaryAptName}/>
                                                    <span className="fa fa-wifi form-control-feedback left"
                                                          aria-hidden="true"></span>
                                                </div>
                                                <label className="col-form-label col-md-4 col-sm-4 text-right">Password</label>
                                                <div className="col-md-8 col-sm-8  form-group has-feedback">
                                                    <input ref={this.secondaryAptPasswordRef} type="text" className="form-control has-feedback-left" placeholder="password" defaultValue={this.state.secondaryAptPassword}/>
                                                    <span className="fa fa-lock form-control-feedback left"
                                                          aria-hidden="true"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ln_solid"></div>
                                        <div className="form-group row">
                                            <div className="col-md-12 col-sm-12">
                                                <button type="button" className="btn btn-primary" onClick={this.saveNetworkConfigs}>Save</button>
                                                <button type="button" className="btn btn-dark">Cancel</button>
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

export default NetworkConfigurationForm;