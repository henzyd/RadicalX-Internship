import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./HomePage.css";
// import Logo from "../icons/Logo.svg";
import Logo from "../icons/Logo";

const HomePage = () => {
  return (
    <div className="Home-Container min-h-screen grid p-2">
      <div className="h-full flex flex-col justify-between items-start bg-Snow rounded-3xl shadow-HomeSideBar px-4 py-6">
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
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;
