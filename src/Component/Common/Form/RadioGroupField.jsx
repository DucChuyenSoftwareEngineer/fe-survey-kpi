import React from "react";
import PropTypes from "prop-types";

export const renderRadioGroupField = ({
							input,
							options,
							meta: { touched, invalid, error },
							...otherProps
						}) => (
	<>
		<div className="radio-inline justify-content-center">
			{
				options.map(({ value}) => (
					<label key={value}
						className="radio radio-success font-weight-bolder">
						<input type="radio" {...input} value={value}
							checked={value === input.value} {...otherProps} />
						<span />{value}
					</label>
				))
			}
		</div>
		{touched && invalid && <div className="text-danger text-center">{error}</div>}
	</>
);