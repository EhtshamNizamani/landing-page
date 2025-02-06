import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
function Header() {
  const [isMenu, setIsMenu] = useState(false)
  const toggleNavbar = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div>

    <div
      className="flex lg:text-sm mt-0 z-5 py-2 bg-neutral-600  backdrop-blur-lg justify-between border-b
border-neutral-700/80"
    >
      <div className="flex justify-center flex-shrink-0 items-center">
        <img className="h-10 w-10 p-2 " src={logo} alt="Logo" />
        <span>VirtualR</span>
      </div>
      <ul className="hidden lg:flex justify-center items-center space-x-10">
        {navItems.map((item) => (
          <li key={item.label}>
            <a className="hover:text-gray-800" href={item.href}>
              {" "}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
        <div className=" hidden lg:flex justify-center space-x-12 items-center pr-2">
          <a href="#" className="py-2 px-3 border rounded-md">
            Sign In
          </a>
          <a
            href="#"
            className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
          >
            Create an account
          </a>
        </div>
<div className="lg:hidden flex justify-center items-center text-xl pr-2">
  <button onClick={toggleNavbar}>
        {isMenu?<X/>:<Menu/>}
  </button>
</div>

      </div>
      {isMenu && (
  <div
    className={`bg-neutral-900 flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform max-h-[500px] overflow-hidden ${
      isMenu ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
  >
    <div>
      <ul className="lg:hidden flex flex-col justify-center items-center space-y-4">
        {navItems.map((item, index) => (
          <li key={item.label} className="opacity-100 animate-fadeIn" >
            <a className="hover:text-gray-500 transition-opacity duration-700" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:hidden w-full p-12 flex justify-center space-x-6 items-center mt-2">
      <a href="#" className="py-1 px-2 border rounded-md transition-all duration-500 delay-200">
        Sign In
      </a>
      <a
        href="#"
        className="bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-2 rounded-md transition-all duration-500 delay-300"
      >
        Create an account
      </a>
    </div>
  </div>
)}

    </div>
  );
}

export default Header;
