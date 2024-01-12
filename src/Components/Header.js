import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { MainContext } from "./MainContext";
import { ReactComponent as Hamburger } from "../icons/menu.svg";
import "../Components/style.css";

const Header = () => {
  const [data] = useContext(MainContext);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="heading-container">
        <div className="heading">
          <span className="vertical-text">The</span>
          <span className="capital-text">Siren</span>
        </div>
        <div className="nav-links">
          <Link to="/home" className="links">
            Home
          </Link>
          {data
            .filter((category) => category.id % 5 === 0)
            .map((items) => (
              <Link to={`/category/${items.category}`} className="links">
                {items.category}
              </Link>
            ))}
        </div>
        <div className="mobile-menu">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger style={{ width: "25px", height: "25px" }} />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li onClick={handleShowNavbar}>
                <Link to="/home" className="links">
                  Home
                </Link>
              </li>
              {data
                .filter((category) => category.id % 5 === 0)
                .map((items) => (
                  <li onClick={handleShowNavbar}>
                    <Link to={`/category/${items.category}`} className="links">
                      {items.category}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
    </>
  );
};
export default Header;
