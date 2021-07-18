import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SvgIcon from "../../../Common/SvgIcon";
import { USER_INFO } from "../../../../Constant/Message";
import userImg from "../../../../Assets/Images/user2-160x160.jpg";

class QuickUser extends PureComponent {

    logout = e => {
        const event = this.props.onLogout;

        e.preventDefault();

        if (event) {
            event();
        }
    };

    render() {
        const { userInfo, avatar } = this.props;

        return (
            <>
                <div id="kt_quick_user" className="offcanvas offcanvas-right p-7"
                     style={{ height: "max-content" }}>
                    <div className="offcanvas-header d-flex align-items-center justify-content-between pb-2">
                        <h3 className="font-weight-bold m-0">{USER_INFO}</h3>
                        <a href="/#"
                           className="btn btn-xs btn-icon btn-light-primary"
                           id="kt_quick_user_close">
                            <i className="ki ki-close icon-xs" />
                        </a>
                    </div>
                    <div className="separator separator-dashed my-3 mb-3" />
                    <div className="offcanvas-content mr-n5">
                        <div className="d-flex mt-5">
                            <div className="symbol symbol-100 mr-2">
                                <div className="symbol-label"
                                     style={{ backgroundImage: `url(${avatar || userImg})` }} />
                                <i className="symbol-badge bg-success" />
                            </div>
                            <div className="d-flex flex-column">
								<span className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">
									{userInfo?.fullName}
                                    <i className="flaticon2-correct text-success icon-md ml-2" />
								</span>
                                <div className="navi mt-2">
									<span className="navi-item">
										<span className="navi-link p-0 pb-2">
											<span className="navi-icon mr-1">
												<span className="svg-icon svg-icon-primary">
													<SvgIcon>
														<mask fill="white">
															<use xlinkHref="#path-1" />
														</mask>
														<g />
														<path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z"
                                                              fill="#000000" />
													</SvgIcon>
												</span>
											</span>
											<span className="navi-text text-dark text-hover-primary">
													{userInfo?.title}
											</span>
										</span>
									</span>
                                    <span className="navi-item">
										<span className="navi-link p-0 pb-2">
											<span className="navi-icon mr-1">
												<span className="svg-icon svg-icon-primary">
													<SvgIcon>
														<rect x="0" y="0" width="24" height="24" />
														<path d="M14,13.381038 L14,3.47213595 L7.99460483,15.4829263 L14,13.381038 Z M4.88230018,17.2353996 L13.2844582,0.431083506 C13.4820496,0.0359007077 13.9625881,-0.12427877 14.3577709,0.0733126292 C14.5125928,0.15072359 14.6381308,0.276261584 14.7155418,0.431083506 L23.1176998,17.2353996 C23.3152912,17.6305824 23.1551117,18.1111209 22.7599289,18.3087123 C22.5664522,18.4054506 22.3420471,18.4197165 22.1378777,18.3482572 L14,15.5 L5.86212227,18.3482572 C5.44509941,18.4942152 4.98871325,18.2744737 4.84275525,17.8574509 C4.77129597,17.6532815 4.78556182,17.4288764 4.88230018,17.2353996 Z"
                                                              fill="#000000" fillRule="nonzero"
                                                              transform="translate(14.000087, 9.191034) rotate(-315.000000) translate(-14.000087, -9.191034) " />
													</SvgIcon>
												</span>
											</span>
											<span className="navi-text text-dark text-hover-primary">
													{userInfo?.branchName}
											</span>
										</span>
									</span>
                                    <span className="navi-item">
										<span className="navi-link p-0 pb-2">
											<span className="navi-icon mr-1">
												<span className="svg-icon svg-icon-primary">
													<SvgIcon>
														<rect x="0" y="0" width="24" height="24" />
														<path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                                              fill="#000000" />
														<circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
													</SvgIcon>
												</span>
											</span>
											<span className="navi-text text-dark text-hover-primary">
												{userInfo?.email}
											</span>
										</span>
									</span>
                                    <span className="navi-item">
										<span className="navi-link p-0 pb-2">
											<span className="navi-icon mr-1">
												<span className="svg-icon svg-icon-primary">
													<SvgIcon>
														<rect x="0" y="0" width="24" height="24" />
														<path d="M7.13888889,4 L7.13888889,19 L16.8611111,19 L16.8611111,4 L7.13888889,4 Z M7.83333333,1 L16.1666667,1 C17.5729473,1 18.25,1.98121694 18.25,3.5 L18.25,20.5 C18.25,22.0187831 17.5729473,23 16.1666667,23 L7.83333333,23 C6.42705272,23 5.75,22.0187831 5.75,20.5 L5.75,3.5 C5.75,1.98121694 6.42705272,1 7.83333333,1 Z"
                                                              fill="#000000" fillRule="nonzero" />
														<polygon fill="#000000" opacity="0.3" points="7 4 7 19 17 19 17 4" />
														<circle fill="#000000" cx="12" cy="21" r="1" />
													</SvgIcon>
												</span>
											</span>
											<span className="navi-text text-dark text-hover-primary">
												{userInfo?.phone}
											</span>
										</span>
									</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <a href="/#" onClick={this.logout}
                               className="btn btn-light-primary btn-block font-weight-bolder py-2 px-5 mt-5">
								<span className="nav-icon">
									<i className="flaticon-logout" />
								</span>
                                Đăng xuất
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

QuickUser.propTypes = {
    userInfo: PropTypes.shape({
        fullName: PropTypes.string,
        title: PropTypes.string,
        branchName: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string
    }),
    avatar: PropTypes.string,
    onLogout: PropTypes.func
};

export default QuickUser;
