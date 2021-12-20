import { object, string, SchemaOf, boolean, date, number } from "yup";
import { IFormValidation } from "../@types/validation";

export const formSchema = (): SchemaOf<IFormValidation> => {
  return object().shape({
    jobTitle: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    jobField: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    jobLocation: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    startDate: date().required("This Field Is Required"),
    endDate: date()
      .default(undefined)
      .when("currentlyWork", (currentlyWork, field) =>
        currentlyWork === false
          ? field.required("This Field Should Be Text")
          : field
      )
      .when(
        "startDate",
        (startDate, schema) =>
          startDate &&
          schema.min(startDate, "End date must be greater than start date")
      ),
    currentlyWork: boolean(),
    jobDescription: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    companyName: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    companyAdress: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    companyIndustry: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    companySize: number(
      // "This Field Should Be Number"
    )
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    companySector: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    supervisorName: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    supervisedEmployees: number(
      // "This Field Should Be Number"
    )
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    leavingReazon: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    startSalary: number(
      // "This Field Should Be Number"
    )
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    endSalary: number(
      // "This Field Should Be Number"
    )
      .positive()
      .integer("It should be integer number")
      .required("This Field Is Required"),
    currency: string(
      // "This Field Should Be Text"
    )
      .required("This Field Is Required"),
    _id: string(),
  });
};
