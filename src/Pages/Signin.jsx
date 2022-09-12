import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../Components/SigninForm";

const Signin = () => {
  return (
    <div className="grid min-h-screen bg-hero-image shadow-hero-inner place-items-center">
      <div className="flex flex-col w-full px-10  bg-black sm:w-[500px] min-h-full sm:min-h-[500px] backdrop-blur-md bg-opacity-80 justify-center">
        <h1 className="text-3xl font-bold text-white sm:mt-0 mt-[65px]">
          Sign In
        </h1>
        <SigninForm />
        <h6 className="px-2 mt-2 text-sm font-normal text-[#555555] ">
          New to Netflix?
          <Link to="/signup">
            <span className="px-1 font-semibold text-white ">Sign up now.</span>
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Signin;
