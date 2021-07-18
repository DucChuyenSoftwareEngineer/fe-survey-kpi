import React, { PureComponent } from "react";
import "./style.css";

class Footer extends PureComponent {

    render() {
        return (
            <div className="footer bg-blue-style py-4 d-flex flex-lg-column" id="kt_footer">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="text-white order-2 order-md-1">
                        <span className="font-weight-bold mr-2">2020©.</span>
                        <a href="https://apps.vietcapitalbank.com.vn/"
                           rel="noopener noreferrer"
                           target="_blank"
                           className="text-white text-hover-primary">Bản quyền
                            thuộc về Ngân hàng TMCP Bản Việt.</a>
                    </div>
                    <div className="nav nav-dark order-1 order-md-2">
                        <a href="https://www.vietcapitalbank.com.vn/"
                           rel="noopener noreferrer"
                           target="_blank"
                           className="nav-link text-white pr-3 pl-0">Contact</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
