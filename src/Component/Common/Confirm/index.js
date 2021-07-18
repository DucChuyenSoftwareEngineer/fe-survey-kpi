import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./style.css";

export const confirm = options => {
	confirmAlert(options);
};
