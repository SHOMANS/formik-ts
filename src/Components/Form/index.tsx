import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { formSchema } from "../../Utils/validation";
import CustomForm from "./CustomForm";
import { ThunkDispatch } from "redux-thunk";

import {
  createNewWorkExperiance,
  updateWorkExperiance,
} from "../../Redux/WorkExperiance/actions";
import ScrollToTop from "../../Utils/scrollToTop";
import { useSelector } from "react-redux";
import { AppState } from "../../Redux/store";
import { ActionsType } from "../../@types/types";
import { IFormValidation } from "../../@types/validation";

function Form() {
  // const dispatch = useDispatch();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionsType>>();

  const { FormReduser: { isUpdate, workExperiances  }, } = useSelector((state: AppState): AppState => state);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={isUpdate ? workExperiances : initialValues}
      onSubmit={(values, { resetForm }) => {
        // alert(JSON.stringify(values, null, 2));
        isUpdate
          ? dispatch(updateWorkExperiance(values as IFormValidation))
          : dispatch(createNewWorkExperiance(values as IFormValidation));

        resetForm();
        ScrollToTop();
      }}
      validationSchema={formSchema}
      children={CustomForm}
    />
  );
}

export default Form;

const initialValues = {
  jobTitle: "",
  jobField: "",
  jobLocation: "",
  startDate: "",
  endDate: "",
  currentlyWork: false,
  jobDescription: "",
  companyName: "",
  companyAdress: "",
  companyIndustry: "",
  companySize: "",
  companySector: "",
  supervisorName: "",
  supervisedEmployees: "",
  leavingReazon: "",
  startSalary: "",
  endSalary: "",
  currency: "",
};
