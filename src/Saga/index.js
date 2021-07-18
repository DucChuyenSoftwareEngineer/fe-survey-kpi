import { takeEvery } from "@redux-saga/core/effects";
import * as actionType from "../Constant/ActionType";
import * as formMail from "./FormMail";
import * as formRate from "./FormRate";
import * as handleRate from "./HandleRate";
import * as rateUpload from "./RateUpload";
import * as totalRate from "./TotalRate";
import * as rate from "./Rate";

function* saga(){

    // form mail
    // yield takeEvery(actionType.FETCH_FORM_MAIL, formMail.fetchFormMail);
    yield takeEvery(actionType.FETCH_FORM_MAIL_EDIT, formMail.fetchFormMailEdit);
    // yield takeEvery(actionType.DELETE_FORM_MAIL, formMail.deleteFormMail);
    yield takeEvery(actionType.SAVE_FORM_MAIL, formMail.saveFormMail);

    // form rate
    // yield takeEvery(actionType.FETCH_FORM_RATE, formRate.fetchFormRate);
    // yield takeEvery(actionType.FETCH_FORM_RATE_EDIT, formRate.fetchFormRateEdit);
    // yield takeEvery(actionType.DELETE_FORM_RATE, formRate.deleteFormRate);
    // yield takeEvery(actionType.SAVE_FORM_RATE, formRate.saveFormRate);

    // handle rate 
    yield takeEvery(actionType.FETCH_FORM_HANDLE_RATE, handleRate.fetchFormHandleRate);
    yield takeEvery(actionType.FETCH_LIST_HANDLE_RATE, handleRate.fetchFormHandleRateNew);
    yield takeEvery(actionType.FETCH_LIST_HANDLE_RATE, handleRate.fetchFormHandleRateSave);
    yield takeEvery(actionType.FETCH_LIST_HANDLE_RATE, handleRate.fetchFormHandleRateComplete); 

    // rate upload
    yield takeEvery(actionType.FETCH_LIST_RATE_UPLOAD, rateUpload.fetchListRateUpload);
    yield takeEvery(actionType.DELETE_RATE_UPLOAD, rateUpload.deleteRateUpload);
    yield takeEvery(actionType.SAVE_RATE_UPLOAD, rateUpload.saveRateUpload);

    //Total Rate
    yield takeEvery(actionType.FETCH_LIST_TOTAL_RATE, totalRate.fetchListTotalRate);

    //Rate

    yield takeEvery(actionType.FETCH_HANDLE_RATE, rate.fetchHandleRate);

}

export default saga;