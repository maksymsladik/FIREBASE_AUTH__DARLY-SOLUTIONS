import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const MenuItem = ({ name, href }) => {
  return (
    <li>
      <NavLink
        exact
        to={href}
        className={style.menu_item}
        activeClassName={style.active}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default MenuItem;
