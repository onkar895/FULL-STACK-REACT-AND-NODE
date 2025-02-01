/* eslint-disable react/prop-types */
import { useCallback, useContext, useMemo, useState } from 'react';
import { MdFavoriteBorder, MdOutlineShoppingBasket, MdMenu, MdClose, MdNightlight, MdLightMode } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import IconWithTooltip from "./IconWithTooltip";
import { GoSearch } from "react-icons/go";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const NavBar = ({ isDark, toggleDarkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandInput, setExpandInput] = useState(false);
  const [expandMobileInput, setExpandMobileInput] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const cartContext = useContext(CartContext);

  const navItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "Products" },
    { id: 3, title: "About" },
    { id: 4, title: "Contact" }
  ];

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  }, []);

  const handleSearchFocus = () => setExpandInput(true);
  const handleSearchBlur = () => setExpandInput(false);
  const handleMobileSearchFocus = () => setExpandMobileInput(true);
  const handleMobileSearchBlur = () => setExpandMobileInput(false);

  const styles = useMemo(() => ({
    logoName: "cursor-pointer font-extrabold text-2xl md:text-4xl tracking-widest transition-all duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3",

    listStyles: `transition-all hover:duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3 cursor-pointer hover:brightness-95 hover:text-gradient1 tracking-widest dark:hover:brightness-125 ${isSidebarOpen ? 'text-lg' : 'text-md'}`,

    inputStyles: (expand) => `block border border-slate-300 dark:border-slate-600 text-sm py-2 px-5 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm focus:shadow-md bg-gray-100 dark:bg-slate-700 dark:text-white tracking-widest transition-all duration-300 ease-in-out ${expand ? 'w-[30vw]' : 'w-[25vw]'}`,

    mobileInputStyles: (expand) => `block w-full border border-slate-300 dark:border-slate-600 text-sm py-2 px-5 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm focus:shadow-md bg-gray-100 dark:bg-slate-700 dark:text-white tracking-widest transition-all duration-300 ease-in-out ${expand ? 'h-12' : 'h-10'}`,

    activeStyles: "text-gradient1 dark:brightness-125 font-semibold tracking-widest underline underline-offset-8",

  }), [isSidebarOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed w-full py-4 md:py-7 px-4 md:px-10 z-30 bg-white dark:bg-slate-900 transition-colors duration-300 border-b border-gray-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="xl:hidden" onClick={toggleSidebar}>
            <MdMenu className="text-2xl" />
          </button>

          {/* Logo */}
          <div className={`${styles.logoName}`} onClick={() => navigate('/')}>
            <span className="text-gradient">Snap</span>
            <span className="text-gray-600 hover:text-black dark:text-white">Cart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.id} className={styles.listStyles}>
                  <NavLink to={item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`} className={({ isActive }) =>
                    `${isActive ? styles.activeStyles : ""}`
                  }>
                    {item.title}
                  </NavLink>
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
                className={styles.inputStyles(expandInput)}
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
              <GoSearch className="text-xl text-slate-500 dark:text-slate-300 dark:hover:text-white hover:text-black" />
            </button>

            {/* Action Icons */}
            <div className="flex items-center gap-4 xl:gap-6 text-xl lg:text-2xl">
              <IconWithTooltip tooltip="Favorites" className="hidden sm:block">
                <MdFavoriteBorder
                  onClick={() => navigate('/wishlist')}
                  className={location.pathname === "/wishlist" ? "text-pink-600 font-bold" : ""}
                />
              </IconWithTooltip>
              <IconWithTooltip tooltip="Cart">
                <NavLink to="/cart"
                  className={({ isActive }) => (isActive ? "text-pink-600 font-bold" : "")}>
                  <div className='relative'>
                    <span className='absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5 py-0.5'>
                      {cartContext.cartLength}
                    </span>
                    <MdOutlineShoppingBasket />
                  </div>
                </NavLink>
              </IconWithTooltip>
              <IconWithTooltip tooltip="Profile">
                <AiOutlineUser
                  onClick={() => navigate('/profile')}
                  className={location.pathname === "/profile" ? "text-pink-600 font-bold" : ""}
                />
              </IconWithTooltip>
              <div onClick={toggleDarkMode} className='cursor-pointer text-slate-500 dark:text-slate-300 hover:dark:text-white hover:text-black'>
                {
                  isDark ? <MdLightMode /> : <MdNightlight />
                }
              </div>
            </div>
          </div>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity xl:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-500 ease-in-out xl:hidden dark:bg-slate-900 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6">
            <div className='flex items-center justify-between'>
              <div className={`${styles.logoName} mb-8`} onClick={() => navigate('/')}>
                <span className="text-gradient">Snap</span>
                <span className="text-gray-600 dark:text-white">Cart</span>
              </div>
              <button onClick={toggleSidebar} className="mb-7">
                <MdClose className="text-3xl" />
              </button>
            </div>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id} className={styles.listStyles}>
                  <NavLink to={item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`} className={({ isActive }) =>
                    `${isActive ? styles.activeStyles : ""}`
                  }>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out xl:hidden ${isSearchOpen ? "max-h-20 opacity-100 py-2" : "max-h-0 opacity-0 py-0"}`}>
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className={styles.mobileInputStyles(expandMobileInput)}
              onFocus={handleMobileSearchFocus}
              onBlur={handleMobileSearchBlur}
            />
            <GoSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-slate-500" />
          </div>
        </div>

      </nav>
    </>
  );
};

export default NavBar;