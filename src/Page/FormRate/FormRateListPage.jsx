import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Table from "../../Component/FormRate/Table";
import * as formRateAction from "../../Action/FormRate";

class FormRateListPage extends PureComponent {
    
    componentDidMount(){
        this.props.formRateAction.fetchFormRate();
    }

    onTableChange = data => {
		this.props.formRateAction.updateFormRatePagingSco(data);
		this.props.formRateAction.fetchFormRate();
	};

    onDelete = data => {
		this.props.formRateAction.deleteFormRate(data);
	};

	render() {
		const { pageTitle, listPaging } = this.props;
        const pageSize = listPaging.limit
		console.log(listPaging);

		return (
			<div className="container">
                <div className="card card-custom" data-card="true" id="kt_card_1">
                    <div className="card-header flex-wrap py-3">
                        <div className="card-title">
                            <h3 className="card-label font-weight-bolder">Quản lý {pageTitle}</h3>
                        </div>
                        <div className="card-toolbar">
                            <button type="button"
                                    className="btn btn-icon btn-sm btn-light-primary mr-1"
                                    data-card-tool="toggle">
                                <i className="ki ki-arrow-down icon-nm" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <h3 className="text-primary font-weight-bold mb-6 ml-4">
                                    Danh sách {pageTitle}
                            </h3>
                            <div className="col text-right">
									<Link to="/form_rate/new" type="button" className="btn btn-icon btn-circle btn-light-success">
                                    <i className="fas fa-plus" />
                                    </Link>
								</div>
                        </div>
                        <Table  sort={null}
                                data={listPaging}
                                pageSize={pageSize}
                                handleChange = {this.onTableChange}
                                onDelete = {this.onDelete}/>
                    </div>
                    <div className="card-footer">
                        <div className="row mt-6">
                            <div className="col text-right">
                                <Link to="/" type="button" className="btn font-weight-bolder btn-light-dark mr-2">
                                <i className="la la-arrow-circle-left" /> Trở về 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({
    listPaging: state.formRate.listPaging
});

const mapDispatchToProps = dispatch => ({
formRateAction: bindActionCreators(formRateAction, dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(FormRateListPage);
