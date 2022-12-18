import React from "react";
import CRTInternshipBTN from "../../components/buttons/CRTInternshipBTN";
import Calender from "../../assets/icons/calendar-2.svg";

const Internships = () => {
  return (
    <main className="h-full w-full px-3 pr-4 pt-2 flex flex-col gap-6">
      <div className=" flex items-center w-full justify-between">
        <h1 className=" font-semibold text-2xl text-Dark">Internships</h1>
        <CRTInternshipBTN />
      </div>
      <div className=" w-full grid grid-cols-Grid1 bg-white rounded-2xl p-[0.85rem] gap-3">
        <div className=" p-4 bg-Grey-Light rounded-xl flex flex-col justify-start items-start gap-[0.6rem] h-full">
          <h3 className=" font-semibold text-lg text-Gray1">
            Internship Insights
          </h3>
          <p className=" text-xs text-Dark">
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory of knowledge in which knowledge about space can
            be both a priori and synthetic.
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" w-full bg-Gray6 p-2 rounded-lg flex items-center justify-between">
            <div className=" flex items-center gap-3">
              <p className=" bg-Purple rounded-lg p-2 text-xs font-medium text-white">
                This week
              </p>
              <p className=" bg-white rounded-lg p-2 text-xs font-medium">
                This month
              </p>
            </div>
            <div className=" flex items-center font-medium text-xs gap-[0.45rem] bg-white p-2 rounded-lg">
              <img className=" w-4" src={Calender} alt="Calender" />
              <p className=" font-semibold">Select dates</p>
            </div>
          </div>
          <div className=" w-full h-[10rem]">
            <div className=" h-full bg-Gray6 rounded-lg w-[10rem]">
              <div></div>
            </div>
            <div className=" h-full"></div>
            <div className=" h-full"></div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Internships;
