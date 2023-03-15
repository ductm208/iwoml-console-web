import React, {Component} from "react";

class Footer extends Component{
    render() {
        return (
            <footer>
                <div className="pull-right">
                    IWOML printing console - UI powered by <a href="https://github.com/ColorlibHQ/gentelella">Gentelella</a>
                </div>
                <div className="clearfix"></div>
            </footer>
        )
    }
}

export default Footer;