import React from "react";
import Sidemenu from "./HomeComp/Sidemenu";
import Button from "./Button";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "./Logo";
import Account from "./Account";

const Navbar = ({ show, search }) => {
  const signed = JSON.parse(localStorage.getItem("signedIn"));
  return (
    <div className="absolute h-[65px] top-0 w-full z-50">
      <div className="container relative flex items-center justify-between px-6 mx-auto">
        <Link to="/dashboard">
          <Logo />
        </Link>
        {show ? (
          <div className="flex items-center space-x-4">
            {signed ? (
              <>
                {search ? (
                  ""
                ) : (
                  <Link to="/search">
                    <AiOutlineSearch className="w-8 h-8 text-white" />
                  </Link>
                )}
                <Account />
              </>
            ) : (
              <>
                <div className="hidden space-x-2 sm:flex">
                  <Button text={"Sign In"} path="/signin" />
                  <Button text={"Sign Up"} path="/signup" />
                </div>
                <div className="sm:hidden">
                  <Sidemenu />
                </div>
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
