import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as formRateAction from "../../Action/FormRate";
import * as totalRateAction from "../../Action/TotalRate";
import Table from "../../Component/TotalRate/Table";
import SearchForm from "../../Component/TotalRate/SearchForm";
import { RESULT_lIST } from "../../Constant/Message";

class TotalRate extends PureComponent {
  componentDidMount() {
    this.props.formRateAction.fetchFormRate();
    // this.props.totalRateAction.fetchListTotalRate();
  }

  onSearch = data => {
		this.props.totalRateAction.updateTotalRateSearchSco(data);
		this.props.totalRateAction.fetchListTotalRate();
	};

  onTableChange = data => {
		this.props.totalRateAction.updateTotalRatePagingSco(data);
		this.props.totalRateAction.fetchListTotalRate();
	};


  render() {
    const { pageTitle, listPaging, listTotalRate } = this.props;
    const {
			sortColumn: column,
			sortOrder: order,
			limit: pageSize
		} = listPaging.sco;
		const sort = {
			column,
			order
		};

    return (
      <div className="container">
        <div className="card card-custom" data-card="true" id="kt_card_1">
          <div className="card-body">
            <h2 className="text-center text-danger text-uppercase font-weight-bolder mb-4">
              Báo cáo {pageTitle}
            </h2>
            <div className="border-style">
              <SearchForm listPaging={listPaging} onSearch={this.onSearch} />
            </div>
            <div className="row mt-8 ml-2">
              <h3 className="font-size-lg text-dark font-weight-bold mb-6">
                {RESULT_lIST}
              </h3>
            </div>
            <Table  data={listTotalRate} 
                    sort={sort}
                    pageSize={pageSize}
                    onChange={this.onTableChange} />
          </div>
          <div className="card-footer">
            <div className="row mt-6">
              <div className="col text-right">
                <Link to="/" type="button" className="btn font-weight-bolder btn-light-dark mr-2">
                  <i className="la la-arrow-circle-left" /> Trở về 
                </Link>
                <button type="button" className="btn btn-success mr-2"> <i className="la la-refresh" />Nhắc lại</button>
                <button type="button" className="btn btn-primary mr-2"> <i className="la la-file-export" />Xuất báo cáo</button>
                <button type="button" className="btn btn-info mr-2"> <i className="la la-cloud-download-alt" />Xuất đánh giá</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  listPaging: state.formRate.listPaging,
  listTotalRate: state.totalRate.listPaging
});

const mapDispatchToProps = (dispatch) => ({
  formRateAction: bindActionCreators(formRateAction, dispatch),
  totalRateAction: bindActionCreators(totalRateAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TotalRate);
