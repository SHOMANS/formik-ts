import { Field, FormikErrors, FormikTouched, FormikValues } from "formik";

interface Props {
  type?:string,
  name:string,
  placeholder?:string,
  label?:string,
  checkBoxLabel?:string,
  component?:string,
  touched:FormikTouched<FormikValues>,
  errors:FormikErrors<FormikValues>,
  disabled?:boolean,
  required?:boolean,
}


function Input({
  type,
  name,
  placeholder,
  errors,
  touched,
  label,
  disabled,
  checkBoxLabel,
  required,
  component = "input",
}:Props) {
  return (
    <div
      className={`formField ${errors[name] && touched[name] && "red-input"}`}
    >
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={"on"}
        component={component}
        disabled={disabled}
        id={name}
        required={required}
      />
      {placeholder && (
        <label className="fieldLabel" htmlFor={name}>
          {placeholder}
        </label>
      )}
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      {checkBoxLabel && <label htmlFor={name}>{checkBoxLabel}</label>}
      {errors[name] && touched[name] && (
        <div className="inputError">{errors[name]}</div>
      )}
      {required && <span className="required-star">*</span>}
    </div>
  );
}

export default Input;
