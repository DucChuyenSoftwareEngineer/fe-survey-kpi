import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as handleRateAction from "../../Action/HandleRate";
import Table from "../../Component/HandleRate/Table";

class HandleRateListPage extends PureComponent {
    
    componentDidMount(){
        this.props.handleRateAction.fetchListCreateRate();
    }

	render() {
		const { pageTitle, listPagingNew, listPagingSave, listPagingComplete } = this.props;
        const pageSizeNew = listPagingNew.limit
        const pageSizeSave = listPagingSave.limit
        const pageSizeComplete = listPagingComplete.limit

		return (
			<div className="container">
                <div className="card card-custom gutter-b">
                    <div className="card-header card-header-tabs-line">
						<div className="card-title">
							<h3 className="card-label font-weight-bolder">{pageTitle}</h3>
						</div>
						<div className="card-toolbar">
							<ul className="nav nav-tabs nav-bold nav-tabs-line">
								<li className="nav-item">
									<a className="nav-link nav-link-style active" data-toggle="tab"
										href="#kt_tab_pane_1_3">
										<h3 className="nav-text">Đánh giá mới</h3>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav-link-style" data-toggle="tab"
										href="#kt_tab_pane_2_3">
										<h3 className="nav-text">Lưu tạm</h3>
									</a>
								</li>
                                <li className="nav-item mr-5">
									<a className="nav-link nav-link-style" data-toggle="tab"
										href="#kt_tab_pane_3_3">
										<h3 className="nav-text">Hoàn thành</h3>
									</a>
								</li>
							</ul>
						</div>
                    </div>
                <div className="card-body">
                        <div className="tab-content mt-5" id="myTabContent">
                            <div className="tab-pane fade show active" id="kt_tab_pane_1_3" role="tabpanel" aria-labelledby="kt_tab_pane_1_3">
                                <Table  m ={null}
                                        data={listPagingNew}
                                        pageSize={pageSizeNew}
                                        handleChange = {this.handleChange}/>
                            </div>
                            <div className="tab-pane fade" id="kt_tab_pane_2_3" role="tabpanel" aria-labelledby="kt_tab_pane_2_3">
                                <Table  sort={null}
                                        data={listPagingSave}
                                        pageSize={pageSizeSave}
                                        handleChange = {this.handleChange}/>
                            </div>
                            <div className="tab-pane fade" id="kt_tab_pane_3_3" role="tabpanel" aria-labelledby="kt_tab_pane_3_3">
                                <Table  sort={null}
                                        data={listPagingComplete}
                                        pageSize={pageSizeComplete}
                                        handleChange = {this.handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({
    listPagingNew: state.handleRate.listPagingNew,
    listPagingSave: state.handleRate.listPagingSave,
    listPagingComplete: state.handleRate.listPagingComplete
});

const mapDispatchToProps = dispatch => ({
    handleRateAction: bindActionCreators(handleRateAction, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(HandleRateListPage);
