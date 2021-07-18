import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { validate } from "./validate";
import { renderTextAreaField } from "../Common/Form/TextAreaField";
import { renderRadioGroupField } from "../Common/Form/RadioGroupField";

class FormRate extends PureComponent {

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { initialValues } = this.props;
    const valEvaluation = [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" }
    ];

    return (
      <>
      <div className="card-title">
          <label className="card-label font-weight-bolder"><small className= "text-muted font-size-sm ml-2"> User đánh giá :</small> {initialValues?.user} - {initialValues?.nameUser}</label><br/>
          <label className="card-label font-weight-bolder"><small className= "text-muted font-size-sm ml-2"> Phòng ban :</small> {initialValues?.department}</label>
      </div>
      <div className="border-style">
        <form className="form">
          <div className="mt-8 text-center">
            <h3 className="text-danger font-weight-bolder">
              {initialValues?.formName}
            </h3>
            <h6 className="font-weight-bolder">
              Kỳ đánh giá: {initialValues?.period}
            </h6>
            <label>
              Chương trình hỗ trợ đánh giá đơn vị tại hội sở có quan hệ công tác
              trong kỳ đánh giá <br />
              Đánh giá mức độ hài lòng theo cấp bậc tăng dần:
              <br />
              <br />
              1. Yếu &emsp; 2. Dưới trung bình &emsp; 3. Trung bình &emsp; 4. Khá
              &emsp; 5. Tốt
            </label>
            <br />
            <div className="bg-primary text-light">
              <label>
                Tiêu chí đánh giá
                <br />
                Anh chị vui lòng click chọn cấp độ tương ứng để đánh giá lần lượt
                từng đơn vị (theo các tiêu chí) mà đơn vị anh chị có tương tác
              </label>
            </div>
          </div>
          {initialValues?.listDepartment.map((department) => (
            <div key={department.DepId} className="card-body">
              <div className="form-group row">
                <div className="col-lg-4">
                  <h6 className="text-danger font-weight-bolder">
                    {department.department}
                  </h6>
                </div>
              </div>
              {initialValues?.evaluationCriteria.map((item, index) => (
                <div key={item.evaId} className="form-group row">
                  <div className="col-lg-4">
                    <p>{index + 1}. {item.evaName}</p>
                  </div>
                  <div className="col-lg-4">
                    <Field
                      component={renderRadioGroupField}
                      name="valEvaluation"
                      options={valEvaluation}
                    />
                  </div>
                  <div className="col-lg-4">
                    <Field
                      type="text"
                      component={renderTextAreaField}
                      name="note"
                      placeholder="Ghi chú bổ sung"
                      className="form-control"
                    />
                  </div>
                </div>
              ))}
              <div className="separator separator-dashed mt-4 mb-4"></div>
            </div>
          ))}
          <div className="card-footer">
            <div className="row">
              <div className="col text-right">
                <button onClick={this.goBack} type="button" className="btn font-weight-bolder btn-light-dark mr-2">
                  <i className="la la-arrow-circle-left" /> Trở về
                </button>
                <button type="button" className="btn btn-success mr-2">
                  <i className="la la-save" />
                  Lưu
                </button>
                <button type="button" className="btn btn-primary">
                  <i className="la la-send" />
                  Gửi kết quả
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  initialValues: state.rate.rateData,
});
const withReduxForm = reduxForm({
  form: "rate_form_handle",
  validate,
  enableReinitialize: true,
});
const withConnect = connect(mapStateToProps);

export default compose(withConnect, withReduxForm, withRouter)(FormRate);
