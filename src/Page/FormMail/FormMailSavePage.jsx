import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as formMailAction from "../../Action/FormMail"
import CreateForm from '../../Component/FormMail/CreateForm';

class FormMailSavePage extends PureComponent {

      componentDidMount() {

        const { id } = this.props.match.params;

        if (id) {
            this.props.formMailAction.fetchFormMailEdit(id);
        }
      }

      onSave = data => {
		      this.props.formMailAction.saveFormMail(data);
	    };

      render() {
          const { pageTitle } = this.props;

          return (
            <div className="container">
              <div className="card card-custom" data-card="true" id="kt_card_1">
                <div className="card-body">
                  <h2 className="text-center text-danger text-uppercase font-weight-bolder mb-4">{pageTitle}</h2>
                  <div className="border-style">
                    <CreateForm onSave = {this.onSave}/>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

  FormMailSavePage.propTypes = {
      pageTitle:PropTypes.string,
      match:PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string
        })
      }),
    formMailAction:PropTypes.shape({
      saveFormMail:PropTypes.func,
      fetchFormMailEdit:PropTypes.func
    })
  }

const mapDispatchToProps = dispatch => ({
	formMailAction: bindActionCreators(formMailAction, dispatch)
});

export default connect(null, mapDispatchToProps)(FormMailSavePage);