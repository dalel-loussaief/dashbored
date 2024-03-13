import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdFeedback,
  MdMailOutline,
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
import { BsFillPersonFill } from 'react-icons/bs';
import { RiArticleFill } from 'react-icons/ri';
import { AiOutlineContacts } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { MdBuild } from 'react-icons/md';
const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">smart villa</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/User" className="menu-link">
                <span >
                <BsFillPersonFill size={20} />
                </span>
                <span>Gerer User</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Agent" className="menu-link">
                <span className="menu-link-icon">
                <BsFillPersonFill size={20} />
                </span>
                <span className="menu-link-text">Gerer Agent Immonilier</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Blog" className="menu-link">
                <span className="menu-link-icon">
                <RiArticleFill size={20} /> {/* Icône de blog */}
                </span>
                <span className="menu-link-text">Blog</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Property" className="menu-link">
                <span className="menu-link-icon">
                <BiHomeAlt size={20} /> {/* Icône de propriété */}
                </span>
                <span className="menu-link-text">Property</span>
              </Link>
            </li>
            {/* <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Customer</span>
              </Link>
            </li> */}
            <li className="menu-item">
              <Link to="/ListRDV" className="menu-link">
                <span className="menu-link-icon">
                <AiOutlineContacts size={20} /> {/* Icône de contact */}
                </span>
                <span className="menu-link-text">Contact </span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Service" className="menu-link">
                <span className="menu-link-icon">
                <MdBuild />
                </span>
                <span className="menu-link-text">Service</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ContactList" className="menu-link">
                <span className="menu-link-icon">
                <MdMailOutline size={20} /> 
                </span>
                <span className="menu-link-text">ContactList </span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/TestimonialList" className="menu-link">
                <span className="menu-link-icon">
                <MdFeedback size={20} /> 
                </span>
                <span className="menu-link-text">TestimonialList </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
       
            <li className="menu-item">
              <Link to="/Profil" className="menu-link">
                <span className="menu-link-icon">
                  {/* <MdOutlineSettings size={20} /> */}
                </span>
                <span className="menu-link-text">Profil</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  {/* <MdOutlineLogout size={20} /> */}
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;