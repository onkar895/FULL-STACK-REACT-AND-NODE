import { useState } from 'react';
import { MdFavoriteBorder, MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import IconWithTooltip from "./IconWithTooltip";
import { GoSearch } from "react-icons/go";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandInput, setExpandInput] = useState(false);
  const [expandMobileInput, setExpandMobileInput] = useState(false);

  const listStyles = `transition-all hover:duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3 cursor-pointer hover:text-blue-600 tracking-widest hover:underline hover:underline-offset-8 ${isSidebarOpen ? 'text-md' : 'text-sm'}`;

  const inputStyles = `block border border-slate-300 text-sm py-2 px-5 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm focus:shadow-md bg-gray-100 tracking-widest transition-all duration-300 ease-in-out ${expandInput ? 'w-[30vw]' : 'w-[20vw]'
    }`;

  const mobileInputStyles = `block w-full border border-slate-300 text-sm py-2 px-5 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm focus:shadow-md bg-gray-100 tracking-widest transition-all duration-300 ease-in-out ${expandMobileInput ? 'h-12' : 'h-10'
    }`;

  const navItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "Products" },
    { id: 3, title: "About" },
    { id: 4, title: "Contact" }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? 'hidden' : 'unset';
  };

  const handleSearchFocus = () => {
    setExpandInput(true);
  };

  const handleSearchBlur = () => {
    setExpandInput(false);
  };

  const handleMobileSearchFocus = () => {
    setExpandMobileInput(true);
  };

  const handleMobileSearchBlur = () => {
    setExpandMobileInput(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white fixed w-full py-7 px-4 md:px-8 lg:px-20 z-30">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleSidebar}>
            <MdMenu className="text-2xl" />
          </button>

          {/* Logo */}
          <div className="cursor-pointer font-extrabold text-2xl md:text-4xl tracking-widest transition-all duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3">
            <span className="text-gradient">Snap</span>
            <span className="text-gray-600 hover:text-black">Cart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.id} className={listStyles}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center gap-4 lg:gap-10">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className={inputStyles}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <GoSearch className="absolute right-3 text-lg text-slate-500 cursor-pointer" />
            </div>

            {/* Search Icon - Mobile */}
            <button
              className="lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <GoSearch className="text-xl" />
            </button>

            {/* Action Icons */}
            <div className="flex items-center gap-4 lg:gap-6 text-xl lg:text-2xl">
              <IconWithTooltip tooltip="Favorites" className="hidden sm:block">
                <MdFavoriteBorder />
              </IconWithTooltip>
              <IconWithTooltip tooltip="Cart">
                <MdOutlineShoppingCart />
              </IconWithTooltip>
              <IconWithTooltip tooltip="Profile">
                <AiOutlineUser />
              </IconWithTooltip>
            </div>
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <button onClick={toggleSidebar} className="mb-6">
              <MdClose className="text-3xl" />
            </button>
            <div className="transition-all duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3 cursor-pointer font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-widest mb-8">
              <span className="text-gradient">SHOP</span>
              <span className="text-gray-600">LANE</span>
            </div>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id} className={listStyles}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 lg:hidden relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className={mobileInputStyles}
              onFocus={handleMobileSearchFocus}
              onBlur={handleMobileSearchBlur}
            />
            <GoSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-slate-500" />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;