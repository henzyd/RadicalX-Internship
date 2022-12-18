import React from "react";
import AddSquare from "../../assets/icons/add-square.svg";

const CRTInternshipBTN = () => {
  return (
    <div className=" bg-Purple w-fit flex justify-center items-center gap-2 p-2 rounded-[12px] px-3">
      <img className=" w-[20px]" src={AddSquare} alt="add-sqaure" />
      <p className=" text-white font-light text-[0.8rem]">
        Create New Internship
      </p>
    </div>
  );
};

export default CRTInternshipBTN;
