export const validate = values => {
    let errors = {};

    if (!values.transferType){
        errors.transferType = 'Required';
    }

    return errors;
};