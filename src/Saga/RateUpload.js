import { delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import * as rateUploadAction from "../Action/RateUpload";
import * as uiAction from "../Action/Ui";
import { getServerError } from "../Util/CommonUtil"
import { LOADING_DELAY_TIME } from "../Config";
import { data } from "../FakeData/RateUpload";

export function* fetchListRateUpload() {
  yield put(uiAction.showBlocking());

  try {
    const apiService = new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000);
    });
    const response = yield apiService;
    yield put(rateUploadAction.fetchListRateUploadSuccess(response));
  } catch (e) {
    if (e.message) {
      toast.error(e.message);
    }
  } finally {
    yield delay(LOADING_DELAY_TIME);
    yield put(uiAction.hideBlocking());
  }
}

export function* deleteRateUpload({data}) {

	yield put(uiAction.showBlocking());

	try {
		const data = new Promise(resolve => {
			setTimeout(() => resolve(data), 1000)
		});
		toast.success("Xóa thành công");
		yield put(rateUploadAction.fetchListRateUpload());
	} catch (e) {
		if (e.message) {
			toast.error(e.message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}

export function* saveRateUpload({data}) {

	let message;
	let validate;
	const { id } = data;

	yield put(uiAction.showBlocking());

	try {
		if (id) {
			// yield call(systemService.updateSystem, data);
		} else {
			// yield call(systemService.registerSystem, data);
		}

		toast.success("Upload thành công");
	} catch (e) {
		({ message, validate } = getServerError(e));

		if (message) {
			toast.error(message);
		} else if (validate) {
			// yield put(stopSubmit(SYSTEM_SAVE_FORM_ID, validate));
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}
