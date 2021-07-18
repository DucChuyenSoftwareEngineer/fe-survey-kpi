import React, { PureComponent, Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, withRouter } from "react-router";
import Keycloak from "keycloak-js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import BlockUi from "react-block-ui";
import Loader from "react-loaders";
import Layout from "./Component/Layout/Layout";
import { routeAdmin, route, routeRate } from "./route";
import * as uiAction from "./Action/Ui";
import * as commonAction from "./Action";
import "react-block-ui/style.css";
import "loaders.css/loaders.min.css";
import "react-toastify/dist/ReactToastify.css";

const ErrorPage = lazy(() => import("./Page/ErrorPage"));

class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            keycloak: null,
            authenticated: false
        };
    }

    componentDidMount() {
        const keycloak = Keycloak("/keycloak.json");

        keycloak.init({
            onLoad: "login-required",
            checkLoginIframe: false
        }).then(authenticated => {
            if (authenticated) {
                this.setState({
                    keycloak,
                    authenticated
                });
            }
        });
        keycloak.onTokenExpired = () => {
            keycloak.updateToken(30);
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.commonAction.resetState();
        }
    }

    onLogout = () => {
        const { keycloak } = this.state;
        const { history } = this.props;


        history.push("/");
        keycloak.logout();
    };

    renderMainRoute = () => {
        return route.map((o, i) => (
            <Route key={i} path={o.path} exact render={props => {
                const child = <o.main {...o} pageTitle={o.pageTitle} {...props} />;

                return this.renderLayout(o.pageTitle, child);
            }} />
        ));
    };

    renderRateRoute = () => {
        return routeRate.map((o, i) => (
            <Route key={i} path={o.path} exact render={props => {
                const child = <o.main {...o} pageTitle={o.pageTitle} {...props} />;

                return this.renderLayout(o.pageTitle, child);
            }} />
        ));
    };

    renderAdminRoute = () => {
        return routeAdmin.map((o, i) => (
            <Route key={i} path={o.path} exact render={props => {
                const child = <o.main {...o} pageTitle={o.pageTitle} {...props} />;
                return this.renderLayout(o.pageTitle, child);
            }} />
        ));
    };

    renderLayout = (pageTitle, child) => {
        const { userInfo } = this.props;

        return (
            <Layout pageTitle={pageTitle}
                    userInfo={userInfo}
                    onLogout={this.onLogout}
                    onLoadUserProfile={this.onLoadUserProfile}
                    onSaveProfileUser={this.onSaveProfileUser}
                    onLoadExchangeRate={this.onLoadExchangeRate}>
                {child}
            </Layout>
        );
    };

    renderMainContent = () => (
        <Suspense fallback="Đang tải....">
            <Switch>
                {this.renderMainRoute()}
                {this.renderRateRoute()}
                {this.renderAdminRoute()}
                <Route path="/*">
                    <ErrorPage />
                </Route>
            </Switch>
        </Suspense>
    );

    render() {
        const { blocking } = this.props;
        const { keycloak, authenticated } = this.state;

        if (keycloak) {
            if (authenticated) {
                return (
                    <div className="App">
                        <BlockUi tag="div" blocking={blocking} loader={
                            <Loader active type="ball-triangle-path" color="#3699FF" />
                        }>
                            {this.renderMainContent()}
                        </BlockUi>
                        <ToastContainer />
                    </div>
                );
            }
            return <div>Unable to authenticate!</div>;
        }

        return null;
    }
}

App.propTypes = {
    blocking: PropTypes.bool,
    userInfo: PropTypes.object,
    commonAction: PropTypes.shape({
        resetState: PropTypes.func
    }),
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string
    })
};

const mapStateToProps = state => ({
    blocking: state.ui.blocking,
    userInfo: state.login.userInfo
});

const mapDispatchToProps = dispatch => ({
    uiAction: bindActionCreators(uiAction, dispatch),
    commonAction: bindActionCreators(commonAction, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRouter)(App);
