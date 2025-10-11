import { Link, NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Other Fields", path: "/fields" },
    { name: "Port of Delivery & Logistics", path: "/logistics" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Falcon Logo"
          />
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600">
          {navLinks.map((link) => (
            <li key={link.name} className="me-3">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors py-2 px-3 duration-200 text-sm leading-[130%] tracking-[0.02em] ${
                    isActive
                      ? "bg-[#EDF0F5] font-medium"
                      : "font-normal"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to='/contactus' className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition flex items-center cursor-pointer">
          Contact Us <MdArrowOutward  className="ms-2"/>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
