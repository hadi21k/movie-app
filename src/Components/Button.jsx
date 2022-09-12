import { Link } from "react-router-dom";

const Button = ({ text, path }) => {
  return (
    <Link to={path}>
      <div className="bg-[#e50914] font-medium py-2 px-3 text-white rounded cursor-pointer">
        {text}
      </div>
    </Link>
  );
};

export default Button;
