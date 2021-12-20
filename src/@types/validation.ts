export interface IFormValidation {
  jobTitle: string
  jobField: string
  jobLocation: string
  startDate: Date | string,
  endDate?: Date | string,
  currentlyWork?: boolean,
  jobDescription: string
  companyName: string
  companyAdress: string
  companyIndustry: string
  companySize: number,
  companySector: string
  supervisorName: string
  supervisedEmployees: number,
  leavingReazon: string
  startSalary: number,
  endSalary: number,
  currency: string,
  _id?: string
}
