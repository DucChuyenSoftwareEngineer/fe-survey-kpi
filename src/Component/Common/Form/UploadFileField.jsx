import React from "react";

export const renderInputUpload = ({ label, input, meta, ...otherProps }) => {
    const onChange = (event) => {
        const { files } = event.target;
        input.onChange(files);
    }

    return (
        <div className="form-group">
            <label className="font-weight-bolder">{label}</label>
            <input type="file" placeholder={label} onChange={onChange} {...otherProps} />
        </div>
    );
};
