import { toast } from "react-toastify";
import { delay, put, select, call } from "@redux-saga/core/effects";
import * as uiAction from "../Action/Ui";
import { stopSubmit } from "redux-form";
import * as formMailAction from "../Action/FormMail";
import * as formMailService from "../Service/FormMailService";
import { LOADING_DELAY_TIME } from "../Config";
import { getServerError } from "../Util/CommonUtil"

export function* fetchFormMail() {

		// const sco = yield select(({ formMail: { listPaging } }) => listPaging.sco);
		// yield put(uiAction.showBlocking());
		//
		// try {
		// 		const response = yield call(formMailService.fetchFormMail, sco);
		// 		yield put(formMailAction.fetchFormMailSuccess(response));
		// } catch (e) {
		// 	if (e.message) {
		// 		toast.error(e.message);
		// 	}
		// } finally {
		// 	yield delay(LOADING_DELAY_TIME);
		// 	yield put(uiAction.hideBlocking());
		// }
}

export function* fetchFormMailEdit({data}) {

		yield put(uiAction.showBlocking());

		try {
     debugger
			const response = yield call(formMailService.fetchFormMail, data);
			yield put(formMailAction.fetchFormMailEditSuccess(response));

		} catch ({ message }) {

			if (message) {
				toast.error(message);
			}

		} finally {

			yield delay(LOADING_DELAY_TIME);
			yield put(uiAction.hideBlocking());
		}
}

export function* saveFormMail({data}) {

		let message;
		let validate;
		const { id } = data;
		debugger
		yield put(uiAction.showBlocking());
		try {
			if (id) {
				yield call(formMailService.updateFormMail, data);
			} else {
				yield call(formMailService.registerFormMail, data);
			}

			toast.success("Lưu thành công");
		} catch (e) {
			({ message, validate } = getServerError(e));

			if (message) {
				toast.error(message);
			} else if (validate) {
				yield put(stopSubmit("mail_form_create", validate));
			}
		} finally {
			yield delay(LOADING_DELAY_TIME);
			yield put(uiAction.hideBlocking());
		}
}

export function* deleteFormMail({data}) {

	yield put(uiAction.showBlocking());

	try {
		yield call(formMailService.deleteFormMail, data);
		toast.success("Xóa thành công");
		yield put(formMailAction.fetchFormMail());
	} catch (e) {
		if (e.message) {
			toast.error(e.message);
		}
	} finally {
		yield delay(LOADING_DELAY_TIME);
		yield put(uiAction.hideBlocking());
	}
}