import React from "react";
import MenuItem from "../MenuItem";
import style from "./style.module.css";

const MenuList = ({ auth }) => {
  return (
    <ul className={style.menu_list}>
      {auth.map((item) => (
        <MenuItem key={item.href} {...item} />
      ))}
    </ul>
  );
};

export default MenuList;
