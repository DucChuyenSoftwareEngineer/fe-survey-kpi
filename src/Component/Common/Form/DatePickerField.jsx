import React, { useEffect } from "react";
import PropTypes from "prop-types";



const DatePickerField = ({
							 label,
							 required,
							 input,
							 meta: { touched, invalid, error },
							 ...otherProps
						 }) => {
	useEffect(() => {
			const { KTUtil, $ } = window;
			const rtl = KTUtil.isRTL();
			let arrows;

			if (rtl) {
				arrows = {
					leftArrow: "<i class='la la-angle-right'></i>",
					rightArrow: "<i class='la la-angle-left'></i>"
				};
			} else {
				arrows = {
					leftArrow: "<i class='la la-angle-left'></i>",
					rightArrow: "<i class='la la-angle-right'></i>"
				};
			}

			$(`#${input.name}`).datepicker({
				rtl,
				todayBtn: "linked",
				clearBtn: true,
				todayHighlight: true,
				language: "vn",
				format: "yyyy",
				viewMode: "years",
				minViewMode: "years", 
				autoclose: true, 
				templates: arrows
			}).on("changeDate", e => {
				input.onChange(e.target.value);
			});
		}
		, []);

	return (
		<div className="form-group">
			<label className="font-weight-bolder">{label}</label>
			{required && <>&nbsp;<span className="text-danger">*</span></>}
			<div className="input-group date">
				<input type="text" className="form-control"
					   placeholder={label} {...input} {...otherProps}
					   id={input.name} />
				<div className="input-group-append">
				<span className="input-group-text">
					<i className="la la-calendar" />
				</span>
				</div>
			</div>
			{touched && invalid && <span className="text-danger">{error}</span>}
		</div>
	);
}

DatePickerField.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	name: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object
};

export default DatePickerField;
