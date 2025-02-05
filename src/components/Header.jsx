import logo from "../assets/logo.png";
import { navItems } from "../constants";
function Header() {
  return (
    <div
      className="flex lg:text-sm mt-0 z-5 py-3  bg-neutral-600  backdrop-blur-lg justify-between border-b
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
        <div className=" hidden lg:flex justify-center space-x-12 items-center ">
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
      </div>
  );
}

export default Header;
