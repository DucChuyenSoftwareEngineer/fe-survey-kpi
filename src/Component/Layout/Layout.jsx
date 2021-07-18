import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import HeaderMobile from "./HeaderMobile";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import Footer from "./Footer";
import QuickUser from "./Extras/Offcanvas/QuickUser";
import ScrollTop from "./Extras/ScrollTop";
import { updatePageTitle } from "../../Util/CommonUtil";

class Layout extends PureComponent {

    componentDidMount() {
        const {
            KTUtil,
            KTLayoutHeader,
            KTLayoutHeaderTopbar,
            KTLayoutAside,
            KTLayoutAsideMenu,
            KTLayoutContent,
            KTLayoutFooter,
            KTLayoutScrolltop,
            // KTLayoutDemoPanel,
            KTLayoutQuickUser,
            KTApp,
            KTCardTools
        } = window;
        const { pageTitle } = this.props;

        updatePageTitle(pageTitle);

        if (KTUtil) {
            KTUtil.ready(() => {
                if (KTLayoutHeader) {
                    KTLayoutHeader.init("kt_header", "kt_header_mobile");
                }
                if (KTLayoutHeaderTopbar) {
                    KTLayoutHeaderTopbar.init("kt_header_mobile_topbar_toggle");
                }
                if (KTLayoutAside) {
                    KTLayoutAside.init("kt_aside");
                }
                if (KTLayoutAsideMenu) {
                    KTLayoutAsideMenu.init("kt_aside_menu");
                }
                if (KTLayoutContent) {
                    KTLayoutContent.init("kt_content");
                }
                if (KTLayoutFooter) {
                    KTLayoutFooter.init("kt_footer");
                }
                if (KTLayoutScrolltop) {
                    KTLayoutScrolltop.init("kt_scrolltop");
                }
                // if (KTLayoutDemoPanel) {
                // 	KTLayoutDemoPanel.init("kt_demo_panel");
                // }
                if (KTLayoutQuickUser) {
                    KTLayoutQuickUser.init("kt_quick_user");
                }
                if (KTApp) {
                    KTApp.initTooltips();
                }
                if (KTCardTools) {
                    KTCardTools.init();
                }
            });
        }
    }

    onLogout = () => {
        const event = this.props.onLogout;

        if (event) {
            event();
        }
    };


    render() {
        const { userInfo, avatar, children } = this.props;
        const { fullName } = userInfo;

        return (
            <>
                <HeaderMobile avatar={avatar} fullName={fullName} />
                <div className="d-flex flex-column flex-root">
                    <div className="d-flex flex-row flex-column-fluid page">
                        <Aside />
                        <div className="d-flex flex-column flex-row-fluid wrapper"
                             id="kt_wrapper">
                            <Header avatar={avatar} fullName={fullName} />
                            <div id="kt_content"
                                 className="content container-fluid d-flex flex-column flex-column-fluid">
                                <div className="d-flex flex-column-fluid">
                                    {children}
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
                <QuickUser userInfo={userInfo}
                           onLogout={this.onLogout} />
                <ScrollTop />
            </>
        );
    }
}

Layout.propTypes = {
    pageTitle: PropTypes.string,
    userInfo: PropTypes.shape({
        fullName: PropTypes.string,
        listRole: PropTypes.array
    }),
    avatar: PropTypes.string,
    children: PropTypes.element,
    onLogout:  PropTypes.func
};

export default Layout;
