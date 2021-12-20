import { ActionsType } from "../../@types/types";
import { IFormValidation } from "../../@types/validation";
import { FormTypes } from "./constants"



export interface initialState {
  isLoading:boolean,
  error: string,
  workExperiances: IFormValidation[]
}

export default function WorkExperiancesReducer(
  state:initialState = { isLoading: false, error: "", workExperiances: [] },
  action: ActionsType
) {
  switch (action.type) {
    case FormTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FormTypes.END_LOADING:
      return { ...state, isLoading: false };
    case FormTypes.ERROR:
      return { ...state, error: action.payload };
    case FormTypes.FETCH_ALL_WORK_EXPERIANCES:
      return {
        ...state,
        workExperiances: action.payload,
        error: "",
      };

    case FormTypes.CREATE_NEW_WORK_EXPERIANCE:
      return {
        ...state,
        workExperiances: [action.payload, ...state.workExperiances],
        error: "",
      };

    case FormTypes.DELETE_WORK_EXPERIANCE:
      return {
        ...state,
        workExperiances: state.workExperiances.filter(
          (item) => item._id !== action.payload
        ),
      };
    case FormTypes.UPDATE_WORK_EXPERIANCE:
      return {
        ...state,
        workExperiances: state.workExperiances.map((experiance) =>
          experiance._id === action.payload._id ? action.payload : experiance
        ),
      };

    default:
      return state;
  }
}
