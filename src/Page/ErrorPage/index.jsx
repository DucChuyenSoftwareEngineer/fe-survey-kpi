import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImgError404 from "../../Assets/Images/Error/bg3.jpg";
import ImgError403 from "../../Assets/Images/Error/403-error.jpg";
import ImgError500 from "../../Assets/Images/Error/500-error.jpg";
import {
	E500, E403, ERROR,
	BACK_GO_HOME,
	DETAIL_500_INTERNAL_SERVER,
	HOW_DID_YOU_GET_HERE,
	NOT_FOUND_PAGE,
	URL_OR_PAGE_CEASE_TO_EXIST,
	DETAIL_403_FORBIDDEN
} from "../../Constant/Message";
import { ERROR as ERROR_PAGE } from "../../Constant/PageTitle";
import { updatePageTitle } from "../../Util/CommonUtil";
import SvgIcon from "../../Component/Common/SvgIcon";
import "./style.css";

class ErrorPage extends PureComponent {

	componentDidMount() {
		updatePageTitle(ERROR_PAGE);
    }

    render404Page = () => (
		<div className="error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
			 style={{backgroundImage : `url(${ImgError404})`}}>
			<div className="px-10 px-md-30 py-10 py-md-0 d-flex flex-column justify-content-md-center">
				<h1 className="error-title text-stroke text-transparent">404</h1>
				<p className="display-4 font-weight-boldest text-white mb-12">
					{HOW_DID_YOU_GET_HERE}
				</p>
				<p className="font-size-h1 font-weight-boldest text-dark-75">
					{NOT_FOUND_PAGE}
				</p>
				<p className="font-size-h4 line-height-md">
					{URL_OR_PAGE_CEASE_TO_EXIST}
				</p>
				<div>
					<Link to="/" className="btn font-weight-bolder text-uppercase btn-light-primary py-4 px-6">
						<span className="svg-icon svg-icon-primary">
							<SvgIcon>
								<polygon points="0 0 24 0 24 24 0 24" />
								<path d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z"
									  fill="#000000" fillRule="nonzero" />
								<path d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z"
									  fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999)" />
							</SvgIcon>
						</span>
						{ BACK_GO_HOME }
					</Link>
				</div>
			</div>
		</div>
	);

	renderOtherErrorPage = (codeError, detailError, ImgError) => (
		<div className="error error-4 row col-12 d-flex flex-row-fluid" style={{backgroundColor: "#ffffff"}}>
			<div className="col-6 d-flex flex-column flex-row-fluid align-items-center align-items-md-start justify-content-md-center text-center text-md-left px-10 px-md-30 py-10 py-md-0 line-height-xs">
				<h1 className="error-title text-success font-weight-boldest line-height-sm">{ codeError }</h1>
				<p className="error-subtitle text-success font-weight-boldest mb-10">{ ERROR }</p>
				<p className="display-4 text-danger font-weight-boldest mt-md-0 line-height-md">{ detailError }</p>
				<Link to="/" className="btn font-weight-bolder text-uppercase btn-light-success py-4 px-6">
					<span className="svg-icon svg-icon-success">
						<SvgIcon>
							<polygon points="0 0 24 0 24 24 0 24" />
							<path d="M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z"
								  fill="#000000" fillRule="nonzero" />
							<path d="M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z"
								  fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999)" />
						</SvgIcon>
					</span>
					{ BACK_GO_HOME }
				</Link>
			</div>
			<div className="col-6 d-flex flex-row-fluid bgi-size-scale-down bgi-position-center bgi-no-repeat" style={{backgroundImage: `url(${ImgError})`}} />
		</div>
	);

    render() {
		const { error } = this.props;

		if(!error) {
			return this.render404Page();
		}

		switch(error) {
			case E500:
				return this.renderOtherErrorPage(E500, DETAIL_500_INTERNAL_SERVER, ImgError500);
			case E403:
				return this.renderOtherErrorPage(E403, DETAIL_403_FORBIDDEN, ImgError403);
			default:
				return null;
		}
    }
}

ErrorPage.propTypes = {
	error: PropTypes.string,
};

export default ErrorPage;
