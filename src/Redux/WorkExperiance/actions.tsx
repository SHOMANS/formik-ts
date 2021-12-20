import * as api from "../../API";
import { Dispatch } from "redux";

import { ActionsType} from "../../@types/types";
import { IFormValidation } from "../../@types/validation";
import { checkCurrentlyWork } from "../../Utils/deleteEndDate"  

import { LocalFormTypes } from "../../Redux/Form/constants"
import { FormTypes } from "../../Redux/WorkExperiance/constants"


export const fetchAllWorkExperiances = (): ((dispatch: Dispatch<ActionsType>) => Promise<void>) => async (dispatch:Dispatch<ActionsType>) => {
  try {
    dispatch({ type: FormTypes.START_LOADING });

    const { data } = await api.fetchAll();
    dispatch({ type: FormTypes.FETCH_ALL_WORK_EXPERIANCES, payload: data });
  } catch (error:any) {
    dispatch({ type: FormTypes.ERROR, payload: error.message });
  }
  dispatch({ type: FormTypes.END_LOADING });
};

export const createNewWorkExperiance = (body:IFormValidation) => async (dispatch:Dispatch<ActionsType>) => {
  try {
    dispatch({ type: FormTypes.START_LOADING });
    checkCurrentlyWork(body);
    const { data } = await api.createNew(body);
    dispatch({ type: FormTypes.CREATE_NEW_WORK_EXPERIANCE, payload: data });
  } catch (error:any) {
    dispatch({ type: FormTypes.ERROR, payload: error.message });
  }
  dispatch({ type: FormTypes.END_LOADING });
};

export const deleteWorkExperiance = (id:string) => async (dispatch:Dispatch<ActionsType>) => {
  try {
    dispatch({ type: FormTypes.START_LOADING });
    await await api.deleteOne(id);

    dispatch({ type: FormTypes.DELETE_WORK_EXPERIANCE, payload: id });
  } catch (error:any) {
    dispatch({ type: FormTypes.ERROR, payload: error.message });
  }
  dispatch({ type: FormTypes.END_LOADING });
};
export const updateWorkExperiance = (body:IFormValidation) => async (dispatch:Dispatch<ActionsType>) => {
  try {
    dispatch({ type: FormTypes.START_LOADING });
    checkCurrentlyWork(body);
    const { data } = await api.updateOne(body);
    dispatch({ type: FormTypes.UPDATE_WORK_EXPERIANCE, payload: data });
  } catch (error:any) {
    dispatch({ type: FormTypes.ERROR, payload: error.message });
  }
  dispatch({ type: FormTypes.END_LOADING });
  dispatch({ type: LocalFormTypes.FINISH_UPDATE });
};
