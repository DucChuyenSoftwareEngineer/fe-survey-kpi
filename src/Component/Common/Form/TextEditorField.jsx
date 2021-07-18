import React from "react";
import { HtmlEditor, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from "@syncfusion/ej2-react-richtexteditor"

export const renderTextEditorField = ({input, label, required, meta: { touched, error, warning } }) => (
    <div className="form-group">
        <label className="font-weight-bolder">{label}</label>
        {required && <>&nbsp;<span className="text-danger">*</span></>}
            <RichTextEditorComponent htmlAttributes={{ name: "comment" }} value={input.value}
                change={param => input.onChange(param.value)} focus={param => input.onFocus()} blur={param => input.onBlur()} id="defaultRTE">
                <Inject services={[HtmlEditor, Toolbar, Link, QuickToolbar]} />
            </RichTextEditorComponent>
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);
