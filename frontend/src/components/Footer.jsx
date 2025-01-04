import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="text=white mp-20">
      <div className="overflow-x-hidden -mb-0.5">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#1d4ed8",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
        </svg>
      </div>
      <div className="bg-[#1d4ed8]">
        <div className="container px-5 py-20 mx-auto">
          <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4">
            {footerLinks.map(({ id, title, links }) => (
              <div className="w-auto px-4" key={id + title} >
                <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                  {title}
                </h2>
                <div className="mb-10 flex flex-col gap-2">
                  {links.map((link, indexedDB) => (
                    <Link
                      key={link}
                      to="/"
                      className="text-black-300 text-sm  hover:text-white"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" ">
          <p className=" container px-5 mx-auto text-white mt-2">
            Subscribe to our Newsletter
          </p>
          <div className="container px-5 mx-auto flex flex-wrap justify-between items-center pt-6 pb-8">
            <div className="w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start">
              <TextInput
                styles="w-full flex-grow md:w-40 2x1:w-64 bg-gray-100 sm:mr-4 md-2"
                type="email"
                placeholder="Email Address"
              />

              <CustomButton
                title="Subscribe"
                containerStyles={
                  "block bg-[#001a36] text-white px-5 py-2.5 tet-md rounded hover:bg-blue-800 focus:potline-none flex-col items-center mt-2"
                }
              />
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaFacebookF />
              </a>
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaTwitter />
              </a>
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FiInstagram />
              </a>

              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
        <div className=" bg-[#001a36]">
          <div className="container  mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; 2025 JOB HUNT - 
              <a href="https://youtube.com/@KodefreaQ" className="text-[#1199e7] ml-1" 
              target="_blank" 
              rel="noopener noreferrer">
                KodefreaQ
              </a>

            </p>
            <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Designed by KodefreaQ
            </span>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
