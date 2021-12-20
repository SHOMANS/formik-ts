import React from "react";
import { Field } from "formik";

function ReactSelect(props) {
  return (
    <Field>
      {({
        field: { value },
        form: { setFieldValue, errors, touched, setFieldTouched },
      }) => (
        <>
          {props.as({
            value,
            errors,
            setFieldValue,
            touched,
            setFieldTouched,
            props,
          })}
        </>
      )}
    </Field>
  );
}

export default ReactSelect;
