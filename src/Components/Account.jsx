import { Menu } from "@headlessui/react";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";

const Account = () => {
  const navigate = useNavigate();
  const userMenu = async () => {
    await signOut(auth);
    navigate("/signin");
    localStorage.setItem("signedIn", false);
  };
  return (
    <Menu>
      <Menu.Button className="outline-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="w-10 h-10 rounded"
        />
      </Menu.Button>
      <Menu.Items className="absolute w-[200px] py-4 px-2 rounded top-[80px] right-6 bg-black backdrop-filter bg-opacity-50 backdrop-blur-md outline-none">
        <Menu.Item>
          {({ active }) => (
            <Link to="/mylist">
              <div
                className={`rounded-lg px-2 py-4 text-white font-semibold cursor-pointer ${
                  active ? "bg-[#D62560]" : ""
                }`}
              >
                My List
              </div>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div
              onClick={userMenu}
              className={`rounded-lg px-2 py-4 text-white font-semibold cursor-pointer ${
                active ? "bg-[#D62560]" : ""
              }`}
            >
              Sign Out
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Account;
