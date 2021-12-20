import { Dispatch } from "redux";
import { ActionsType } from "../../@types/types";
import { IFormValidation } from "../../@types/validation";
import { checkCurrentlyWork } from "../../Utils/deleteEndDate"
import { LocalFormTypes } from "./constants";



export const storageForm = (data: IFormValidation) => (dispatch: Dispatch<ActionsType>) => {
  checkCurrentlyWork(data);
  dispatch({
    type: LocalFormTypes.STORAGE_FORM,
    payload: data,
  });
}

export const finishUpdate = () => (dispatch: Dispatch<ActionsType>) => {
  dispatch({ type: LocalFormTypes.FINISH_UPDATE });
}

