import { FormikErrors, FormikTouched, FormikValues } from "formik";
import Select from "react-select";


interface Props {
  placeholder?:string,
  touched:FormikTouched<FormikValues>,
  errors:FormikErrors<FormikValues>,
  setFieldTouched :Function,
  value:FormikValues,
  setFieldValue:Function,
  props :{
    name:string,
    placeholder:string, 
    options:{ label: string, value: string}[], 
    required :boolean
  }
}

function ReactSelectComponent({
  setFieldTouched,
  value,
  setFieldValue,
  errors,
  touched,
  props: { name, placeholder, options, required },
}:Props) {
  return (
    <div
      className={`formField ${errors[name] && touched[name] && "red-input"}`}
    >
      <Select
        onBlur={() => setFieldTouched([name], true)}
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder}
        isSearchable={true}
        name={name}
        value={value[name] ? { label: value[name], value: value[name] } : null}
        onChange={(value) => setFieldValue(name, value.value)}
        options={options}
      />
      {placeholder && (
        <label
          className={`fieldLabel ${touched[name] && "upperLabel"}`}
          htmlFor={name}
        >
          {placeholder}
        </label>
      )}
      {errors[name] && touched[name] && (
        <div className="inputError">{errors[name]}</div>
      )}
      {required && <span className="required-star">*</span>}
    </div>
  );
}

export default ReactSelectComponent;
