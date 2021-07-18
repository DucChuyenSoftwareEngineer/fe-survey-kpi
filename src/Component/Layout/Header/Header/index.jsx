import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TopBar from "../TopBar";
import SvgIcon from "../../../Common/SvgIcon";
import LogoDark from "../../../../Assets/Images/logo-dark.png";
import BgLogin from "../../../../Assets/Images/bg-login.png";
import "./style.css";

class Header extends PureComponent {

    render() {
        const { fullName, avatar } = this.props;

        return (
            <div id="kt_header" className="header header-fixed">
                <div className="container d-flex">
                    <div className="header-logo-portal">
                        <div className="d-none d-lg-flex align-items-center">
                            <button type="button"
                                    className="btn btn-icon aside-toggle ml-n3 mr-10"
                                    id="kt_aside_desktop_toggle">
								<span className="svg-icon svg-icon-xxl svg-icon-dark">
									<SvgIcon>
										<rect x="0" y="0" width="24" height="24" />
										<rect fill="#000000" opacity="0.3" x="4" y="5" width="16" height="2" rx="1" />
										<rect fill="#000000" opacity="0.3" x="4" y="13" width="16" height="2" rx="1" />
										<path d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z" fill="#000000" />
									</SvgIcon>
								</span>
                            </button>
                            <Link to="/">
                                <img alt="Logo" src={LogoDark}
                                     className="logo-sticky max-h-75px mr-auto" />
                            </Link>
                            <div className="tem-banner max-h-80px ml-auto my-auto"
                                 style={{
                                     backgroundImage: `url(${BgLogin})`,
                                     backgroundPosition: 'top right',
                                     backgroundRepeat: 'no-repeat'
                                 }} />
                        </div>
                    </div>
                    <div className="header-topbar d-flex" style = {{backgroundColor:"#133886"}}>
                        <TopBar fullName={fullName} avatar={avatar} />
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    fullName: PropTypes.string,
    avatar: PropTypes.string
};

export default Header;
