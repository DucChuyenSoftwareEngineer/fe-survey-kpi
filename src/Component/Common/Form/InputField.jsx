import React from "react";

export const renderInputField = ({
									 label,
									 required,
									 input,
									 meta: { touched, invalid, error },
									 ...otherProps
								 }) => (
	<div className="form-group">
		<label className="font-weight-bolder">{label}</label>
		{required && <>&nbsp;<span className="text-danger">*</span></>}
		<input placeholder={label} {...input} {...otherProps} />
		{touched && invalid && <span className="text-danger">{error}</span>}
	</div>
);
