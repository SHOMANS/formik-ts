import { IFormValidation } from "../@types/validation";

export const checkCurrentlyWork = (experiance: IFormValidation) => {
  if (experiance.currentlyWork) {
    delete experiance.endDate;
  }
};
