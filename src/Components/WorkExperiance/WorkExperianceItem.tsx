import React from "react";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { deleteWorkExperiance } from "../../Redux/WorkExperiance/actions";
import { storageForm } from "../../Redux/Form/actions";
import { IFormValidation } from "../../@types/validation";

interface Props {
  itemDetails: IFormValidation;
}

export default function WorkExperianceItem({ itemDetails }:Props) {
  const dispach = useDispatch();
  const handleUpdate = () => {
    const start = itemDetails.startDate
      ? itemDetails.startDate.toString().slice(0, 10)
      : itemDetails.startDate;
    const end = itemDetails.endDate
      ? itemDetails.endDate.toString().slice(0, 10)
      : itemDetails.endDate;
    dispach(storageForm({ ...itemDetails, startDate: start, endDate: end }));
  };
  return (
    <div className="slice">
      <span>
        {itemDetails.jobTitle} @{itemDetails.companyName}
      </span>
      <span>
        {itemDetails.startDate ? (
          <Moment format="MMM/YYYY">{itemDetails.startDate}</Moment>
        ) : (
          <span>No Date</span>
        )}{" "}
        -{" "}
        {itemDetails.currentlyWork ? (
          "Present"
        ) : itemDetails.endDate ? (
          <Moment format="MMM/YYYY">{itemDetails.endDate}</Moment>
        ) : (
          <span>No Date</span>
        )}
      </span>
      <span>
        <button onClick={handleUpdate}>update</button>
        <button onClick={() => dispach(deleteWorkExperiance(itemDetails._id as string))}>
          delete
        </button>
      </span>
    </div>
  );
}
