import React, { PureComponent } from 'react';
import { Field, reduxForm } from "redux-form";
import DatePickerField from "../Common/Form/DatePickerField";
import { renderSelect2Field } from "../Common/Form/Select2Field";
import { renderSelectField } from "../Common/Form/SelectField";
import { renderInputUpload } from "../Common/Form/UploadFileField";


class CreateForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = ({
            period: "0"
        })
    }
    
    handleSubmit = data => {
        const event = this.props.onSave;

        if (event) {
            event(data);
        }
    };

    handlePeriod = data => {
        const period =  data.target.value;
        switch (period) {
            case "1":
                this.setState({
                    period : "Quý"
                    });
                break;
            case "2":
                this.setState({
                    period : "Năm"
                    }); 
                break;
            default: 
                this.setState({
                    period : "0"
                    });
        }
    }

    render() {
        const { handleSubmit, listPaging } = this.props;
        const { period } = this.state;
        
        let renderformMail = [];

        if ( period !== "0" ) {
            renderformMail = listPaging.data.filter(item => item.period === period)
            .map(({ id, formName }) => ({
                value: id,
                label: formName
            }));
        }

        return (
            <form className="form" autoComplete="off"
                  onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <Field type="text" onChange = {this.handlePeriod} component={renderSelectField}
                                   name="period"
                                   label="Định kỳ"
                                   className="form-control">
                                <option value="0">Chọn định kỳ</option>
                                <option value="1">Quý</option>
                                <option value="2">Năm</option>
                            </Field>
                        </div>
                        {
                        period === "Quý" &&                   
                        <div className="col-md-2">               
                            <Field type="text" component={renderSelectField}
                                   name="cycle"
                                   label="Quý"
                                   className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Field>
                        </div>}         
                        <div className="col-md-2">
                        {
                            period !== "0" &&
                            <Field type="text" component={DatePickerField}
                                   name="cardStartDay"
                                   label="Năm"
                                   className="form-control" />
                        }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Field
                                component={renderSelect2Field}
                                name="formMail"
                                label="Biểu mẫu"
                                options={renderformMail} />
                        </div>
                        <div className="col-md-6">
                            <Field label="File đính kèm"
                                    name="file_upload"
                                    component={renderInputUpload}
                                    className="form-control" />        
                        </div>
                    </div>
                </div>
                <div className="col text-right mb-4">
                    <button type="button" className="btn btn-light-info mr-2"><i className="la la-download" />Download file mẫu</button>
                    {/* <button type="button" className="btn btn-light-primary mr-2"><i className="la la-search" /> Tìm kiếm</button> */}
                    <button type="submit" className="btn btn-light-success"><i className="la la-upload" />Upload File</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
        form: "rate_form_create"
})(CreateForm);