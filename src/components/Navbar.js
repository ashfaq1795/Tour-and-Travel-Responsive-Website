import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const Navbar = () => {
  const { user, logOut } = useUserAuth();
  const [clicked, setClicked] = useState(false);
  const logoutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickHandler = () => {
    setClicked(!clicked);
  };
  const navIconHandler = () => {
    setClicked(false);
  };
  //used for changing logout and login title in side bar based on user variable.
  const updatedNavbarItems = NavbarItems.map((NavbarItem) => {
    if (NavbarItem.title === "login/logout") {
      return {
        ...NavbarItem,
        title: user ? "Logout" : "Login"
      };
    }
    return NavbarItem;
  });
  return (
    <nav className={classes.NavbarItems}>
      <h1 className={classes.NavbarLogo}>Trippy</h1>
      <div className={classes.Hamburger} onClick={onClickHandler}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul
        className={
          clicked ? `${classes.NavMenu} ${classes.active}` : classes.NavMenu
        }
      >
        {updatedNavbarItems.map((NavbarItem, index) => {
          return (
            <li key={index} onClick={navIconHandler}>
              <Link to={NavbarItem.url} className={classes[NavbarItem.cName]}>
                <i className={NavbarItem.icon}></i>
                {NavbarItem.title}
              </Link>
            </li>
          );
        })}
        {user ? (
          <Link to="/login">
            <button className={classes.btn} onClick={logoutHandler}>
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className={classes.btn}>Login</button>
          </Link>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
