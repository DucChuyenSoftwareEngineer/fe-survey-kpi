import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import userImg from "../../../Assets/Images/user2-160x160.jpg";

class TopBar extends PureComponent {

    render() {
        const { fullName, avatar } = this.props;

        return (
            <div className="topbar pr-0">
                <div className="dropdown">
                    <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                        <div className="btn btn-icon btn-icon-white btn-light-style btn-dropdown btn-lg mr-1 pulse pulse-white">
                            <i className="flaticon2-bell-2" />
                            <span className="pulse-ring" />
                        </div>
                    </div>
                    <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                        <form>
                            <div className="tab-content">
                                <div className="d-flex flex-center" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="topbar-item">
                    <div className="btn btn-icon btn-danger_style btn-icon-mobile w-auto h-auto d-flex align-items-center btn-lg px-1"
                         id="kt_quick_user_toggle_desktop">
                        <span className="text-white font-weight-bolder d-none d-md-inline mr-1">Hi,</span>
                        <span className="text-white font-weight-bolder d-none d-md-inline mr-3">{fullName}</span>
                        <span className="symbol symbol-50 symbol-circle">
                            <span className="symbol-label" style={{backgroundImage: `url(${avatar || userImg})`}} />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

TopBar.propTypes = {
    fullName: PropTypes.string,
    avatar: PropTypes.string
};

export default TopBar;
