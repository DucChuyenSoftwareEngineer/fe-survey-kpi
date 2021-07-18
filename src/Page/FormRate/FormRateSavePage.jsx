import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreateForm from '../../Component/FormRate/CreateForm';
import * as formMailAction from "../../Action/FormMail";
import * as formRateAction from "../../Action/FormRate";

class FormRateSavePage extends PureComponent {

    componentDidMount(){
       
        const { id } = this.props.match.params;

		if (id) {
			this.props.formRateAction.fetchFormRateEdit(id);
		}
        this.props.formMailAction.fetchFormMail();
    }
    onSave = data => {
		this.props.formRateAction.saveFormRate(data);
	};
    
    render() {
        const { pageTitle, listPaging } = this.props;

		return (
			<div className="container">
                <div className="card card-custom" data-card="true" id="kt_card_1">
                    <div className="card-body">
                        <h2 className="text-center text-danger text-uppercase font-weight-bolder mb-4">{pageTitle}</h2>
                        <div className="border-style">
                            <CreateForm listPaging={listPaging} onSave = {this.onSave}/>
                        </div>
                    </div>
                </div>
            </div>
		);
    }
}
const mapStateToProps = state => ({
    listPaging: state.formMail.listPaging,
});

const mapDispatchToProps = dispatch => ({
    formMailAction: bindActionCreators(formMailAction, dispatch),
    formRateAction: bindActionCreators(formRateAction, dispatch),
});
export default connect(mapStateToProps,mapDispatchToProps)(FormRateSavePage);