import React from "react";

export const renderTextAreaField = ({
                                     label,
                                     input,
                                     meta: { touched, invalid, error },
                                     ...otherProps
                                 }) => (
    <div className="form-group">
        {/* <label className="font-weight-bolder">{label}</label> */}
        <textarea {...input} {...otherProps} className="form-control"/>
        {touched && invalid && <span className="text-danger">{error}</span>}
    </div>
);
