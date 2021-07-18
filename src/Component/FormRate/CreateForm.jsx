import React, { PureComponent } from 'react';
import { compose } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {validate} from "./validate";
import { Field, FieldArray, reduxForm } from "redux-form";
import { renderInputField } from "../Common/Form/InputField";
import { renderSelect2Field } from "../Common/Form/Select2Field";
import { renderSelectField } from "../Common/Form/SelectField";

class CreateForm extends PureComponent {
    handleSubmit = data => {
        const event = this.props.onSave;
        console.log(data);
         debugger
        if (event) {
            event(data);
        }
    };

    renderRepeatInput = ({ fields, meta: { error, submitFailed } }) => (
		<>
            <div className="form-group row">
				<div className="col-lg-12 text-right">
					<button type="button"
							className="btn btn-icon btn-circle btn-light-success"
							onClick={() => fields.push({})}>
						<i className="fas fa-plus" /></button>
					{submitFailed && error && <span>{error}</span>}
				</div>
			</div>
			{fields.map((evaluationCriteria, index) => (
				<div key={index}
					className="form-group row align-items-center">
                    <div className="col-md-1">
                        <label className="font-weight-bolder">{index + 1}.</label>
                    </div>
					<div className="col-md-6">
						<Field type="text"
							component={renderInputField}
							name={`${evaluationCriteria}.value`}
							className="form-control"/>
						<div className="d-md-none mb-2" />
					</div>
					<div className="col-md-4">
						<button type="button"
								className="btn btn-icon btn-circle btn-sm btn-light-danger"
								onClick={() => fields.remove(index)}>
							<i className="la la-trash" /></button>
					</div>
				</div>
			))}
		</>
	);

    render() {
        const { handleSubmit, listPaging} = this.props;
      

        const renderformMail = listPaging.data.map(({ id, formName }) => ({
            value: id,
            label: formName
          }));

        return (
            <form className="form" autoComplete="off"
                  onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <Field type="text" component={renderInputField}
                                   name="formName"
                                   label="Tên biểu mẫu"
                                   className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <Field type="text" component={renderSelectField}
                                   name="period"
                                   label="Định kỳ"
                                   className="form-control" required>
                                <option value="0">Quý</option>
                                <option value="1">Năm</option>
                            </Field>
                        </div>
                        <div className="col-md-6">
                            <Field
                                    component={renderSelect2Field}
                                    name="formMail"
                                    label="Mẫu gửi thư"
                                    options={renderformMail} required/>
                        </div>
                        <div className="col-md-12 mt-8">
                            <label className="text-primary font-weight-bolder">Danh sách tiêu chí đánh giá</label>
                            <div className="separator separator-dashed mt-4 mb-4"></div>
                            <FieldArray component={this.renderRepeatInput}
										name="evaluationCriteria" />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row mt-6">
                        <div className="col text-right">
                            <Link to="/form_rate" type="button" className="btn font-weight-bolder btn-light-dark mr-2"> <i className="la la-arrow-circle-left" /> Trở về</Link>
                            <button type="submit" className="btn btn-success mr-2"> <i className="la la-save" />Lưu</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    initialValues: state.formRate.editData
})
const withReduxForm = reduxForm({
	form: "rate_form_create",
    validate,
	enableReinitialize: true
});
const withConnect = connect(mapStateToProps);

export default compose(withConnect, withReduxForm)(CreateForm);