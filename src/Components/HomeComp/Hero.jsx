import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black pt-[65px] bg-hero-image grid place-items-center">
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-70"></div>
      <div className="z-10 flex flex-col items-center space-y-3 text-center text-white">
        <div className="flex flex-col space-y-4 hero-text">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Unlimited movies, TV <br /> shows, and more.
          </h1>
          <h4 className="text-xl font-medium sm:text-2xl">
            Watch anywhere. Cancel anytime.
          </h4>
          <p className="mb-2 text-sm font-medium sm:text-base">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <Link to="signin">
          <div className="bg-[#e50914] font-medium py-2 px-3 text-white rounded cursor-pointer">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
