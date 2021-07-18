import React, { useCallback } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const select2CustomStyles = {
	control: provided => ({
		...provided,
		border: "1px solid #E4E6EF",
		outline: "none !important",
		borderRadius: "0.85rem",
		height: "auto",
		lineHeight: "1"
	}),
	menu: provided => ({
		...provided,
		margin: "2px"
	})
};

const getSelect2SelectedValue = (listOption, value) => {
	let result;

	if (value === null || value === undefined) {
		result = {};
	} else if (Array.isArray(value)) {
		result = listOption.filter(o => value.includes(o.value));

		if (!result) {
			result = [];
		}
	} else {
		result = listOption.filter(o => o.value === value);

		if (!result) {
			result = {};
		}
	}

	return result;
};

const Select2Field = ({
						  label,
						  required,
						  input,
						  options,
						  meta: { touched, invalid, error },
						  ...otherProps
					  }) => {
	const selectedValue = getSelect2SelectedValue(options, input.value);
	const onChange = useCallback(selected => {
		let value;

		if (Array.isArray(selected)) {
			value = selected.map(o => o.value);
		} else {
			value = selected ? selected.value : null;
		}

		input.onChange(value);
	}, []);

	return (
		<div className="form-group">
			<label className="font-weight-bolder">{label}</label>
			{required && <>&nbsp;<span className="text-danger">*</span></>}
			<Select {...otherProps}
					isSearchable
					options={options}
					value={selectedValue}
					placeholder={label}
					onChange={onChange}
					styles={select2CustomStyles} />
			{touched && invalid && <span className="text-danger">{error}</span>}
		</div>
	);
};

Select2Field.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	input: PropTypes.object,
	options: PropTypes.array,
	meta: PropTypes.shape({
		touched: PropTypes.bool,
		invalid: PropTypes.bool,
		error: PropTypes.string
	})
};

export const renderSelect2Field = props => <Select2Field {...props} />;
