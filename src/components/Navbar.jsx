import logo from "../assets/logobh.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiRootme } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Logo" />
      </div>
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
    </nav>
  );
};

export default Navbar;
