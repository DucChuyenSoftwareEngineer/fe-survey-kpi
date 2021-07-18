import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreateForm from '../../Component/CreateRate/CreateForm';
import * as formRateAction from "../../Action/FormRate";
import * as rateUploadAction from "../../Action/RateUpload";
import Table from '../../Component/CreateRate/Table';
import { RESULT_lIST } from "../../Constant/Message";

class CreateRate extends PureComponent {

    componentDidMount(){
        this.props.formRateAction.fetchFormRate();
        // this.props.rateUploadAction.fetchListRateUpload();
    }

    onTableChange = data => {
		this.props.rateUploadAction.updateListRateUploadPagingSco(data);
		this.props.rateUploadAction.fetchListRateUpload();
	};

    onDelete = data => {
		this.props.rateUploadAction.deleteRateUpload(data);
	};

    onSave = data => {
        this.props.rateUploadAction.saveRateUpload(data);
        this.props.rateUploadAction.fetchListRateUpload();
    }
    
    render() {
        const { pageTitle, listPaging, listRateUpload } = this.props;

		return (
			<div className="container">
                <div className="card card-custom" data-card="true" id="kt_card_1">
                <div className="card-header card-header-tabs-line">
						<div className="card-title">
							<h3 className="card-label font-weight-bolder">{pageTitle}</h3>
						</div>
						<div className="card-toolbar">
							<ul className="nav nav-tabs nav-bold nav-tabs-line">
								<li className="nav-item">
									<a className="nav-link nav-link-style active" data-toggle="tab"
										href="#kt_tab_pane_1_3">
										<span className="svg-icon svg-icon-primary svg-icon-2x mr-2">
											
										</span>
										<h3 className="nav-text">Khởi tạo</h3>
									</a>
								</li>
								<li className="nav-item mr-5">
									<a className="nav-link nav-link-style" data-toggle="tab"
										href="#kt_tab_pane_2_3">
										<span className="svg-icon svg-icon-primary svg-icon-2x mr-2">
										</span>
										<h3 className="nav-text">Tìm kiếm</h3>
									</a>
								</li>
							</ul>
						</div>
					</div>
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="tab-pane fade show active"
                                    id="kt_tab_pane_1_3" role="tabpanel" aria-labelledby="kt_tab_pane_1_3">
                                <h2 className="text-center text-danger text-uppercase font-weight-bolder mb-4">{pageTitle}</h2>
                                <div className="border-style">
                                    <CreateForm onSave = {this.onSave} listPaging={listPaging}/>
                                </div>
                                <div className="row mt-8">
                                    <h3 className="font-size-lg text-dark font-weight-bold mb-6 ml-4">
                                        {RESULT_lIST}
                                    </h3>
                                </div>
                                <Table  data = {listRateUpload} 
                                        onDelete = {this.onDelete} 
                                        onChange = {this.onTableChange}/>
                            </div>
                            <div className="tab-pane fade" id="kt_tab_pane_2_3"
                                    role="tabpanel" aria-labelledby="kt_tab_pane_2_3">            
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col text-right">
                                <Link to="/" type="button" className="btn font-weight-bolder btn-light-dark mr-2"> <i className="la la-arrow-circle-left" /> Trở về</Link>
                                <button type="button" className="btn btn-primary mr-2"><i className="la la-send" />Gửi đơn vị</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
    }
}
const mapStateToProps = state => ({
    listPaging: state.formRate.listPaging,
    listRateUpload: state.rateUpload.listPaging

});

const mapDispatchToProps = dispatch => ({
    formRateAction: bindActionCreators(formRateAction, dispatch),
    rateUploadAction: bindActionCreators(rateUploadAction, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(CreateRate);