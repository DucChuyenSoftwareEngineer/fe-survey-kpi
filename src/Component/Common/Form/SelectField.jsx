import React  from "react";

export const renderSelectField = ({
									  input,
									  label,
									  meta: { touched, invalid, error },
									  children,
									  required,
									  ...otherProps
								  }) => (
	<div className="form-group">
		<label className="font-weight-bolder">{label}</label>
		{required && <>&nbsp;<span className="text-danger">*</span></>}
		<select {...input} {...otherProps} className="form-control select">
			{children}
		</select>
		{touched && invalid && <span className="text-danger">{error}</span>}
	</div>
);
