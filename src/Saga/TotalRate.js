import { delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as totalRateAction from "../Action/TotalRate";
import * as uiAction from "../Action/Ui";
import { LOADING_DELAY_TIME } from "../Config";
import { data } from "../FakeData/HandleRate";

export function* fetchListTotalRate() {

	yield put(uiAction.showBlocking());

	try {
		const apiService = new Promise(resolve => {
			setTimeout(() => resolve(data), 1000)
		}); 
		const response = yield apiService;
		yield put(totalRateAction.fetchListTotalRateSuccess(response));
	} catch (e) {
		if (e.message) {
			toast.error(e.message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}
