const HomeDetails = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center px-6 space-y-3 text-white">
      <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-left">
        {title}
      </h1>
      <p className="text-lg font-medium text-center lg:text-left lg:text-2xl">
        {description}
      </p>
    </div>
  );
};

export default HomeDetails;
