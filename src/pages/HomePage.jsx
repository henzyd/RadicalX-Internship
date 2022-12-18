import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/icons/Logo";

const HomePage = () => {
  return (
    <div className={`min-h-screen grid p-2 w-full gap-8 grid-cols-HomeGrid`}>
      <div className="h-full flex flex-col justify-between items-start bg-Snow rounded-3xl shadow-HomeSideBar px-4 py-6 w-full sticky top-0">
        <div className="flex flex-col gap-9">
          <div className="w-[125px] self-center">
            <Logo />
          </div>
          <div className="flex flex-col">
            <Link className="py-4 px-2" to={"/"}>
              Dashboard
            </Link>
            <Link className="py-4 px-2" to={"/apprenterships"}>
              Apprenterships
            </Link>
            <Link className="py-4 px-2" to={"/internships"}>
              Internships
            </Link>
            <Link className="py-4 px-2" to={"/jobs"}>
              Jobs
            </Link>
            <Link className="py-4 px-2" to={"/settings"}>
              Settings
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <figure className="w-6 h-6 bg-Gray-Gray50">
            <img src="" alt="" />
          </figure>
          <p>Adam Scott</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
