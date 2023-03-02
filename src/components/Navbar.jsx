import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "./../assets/icons/tech-lift.svg";
import logo2 from "./../assets/icons/nft-wealth.svg";

const Navbar = () => {
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
  };
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <nav
      className={`fixed w-full mx-auto lg:px-auto sm:px-20 transition duration-500 flex justify-center h-fit`}
    >
      <div
        className={`flex w-full fixed md:static max-w-[1200px] mx-auto justify-between transition duration-500 backdrop-blur h-16 px-4 md:px-0 z-20`}
      >
        {/* Brand Logo */}
        <div className="flex my-auto cursor-pointer">
          <Link to="/" className={``}>
            {pathname === "/" ? (
              <img src={logo1} alt="NFT Wealth" />
            ) : (
              <img src={logo2} alt="NFT Wealth" />
            )}
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex font-body my-auto items-center justify-between w-full max-w-[500px]">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/connect"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Connect Wallet
          </NavLink>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            About
          </NavLink>
        </div>

        {/* Mobile nav & toggler */}
        <div className="flex md:hidden">
          <button
            onClick={showMenu}
            className="flex pt-[1rem] absolute right-2 md:hidden p-3 transition active:scale-90"
          >
            Open
          </button>
          <div
            ref={navRef}
            className={`flex translate-x-[100%] z-10 md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0 backdrop-blur`}
          >
            <div
              className="flex justify-center mb-4 mt-[50%]"
              onClick={showMenu}
            >
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
                end
              >
                Dashboard
              </NavLink>
            </div>
            <div className="flex justify-center my-4" onClick={showMenu}>
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
              >
                Connect Wallet
              </NavLink>
            </div>
            <div className="flex justify-center my-4" onClick={showMenu}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 underline decoration-2 underline-offset-4"
                    : "px-4 hover:underline decoration-2 underline-offset-4"
                }
              >
                About
              </NavLink>
            </div>
            <button
              onClick={showMenu}
              className="flex absolute right-2 md:hidden p-3 ease-in transition duration-500 active:scale-90"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
