import { FormTypes } from "../Redux/WorkExperiance/constants";
import { LocalFormTypes } from "../Redux/Form/constants";
import { IFormValidation } from "./validation";

// Start Interfaces

export interface IFetchAllWorkExperiances {
  type: FormTypes.FETCH_ALL_WORK_EXPERIANCES;
  payload: IFormValidation[];
}

export interface ICreateNewWorkExperiance {
  type: FormTypes.CREATE_NEW_WORK_EXPERIANCE;
  payload: IFormValidation;
}

export interface IDeleteWorkExperiance {
  type: FormTypes.DELETE_WORK_EXPERIANCE;
  payload: string;
}

export interface IUpdateWorkExperiance {
  type: FormTypes.UPDATE_WORK_EXPERIANCE;
  payload: IFormValidation;
}

export interface IStartLoading {
  type: FormTypes.START_LOADING;
  // payload: boolean;
}

export interface IEndLoading {
  type: FormTypes.END_LOADING;
  // payload: boolean;
}

export interface IError {
  type: FormTypes.ERROR;
  payload: any;
}
export interface IFinishUpdate {
  type: LocalFormTypes.FINISH_UPDATE;
  // payload: any;
}
export interface IStorageForm {
  type: LocalFormTypes.STORAGE_FORM;
  payload: IFormValidation;
}

// Start Types

export type ActionsType =
  IFetchAllWorkExperiances | ICreateNewWorkExperiance | IDeleteWorkExperiance | IUpdateWorkExperiance | IStartLoading | IError | IEndLoading | IFinishUpdate | IStorageForm;

// export type ItemReducerActionsType =
//   IStartLoading | IError | IEndLoading;

// export type AllListActions = ItemReducerActionsType | ActionsType;
