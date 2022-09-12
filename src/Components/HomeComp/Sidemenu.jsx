import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Sidemenu = () => {
  return (
    <>
      <Menu>
        <Menu.Button className="p-1 focus:outline-none">
          <FiMenu className="w-8 h-8 text-white" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 translate-y-[-150px]"
          enterTo="transform opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="transform opacity-0 translate-y-[-150px]"
        >
          <Menu.Items className=" inset-0 flex flex-col items-center justify-center w-full h-screen text-white bg-black bg-opacity-50 rounded -z-10 backdrop-blur-md absolute">
            <Menu.Item>
              {({ active }) => (
                <Link to="/signin">
                  <div
                    className={`px-2 py-5 font-medium rounded transition duration-300 ${
                      active ? "text-[#e50914]" : ""
                    }`}
                  >
                    Sign In
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="/signup">
                  <div
                    className={`px-2 py-5 font-medium rounded transition duration-300 ${
                      active ? "text-[#e50914]" : ""
                    }`}
                  >
                    Sign Up
                  </div>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Sidemenu;
