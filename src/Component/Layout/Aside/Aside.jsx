import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AsideMenu from "./AsideMenu";

class Aside extends PureComponent {

	render() {
		const { listUserRole } = this.props;

		return (
			<div className="aside aside-left d-flex flex-column flex-row-auto" id="kt_aside">
				<div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
					<AsideMenu listUserRole={listUserRole} />
				</div>
			</div>
		);
	}
}

Aside.propTypes = {
	listUserRole: PropTypes.array
};

export default Aside;
