import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LogoWhite from "../../../Assets/Images/logo-white.png";
import bgImgNoti from "../../../Assets/Images/bg-1.jpg";
import SvgIcon from "../../Common/SvgIcon";
import "./style.css";

class HeaderMobile extends PureComponent {

    render() {
        const { fullName, avatar } = this.props;

        return (
            <div id="kt_header_mobile" className="header-mobile header-mobile-fixed align-items-center">
                <Link to="/">
                    <img alt="Logo" src={LogoWhite}
                         className="logo-default max-h-50px" />
                </Link>
                <div className="d-flex align-items-center">
                    <div className="dropdown">
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon btn-icon-white btn-light-style
                        		btn-dropdown btn-lg mr-1 pulse pulse-white">
                                <i className="flaticon2-bell-2" />
                                <span className="pulse-ring" />
                            </div>
                        </div>
                        <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                            <form>
                                <div className="d-flex flex-column pt-4 bgi-size-cover bgi-no-repeat rounded-top border-bottom" style={{backgroundImage: `url(${bgImgNoti})`}}>
                                    <h4 className="d-flex flex-center rounded-top">
                                        <span className="text-white">Thông báo</span>
                                    </h4>
                                    <ul className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success px-8" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active show" data-toggle="tab" href="#my-request-process">Yêu cầu đang xử lý</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#my-request-finish">Yêu cầu đã hoàn tất</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active show p-3" id="my-request-process" role="tabpanel">
                                        <div className="scroll pr-3 mr-n3" data-scroll="true" data-height="300" data-mobile-height="200">
                                            <div className="d-flex align-items-center p-4 bg-hover-light">
                                                <div className="symbol symbol-40 symbol-light-primary mr-5">
													<span className="symbol-label">
														<span className="svg-icon svg-icon-lg svg-icon-blue">
															<SvgIcon>
																<rect x="0" y="0" width="24" height="24" />
																<path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
																<rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
															</SvgIcon>
														</span>
													</span>
                                                </div>
                                                <div className="d-flex flex-column font-weight-bold">
                                                    <a href="/#" className="text-dark text-hover-primary mb-1 font-size-lg">Yêu cầu cài đặt phần mềm</a>
                                                    <span className="text-muted">Đã gửi vào lúc: 9 giờ 30 phút</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center p-4 bg-hover-light">
                                                <div className="symbol symbol-40 symbol-light-warning mr-5">
													<span className="symbol-label">
														<span className="svg-icon svg-icon-lg svg-icon-warning">
															<SvgIcon>
																<rect x="0" y="0" width="24" height="24" />
																<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
															</SvgIcon>
														</span>
													</span>
                                                </div>
                                                <div className="d-flex flex-column font-weight-bold">
                                                    <a href="/#" className="text-dark-75 text-hover-primary mb-1 font-size-lg">Yêu cầu Phân quyền hệ thống</a>
                                                    <span className="text-muted">Đã gửi vào lúc: 8 giờ 30 phút</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane p-3" id="my-request-finish" role="tabpanel">
                                        <div className="scroll pr-3 mr-n3" data-scroll="true" data-height="300" data-mobile-height="200">
                                            <div className="d-flex align-items-center p-4 bg-hover-light">
                                                <div className="symbol symbol-40 symbol-light-primary mr-5">
													<span className="symbol-label">
														<span className="svg-icon svg-icon-lg svg-icon-blue">
															<SvgIcon>
																<rect x="0" y="0" width="24" height="24" />
																<path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
																<rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
															</SvgIcon>
														</span>
													</span>
                                                </div>
                                                <div className="d-flex flex-column font-weight-bold">
                                                    <a href="/#" className="text-dark text-hover-primary mb-1 font-size-lg">Yêu cầu cài đặt phần mềm</a>
                                                    <span className="text-muted">Đã hoàn tất vào lúc: 9 giờ 30 phút</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center p-4 bg-hover-light">
                                                <div className="symbol symbol-40 symbol-light-warning mr-5">
													<span className="symbol-label">
														<span className="svg-icon svg-icon-lg svg-icon-warning">
															<SvgIcon>
																<rect x="0" y="0" width="24" height="24" />
																<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
															</SvgIcon>
														</span>
													</span>
                                                </div>
                                                <div className="d-flex flex-column font-weight-bold">
                                                    <a href="/#" className="text-dark-75 text-hover-primary mb-1 font-size-lg">Yêu cầu Phân quyền hệ thống</a>
                                                    <span className="text-muted">Đã hoàn tất vào lúc: 8 giờ 30 phút</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-center" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="btn btn-icon btn-danger_style btn-icon-mobile w-auto d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle_mobile">
                        <span className="text-white font-weight-bolder d-md-inline mr-1">Hi,</span>
                        <span className="text-white font-weight-bolder d-md-inline mr-3">{fullName}</span>
                        <span className="symbol symbol-45 symbol-circle">
                            <span className="symbol-label" style={{backgroundImage: `url(${avatar})`}} />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderMobile.propTypes = {
    fullName: PropTypes.string,
    avatar: PropTypes.string
};

export default HeaderMobile;
