import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as rateAction from "../../Action/Rate";
import FormRate from "../../Component/HandleRate/FormRate";

class HandleRate extends PureComponent {

    componentDidMount(){
        const { id } = this.props.match.params;

      if (id) {
        this.props.rateAction.fetchHandleRate(id);
      }
    }

	render() {
		return (
			<div className="container">
                <div className="card card-custom" data-card="true" id="kt_card_1">
                    <div className="card-body">
                            <FormRate />
                    </div>
                </div>
            </div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
    rateAction: bindActionCreators(rateAction, dispatch),
});

export default connect(null,mapDispatchToProps)(HandleRate);
