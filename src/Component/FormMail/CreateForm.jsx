import React, { PureComponent } from 'react';
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {validate} from "./validate";
import {renderInputField} from "../Common/Form/InputField";
import {renderTextEditorField} from "../Common/Form/TextEditorField";

class CreateForm extends PureComponent {

    handleSubmit = data => {

        const event = this.props.onSave;

        if (event) {
            event(data);
        }
    };

    render() {
        const { handleSubmit} = this.props;
        return (
            <form className="form" autoComplete="off"
                  onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <Field type="text" component={renderInputField}
                                   name="name"
                                   label="Tên biểu mẫu"
                                   className="form-control" required />
                        </div>
                        <div className="col-md-12">
                            <Field type="text" component={renderInputField}
                                   name="title"
                                   label="Tiêu đề"
                                   className="form-control" required />
                        </div>
                        <div className="col-md-12">
                            <Field  name="content" 
                                    component={renderTextEditorField} 
                                    label="Nội dung thư" required />
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col text-right">
                            <Link to="/mail" type="button" className="btn font-weight-bolder btn-light-dark mr-2"> <i className="la la-arrow-circle-left" /> Trở về</Link>
                            <button type="submit" className="btn btn-success"><i className="la la-save" />Lưu</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    initialValues: state.formMail.editData
})

const withReduxForm = reduxForm({
	  form: "mail_form_create",
    validate,
	  enableReinitialize: true
});
const withConnect = connect(mapStateToProps);

export default compose(withConnect, withReduxForm)(CreateForm);