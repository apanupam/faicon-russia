import { Link, NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { IoCloseOutline, IoMenu } from "react-icons/io5";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Services", path: "/services" },
    { name: "Product List & Quantity", path: "/product-list" },
    { name: "Our Oil Fields", path: "/fields" },
    { name: "Port of Delivery & Logistics", path: "/logistics" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = ()=>{
    setIsMenuOpen(true);
  }

  const handleMenuClose = ()=>{
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white shadow-md relative">
      <nav className="xl:container mx-auto py-4 px-4 xl:px-0 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Falcon Logo"
          />
        </div>

        {/* Navigation Menu */}
        <ul className={`menu ${isMenuOpen ? 'open' : 'close'} lg:flex   space-x-8 text-gray-600`}>
          {navLinks.map((link) => (
            <li key={link.name} className="me-0 lg:me-3 mb-5 lg:mb-0">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors py-2 px-2 2xl:px-3 duration-200 text-sm leading-[130%] tracking-[0.02em] ${
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

        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <Link to='/contactus' className="bg-blue-900 text-white px-4 text-md lg:px-6 py-3 rounded-md hover:bg-blue-800 transition flex items-center cursor-pointer">
            Contact Us <MdArrowOutward  className="ms-2"/>
          </Link>

          {isMenuOpen ?
            <IoCloseOutline className="text-4xl text-black cursor-pointer" onClick={handleMenuClose}  />:
            <IoMenu className="lg:hidden block text-4xl text-black cursor-pointer" onClick={handleMenuOpen} />
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
