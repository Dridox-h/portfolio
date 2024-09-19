import { Link } from 'react-router-dom';
import logo from "../assets/logobh.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiRootme } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Link to="/">
          <img className="mx-2 w-10 cursor-pointer" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/bastien-heitzmann-40a515291/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Dridox-h" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub />
          </a>
          <a href="https://www.root-me.org/Dridox?lang=fr" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <SiRootme />
          </a>
        </div>
        <Link 
          to="/details" 
          className="ml-4 px-3 py-1 text-neutral-300 border border-neutral-600 rounded-md 
                     hover:bg-neutral-800 hover:text-neutral-100 transition duration-300 
                     focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-opacity-50"
        >
          Qui suis-je
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;