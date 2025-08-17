import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 60) {
        setShow(false); // scrolling down → hide header
      } else {
        setShow(true); // scrolling up → show header
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-[#fff]/70 backdrop-blur-md shadow-lg 
        transform transition-transform duration-500 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <header className="flex justify-between items-center px-8 py-4 text-[#000]">
        
        {/* Logo Section */}
        <div className="flex gap-3 items-center group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 h-10 text-orange-600 transform transition-transform duration-500 group-hover:scale-110"
            fill="currentColor"
          >
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"></path>
          </svg>
          <h1 className="text-2xl font-extrabold tracking-wide animate-fadeIn">
            Solicio
          </h1>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/contact", label: "Contact Us" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/profile", label: "Profile" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-300
                 ${isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-600"}
                 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
                 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Header;
