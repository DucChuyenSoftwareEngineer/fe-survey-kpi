// import { toast } from "react-toastify";
// import { delay, put,call } from "@redux-saga/core/effects";
// import * as uiAction from "../Action/Ui";
// import * as formRateAction from "../Action/FormRate";
// import { getServerError } from "../Util/CommonUtil"
// import { LOADING_DELAY_TIME } from "../Config";
// import { data, dataEdit } from "../FakeData/FormRate";
//
// export function* fetchFormRate() {
//
// 	yield put(uiAction.showBlocking());
//
// 	try {
// 		const apiService = new Promise(resolve => {
// 			setTimeout(() => resolve(data), 1000)
// 		});
// 		const response = yield apiService;
//         console.log(response);
// 		yield put(formRateAction.fetchFormRateSuccess(response));
// 	} catch (e) {
// 		if (e.message) {
// 			toast.error(e.message);
// 		}
// 	} finally {
// 		yield delay(LOADING_DELAY_TIME);
// 		yield put(uiAction.hideBlocking());
// 	}
// }
//
// export function* fetchFormRateEdit() {
// 	yield put(uiAction.showBlocking());
// 	try {
// 		const apiService = new Promise(resolve => {
// 			setTimeout(() => resolve(dataEdit), 1000)
// 		});
// 		const response = yield apiService;
// 		yield put(formRateAction.fetchFormRateEditSuccess(response));
// 	} catch ({ message }) {
// 		if (message) {
// 			toast.error(message);
// 		}
// 	} finally {
// 		yield delay(LOADING_DELAY_TIME);
// 		yield put(uiAction.hideBlocking());
// 	}
// }
//
// export function* deleteFormRate({data}) {
//
// 	yield put(uiAction.showBlocking());
//
// 	try {
// 		const data = new Promise(resolve => {
// 			setTimeout(() => resolve(data), 1000)
// 		});
// 		toast.success("Xóa thành công");
// 		yield put(formRateAction.fetchFormRate());
// 	} catch (e) {
// 		if (e.message) {
// 			toast.error(e.message);
// 		}
// 	} finally {
// 		yield delay(LOADING_DELAY_TIME);
// 		yield put(uiAction.hideBlocking());
// 	}
// }
//
// export function* saveFormRate({data}) {
//
// 	let message;
// 	let validate;
// 	const { id } = data;
//
// 	yield put(uiAction.showBlocking());
//
// 	try {
// 		if (id) {
// 			 yield call(systemService.updateSystem, data);
// 		} else {
// 			yield call(systemService.registerSystem, data);
// 		}
//
// 		toast.success("Lưu thành công");
// 	} catch (e) {
// 		({ message, validate } = getServerError(e));
//
// 		if (message) {
// 			toast.error(message);
// 		} else if (validate) {
// 			// yield put(stopSubmit(SYSTEM_SAVE_FORM_ID, validate));
// 		}
// 	} finally {
// 		yield delay(LOADING_DELAY_TIME);
// 		yield put(uiAction.hideBlocking());
// 	}
// }
