import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const toggleNavbar = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="flex justify-between py-2 lg:text-sm">
      <div className="flex flex-shrink-0 items-center justify-center">
        <img className="h-10 w-10 p-2" src={logo} alt="Logo" />
        <span>VirtualR</span>
      </div>
      <ul className="hidden lg:flex items-center justify-center space-x-10">
        {navItems.map((item) => (
          <li key={item.label}>
            <a className="hover:text-orange-500 duration-300" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center justify-center space-x-12 pr-2">
        <a href="#" className="rounded-md border px-3 py-2 hover:border-orange-500 transition duration-300">Sign In</a>
        <a href="#" className="rounded-md border bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2">
          Create an account
        </a>
      </div>
      <div className="flex lg:hidden items-center justify-center pr-2 text-xl">
        <button onClick={toggleNavbar}>{isMenu ? <X /> : <Menu />}</button>
      </div>
    </div>
  
      {isMenu && (
        <div
          className={`flex max-h-[500px] transform flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${
            isMenu ? 'scale-100 opacity-100 ' : 'scale-95 opacity-0 '
          }`}
        >
          <div>
            <ul className="flex flex-col items-center justify-center space-y-4 lg:hidden">
              {navItems.map((item, index) => (
                <li key={item.label} className="animate-fadeIn opacity-100">
                  <a
                    className=" hover:text-orange-500 duration-300"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 px-8 flex w-full items-center justify-center space-x-6 p-12 lg:hidden">
            <a
              href="#"
              className="rounded-md border px-2 py-1 hover:border-orange-500 transition duration-300"
            >
              Sign In
            </a>
            <a
              href="#"
              className="rounded-md border bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-1 transition-all delay-300 duration-500"
            >
              Create an account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
