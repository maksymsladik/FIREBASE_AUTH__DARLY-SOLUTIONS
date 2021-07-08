import React from "react";
import { firebaseApp } from "../../firebase";
import MenuList from "./components/MenuList";
import BtnLogOut from "./components/BtnLogOut";
import notAuthUser from "./components/notAuth.json";
import authUser from "./components/auth.json";
import style from "./style.module.css";

const Header = ({ auth }) => {
  const onLogOut = () => {
    firebaseApp.auth().signOut();
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <MenuList auth={!Object.values(auth).length ? notAuthUser : authUser} />

        {Object.values(auth).length ? <BtnLogOut onLogOut={onLogOut} /> : null}
      </div>
    </header>
  );
};

export default Header;
