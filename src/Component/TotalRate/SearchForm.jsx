import React, { PureComponent } from 'react';
import { Field, reduxForm } from "redux-form";
import DatePickerField from "../Common/Form/DatePickerField";
import { renderSelect2Field } from "../Common/Form/Select2Field";
import { renderSelectField } from "../Common/Form/SelectField";
// import { renderInputUpload } from "../Common/Form/UploadFileField";


class SearchForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = ({
            period: "0"
        })
    }

    handleSubmit = data => {
        const event = this.props.onSearch;

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
        const { handleSubmit, listPaging} = this.props;
      

        const { period } = this.state;
        
        let renderformRate = [];
        if (period === "0") {
            renderformRate = listPaging.data.map(({ id, formName }) => ({
                value: id,
                label: formName
            }));
        } else {
            renderformRate = listPaging.data.filter(item => item.period === period)
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
                            <Field type="text" component={renderSelectField} onChange = {this.handlePeriod}
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
                                label="Mẫu đánh giá"
                                options={renderformRate} />
                        </div>
                        <div className="col-md-6">
                        <Field type="text" component={renderSelectField}
                                   name="status"
                                   label="Trạng thái"
                                   className="form-control">
                                <option value="0">Tất cả</option>
                                <option value="1">Chưa thực hiện</option>
                                <option value="2">Lưu tạm</option>
                                <option value="3">Hoàn thành</option>
                            </Field>
                        </div>
        
                    </div>
                </div>
                <div className="col text-right">
                    <button type="submit" className="btn btn-light-primary mb-4">
                    <i className="la la-search" /> Tìm kiếm
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
        form: "form_search_totalrate"
})(SearchForm);