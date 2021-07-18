import clsx from "clsx";
import React, { PureComponent } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { route, routeAdmin, routeRate } from "../../../route";

class AsideMenu extends PureComponent {

	renderMainAsideMenu = () => {
		const activeClass = "menu-item-here";

		return route.map((o, i) => {
			if (o.name) {
				return (
					<Route key={i} path={o.path}>						
						{({ match }) => (
							<li className={clsx("menu-item menu-item-submenu", { [activeClass]: match })}
								aria-haspopup="true">
								<Link to={o.path} className="menu-link menu-toggle">
									<span className="svg-icon menu-icon">{o.svg()}</span>
									<span className="menu-text">{o.name}</span>
								</Link>
							</li>
						)}
					</Route>
				);
			}

			return null;
		});
	};

	renderRateAsideMenu = () => {
		const activeClass = "menu-item-here";

		return routeRate.map((o, i) => {
			if (o.name) {
				return (
					<Route key={i} path={o.path}>						
						{({ match }) => (
							<li className={clsx("menu-item menu-item-submenu", { [activeClass]: match })}
								aria-haspopup="true">
								<Link to={o.path} className="menu-link menu-toggle">
									<span className="svg-icon menu-icon">{o.svg()}</span>
									<span className="menu-text">{o.name}</span>
								</Link>
							</li>
						)}
					</Route>
				);
			}

			return null;
		});
	};

	renderAdminAsideMenu = () => {
		const activeClass = "menu-item-here";

		return routeAdmin.map((o, i) => {
			if (o.name) {
				return (
					<Route key={i} path={o.path}>						
						{({ match }) => (
							<li className={clsx("menu-item menu-item-submenu", { [activeClass]: match })}
								aria-haspopup="true">
								<Link to={o.path} className="menu-link menu-toggle">
									<span className="svg-icon menu-icon">{o.svg()}</span>
									<span className="menu-text">{o.name}</span>
								</Link>
							</li>
						)}
					</Route>
				);
			}

			return null;
		});
	};

	render() {
		return (
			<div id="kt_aside_menu" className="aside-menu min-h-lg-800px"
				 data-menu-vertical="1" data-menu-scroll="1"
				 data-menu-dropdown-timeout="500">
				<ul className="menu-nav">
					<li className="menu-section">
						<h4 className="menu-text text-primary">Báo cáo</h4>
						<i className="menu-icon ki ki-bold-more-hor icon-md" />
					</li>
					{this.renderMainAsideMenu()}

					<li className="menu-section">
						<h4 className="menu-text text-primary">Đánh giá</h4>
						<i className="menu-icon ki ki-bold-more-hor icon-md" />
					</li>
					{this.renderRateAsideMenu()}
					
					<li className="menu-section">
						<h4 className="menu-text text-primary">Hệ thống</h4>
						<i className="menu-icon ki ki-bold-more-hor icon-md" />
					</li>
					{this.renderAdminAsideMenu()}	
				</ul>
			</div>
		);
	}
}

export default AsideMenu;
