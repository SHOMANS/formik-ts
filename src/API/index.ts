import axios, { AxiosResponse } from "axios";
import { IFormValidation } from "../@types/validation";


const API = axios.create({
  baseURL: "https://work-experiance.herokuapp.com/",
});

export const fetchAll = (): Promise<AxiosResponse> => API.get(`experiances`);
export const createNew = (body: IFormValidation): Promise<AxiosResponse> => API.post("experiances", body);
export const deleteOne = (id: string): Promise<AxiosResponse> => API.delete(`experiances/${id}`);
export const updateOne = (body: IFormValidation): Promise<AxiosResponse> => API.put(`experiances/${body._id}`, body);
