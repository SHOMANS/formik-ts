import { IFormValidation } from "../../@types/validation";
import { LocalFormTypes } from "./constants";

export default function FormReduser(state: { isUpdate: boolean } = { isUpdate: false }, action: { type: string, payload: IFormValidation }) {
  switch (action.type) {
    case LocalFormTypes.STORAGE_FORM:
      return {
        ...state,
        workExperiances: action.payload,
        isUpdate: true,
      };
    case LocalFormTypes.FINISH_UPDATE:
      return {
        ...state,
        workExperiances: state,
        isUpdate: false,
      };
    default:
      return state;
  }
}
