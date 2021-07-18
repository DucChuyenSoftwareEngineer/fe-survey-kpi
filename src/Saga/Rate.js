import { delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as rateAction from "../Action/Rate";
import * as uiAction from "../Action/Ui";
import { LOADING_DELAY_TIME } from "../Config";
import { dataEdit } from "../FakeData/HandleRate";

export function* fetchHandleRate() {
	yield put(uiAction.showBlocking());
	try {
		const apiService = new Promise(resolve => {
			setTimeout(() => resolve(dataEdit), 1000)
		}); 
		const response = yield apiService;
		console.log(response);
		yield put(rateAction.fetchHandleRateSuccess(response));
	} catch ({ message }) {
		if (message) {
			toast.error(message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}
