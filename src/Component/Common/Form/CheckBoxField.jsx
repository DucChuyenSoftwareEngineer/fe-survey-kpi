import React from "react";

export const renderCheckBoxField = ({
						   label,
						   input,
						   meta: { touched, invalid, error },
						   ...otherProps
					   }) => (
	<>
		<div className="checkbox-inline">
			<label className="checkbox checkbox-success">
				<input type="checkbox" {...input} checked={input.value} {...otherProps} />
				<span /><label className="font-weight-bolder">{label}</label>
			</label>
		</div>
		{touched && invalid && <div className="text-danger text-center">{error}</div>}
	</>
);