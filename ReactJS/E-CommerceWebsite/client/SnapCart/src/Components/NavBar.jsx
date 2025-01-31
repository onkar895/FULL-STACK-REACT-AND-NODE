import { useCallback, useContext, useMemo, useState } from 'react';
import { MdFavoriteBorder, MdOutlineShoppingBasket, MdMenu, MdClose } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import IconWithTooltip from "./IconWithTooltip";
import { GoSearch } from "react-icons/go";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandInput, setExpandInput] = useState(false);
  const [expandMobileInput, setExpandMobileInput] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()

  const cartContext = useContext(CartContext)

  const navItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "Products" },
    { id: 3, title: "About" },
    { id: 4, title: "Contact" }
  ];

  // Memoized toggle sidebar to prevent unnecessary re-renders
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => {
      // Toggle body overflow based on previous state
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  }, []);

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

  // Memoized styles to prevent unnecessary re-computations
  const styles = useMemo(() => ({

    logoName: "cursor-pointer font-extrabold text-3xl md:text-4xl tracking-widest transition-all duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3",

    listStyles: `transition-all hover:duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3 cursor-pointer hover:brightness-95 hover:text-gradient1 tracking-widest ${isSidebarOpen ? 'text-lg' : 'text-md'}`,

    inputStyles: (expandInput) => `block border border-slate-300 text-sm py-2 px-5 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm focus:shadow-md bg-gray-100 tracking-widest transition-all duration-300 ease-in-out ${expandInput ? 'w-[30vw]' : 'w-[20vw]'}`,

    mobileInputStyles: (expandMobileInput) => `block w-full border border-slate-300 text-sm py-2 px-5 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm focus:shadow-md bg-gray-100 tracking-widest transition-all duration-300 ease-in-out ${expandMobileInput ? 'h-12' : 'h-10'}`,

    activeStyles: "text-gradient1 font-semibold tracking-widest underline underline-offset-8",

  }), [])

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
          <div className={`${styles.logoName}`} onClick={() => navigate('/')}>
            <span className="text-gradient">Snap</span>
            <span className="text-gray-600 hover:text-black">Cart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
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
              <GoSearch className="text-xl" />
            </button>

            {/* Action Icons */}
            <div className="flex items-center gap-4 lg:gap-6 text-xl lg:text-2xl">
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
            <div className={`${styles.logoName} mb-8`} onClick={() => navigate('/')}>
              <span className="text-gradient">Snap</span>
              <span className="text-gray-600">Cart</span>
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
        {isSearchOpen && (
          <div className="mt-4 lg:hidden relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className={styles.mobileInputStyles(expandMobileInput)}
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