import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import ui from "./Ui";
import login from "./Login";
import formMail from "./FormMail";
import formRate from "./FormRate";
import handleRate from "./HandleRate";
import rateUpload from "./RateUpload";
import totalRate from "./TotalRate";
import rate from "./Rate";


const reducer = combineReducers({
    form,
    ui,
    login,
    formMail,
    formRate,
    handleRate,
    rateUpload,
    totalRate,
    rate
});

export default reducer;