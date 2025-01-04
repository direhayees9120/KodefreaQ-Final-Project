import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { users } from "../utils/data";

function MenuList({ user, onClick }) {
  const handleLogout = () => {};

  const newLocal =
    "absolute z-50 right-2 mt-2 w-56 origin-top-right divide-y divide-grey-100 rounded-md bg-white shadow-lg focus:outline-none";
  return (
    <div>
      <Menu as="div" className="inline-block text-left">
        <div className="flex">
          <Menu.Button
            // Toggle dropdown menu or handle user actions
            onClick={onClick}
            className="inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-30"
          >
            <div className="leading[800px] flex flex-col item-start">
              <p className="text-sm font-semibold">
                {user?.firstName ?? user?.name}
              </p>
              <span className="text-sm text-blue-600">
                {user?.jobTittle ?? user?.email}
              </span>
            </div>

            <img
              src={user?.profileUrl}
              alt="user profile"
              className="w-10 h-10 rounded-full object-cover "
            />

            <BiChevronDown
              className="h-8 w-8 text-slate-600"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={newLocal}>
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`${
                      user?.accountType ? "user-profile" : "company-profile"
                    }`}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-800"
                    } group flex w-full items-center rounded-md p-2 text-sm`}
                    onClick={onClick}
                  >
                    <CgProfile
                      className={`${
                        active ? " text-white" : "text-grey-600"
                      } mr-2 h-5 w-5 `}
                      aria-hidden="true"
                    />
                    {user?.accountType ? "User Profile" : "Company Profile"}
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleLogout()}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <AiOutlineLogout
                      className={`${
                        active ? "text-white" : "text-gray-700"
                      } mr-2 h-5 w-5 `}
                      aria-hidden="true"
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const Navbar = () => {
  const user = users[0];
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseNavbar = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative bg-[#f7fdfd] z-50">
      <nav className="flex items-center container mx-auto justify-between px-4 py-4">
        <div>
          <Link to="/" className="text-blue-500 font-bold text-xl">
            Health<span className="text-[#1677cccb]">Bridge</span>
          </Link>
        </div>
        <ul className="hidden lg:flex gap-10 text-base">
          <li>
            <Link to="/">Find Job</Link>
          </li>
          <li>
            <Link to="/">Companies</Link>
          </li>
          <li>
            <Link to="/upload-job">Upload Job</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
        </ul>
        <div className=" hidden lg:block">
          {!user?.token ? (
            <Link to="/user-auth">
              <CustomButton
                title="Sign In"
                containerStyles="text-blue-500 py-1.5 px-5 focus:outline-none hover:bg-blue-500 hover:text-white border border-blue-500 rounded-full text-base border-blue-600"
              />
            </Link>
          ) : (
            <div>
              <MenuList user={user} onClick={handleCloseNavbar} />
            </div>
          )}
        </div>
        <button
          className="block lg:hidden text-slate-900"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      {/* Mobile Menu  */}
      <div
        className={`${
          isOpen ? "absolute flex bg-[#f7fdfd] " : "hidden"
        } container mx-auto lg:hidden flex-col pl-8 gap-3 py-5`}
      >
        <Link to="/" onClick={handleCloseNavbar}>
          Find Job
        </Link>
        <Link to=" /companies " onClick={handleCloseNavbar}>
          Companies
        </Link>
        <Link
          onClick={handleCloseNavbar}
          to={user?.accountType === "seeker" ? "applly-gistory" : "upload-job"}
        >
          {user?.accountType === "seeker" ? "Applications" : "Upload Job"}
        </Link>
        <Link to="/about-us" onClick={handleCloseNavbar}>
          About
        </Link>
        <div className=" w-full py-10 ">
          {!user?.token ? (
            <a href="/user-auth">
              <CustomButton
                title="Sign In"
                containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none
                hover:bg-blue-700 hover:text-white-white rounded-full text base border border-blue-600`}
              />
            </a>
          ) : (
            <div>
              <MenuList user={user} onClick={handleCloseNavbar} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
