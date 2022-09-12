import { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "../Components/SignupForm";

const Signup = () => {
  return (
    <div className="grid min-h-screen bg-hero-image shadow-hero-inner place-items-center">
      <div className="flex flex-col w-full p-10  bg-black sm:w-[500px] min-h-full sm:min-h-[400px] sm:mt-12 backdrop-blur-md bg-opacity-80">
        <h1 className="text-3xl font-bold text-white sm:mt-0 mt-[65px]">
          Sign Up
        </h1>
        <SignupForm />
        <Link to="/signin">
          <h6 className="px-2 mt-2 text-sm font-normal text-white hover:text-[#e50914] transition-colors duration-100">
            Already have an account?
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
