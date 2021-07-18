import { toast } from "react-toastify";
import { delay, put } from "@redux-saga/core/effects";
import * as handleRateAction from "../Action/HandleRate";
import * as uiAction from "../Action/Ui";
import { LOADING_DELAY_TIME } from "../Config";
import { data, dataComplete, dataNew, dataSave } from "../FakeData/HandleRate";

export function* fetchFormHandleRate() {

	yield put(uiAction.showBlocking());

	try {
		const apiService = new Promise(resolve => {
			setTimeout(() => resolve(data), 1000)
		}); 
		const response = yield apiService;
		yield put(handleRateAction.fetchFormHandleRateSuccess(response));
	} catch (e) {
		if (e.message) {
			toast.error(e.message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}

export function* fetchFormHandleRateNew() {

	yield put(uiAction.showBlocking());

	try {
		const apiService = new Promise(resolve => {
			setTimeout(() => resolve(dataNew), 1000)
		}); 
		const response = yield apiService;
		yield put(handleRateAction.fetchListCreateRateSuccess(response));
	} catch (e) {
		if (e.message) {
			toast.error(e.message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}

export function* fetchFormHandleRateSave() {

	yield put(uiAction.showBlocking());

	try {
		const apiService = new Promise(resolve => {
			setTimeout(() => resolve(dataSave), 1000)
		}); 
		const response = yield apiService;
		yield put(handleRateAction.fetchListCreateRateSaveSuccess(response));
	} catch (e) {
		if (e.message) {
			toast.error(e.message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}

export function* fetchFormHandleRateComplete() {

	yield put(uiAction.showBlocking());

	try {
		const apiService = new Promise(resolve => {
			setTimeout(() => resolve(dataComplete), 1000)
		}); 
		const response = yield apiService;
		yield put(handleRateAction.fetchListCreateRateCompleteSuccess(response));
	} catch (e) {
		if (e.message) {
			toast.error(e.message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}
