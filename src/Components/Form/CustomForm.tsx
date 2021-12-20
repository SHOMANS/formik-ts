import React from "react";
import Input from "./Input";
import { Form, FormikErrors, FormikTouched, FormikValues } from "formik";
import ReactSelect from "./ReactSelect/ReactSelect";
import ReactSelectComponent from "./ReactSelect/ReactSelectComponent";
import { useDispatch, useSelector } from "react-redux";
import { LocalFormTypes } from "../../Redux/Form/constants";
// import { AppState } from "../Redux/store";
import { AppState } from "../../Redux/store"



interface Props {
  errors:FormikErrors<FormikValues>, touched:FormikTouched<FormikValues>, values:FormikValues
}

function CustomForm({ errors, touched, values}:Props) {
  const { isUpdate } = useSelector((state:AppState) => state.FormReduser);
  const dispatch = useDispatch();
  return (
    <Form>
      <h3>Job Details</h3>
      <Input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        touched={touched}
        errors={errors}
        required
      />
      <ReactSelect
        name={"jobField"}
        placeholder={"Job Field"}
        options={[
          {
            label: "web",
            value: "web",
          },
          {
            label: "mobile",
            value: "mobile",
          },
        ]}
        required
        as={ReactSelectComponent}
      />
      <ReactSelect
        name={"jobLocation"}
        placeholder={"Job Location"}
        options={[
          {
            label: "gaza",
            value: "gaza",
          },
          {
            label: "out",
            value: "out",
          },
        ]}
        required
        as={ReactSelectComponent}
      />
      <div className="half">
        <Input
          type="date"
          name="startDate"
          label="Start Date"
          touched={touched}
          errors={errors}
          required
        />
        <Input
          type="date"
          name="endDate"
          label="End Date"
          touched={touched}
          errors={errors}
          required
          disabled={values.currentlyWork}
        />
      </div>
      <div className="checkbox">
        <Input
          type="checkbox"
          name="currentlyWork"
          checkBoxLabel="Currently Work There"
          touched={touched}
          errors={errors}
        />
        {/* <label htmlFor="currentlyWork">Currently Work There</label> */}
      </div>

      <Input
        component="textarea"
        name="jobDescription"
        placeholder="Job Description"
        touched={touched}
        errors={errors}
        required
      />
      <h3>Company Details</h3>

      <Input
        type="text"
        name="companyName"
        placeholder="Company Name"
        touched={touched}
        errors={errors}
        required
      />
      <Input
        type="text"
        name="companyAdress"
        placeholder="Company Adress"
        touched={touched}
        errors={errors}
        required
      />
      <Input
        type="text"
        name="companyIndustry"
        placeholder="Company Industry"
        touched={touched}
        errors={errors}
        required
      />
      <Input
        type="number"
        name="companySize"
        placeholder="Company Size"
        touched={touched}
        errors={errors}
        required
      />
      <Input
        type="text"
        name="companySector"
        placeholder="Company Sector"
        touched={touched}
        errors={errors}
        required
      />
      <Input
        type="text"
        name="supervisorName"
        placeholder="Supervisor Name"
        touched={touched}
        errors={errors}
        required
      />
      <Input
        type="number"
        name="supervisedEmployees"
        placeholder="# of Employees Supervised by You"
        touched={touched}
        errors={errors}
        required
      />
      <Input
        type="text"
        name="leavingReazon"
        placeholder="Reason Of Leaving"
        touched={touched}
        errors={errors}
        required
      />
      <h3>Compensation</h3>
      <div className="three">
        <Input
          type="number"
          name="startSalary"
          placeholder="Start Salary"
          touched={touched}
          errors={errors}
          required
        />
        <Input
          type="number"
          name="endSalary"
          placeholder="End Salary"
          touched={touched}
          errors={errors}
          required
        />
        <ReactSelect
          name={"currency"}
          placeholder={"Currency"}
          options={currencyOptions}
          required
          as={ReactSelectComponent}
        />
      </div>

      {/** HOC for passing a component that doesn't supported in formik*/}
      <button className="submit" type={"submit"}>
        submit
      </button>
      {isUpdate && (
        <button
          className="addNew"
          onClick={() => dispatch({ type: LocalFormTypes.FINISH_UPDATE })}
        >
          Add New
        </button>
      )}
    </Form>
  );
}

export default CustomForm;

const currencyOptions = [
  {
    label: "$",
    value: "$",
  },
  {
    label: "₤",
    value: "₤",
  },
];
