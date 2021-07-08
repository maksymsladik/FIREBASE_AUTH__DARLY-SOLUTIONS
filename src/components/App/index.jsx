import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../modules/Loader";
import Router from "../router";
import Header from "../static/Header";
import Footer from "../static/Footer";
import { setUser, setLoaderStatus } from "./redux/reducer";
import { firebaseApp } from "../firebase";
import style from "./style.module.css";

const App = () => {
  const { user, loader } = useSelector((state) => state.main);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderStatus(true));

    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setLoaderStatus(false));
      } else {
        dispatch(setUser({}));
        setTimeout(() => {
          dispatch(setLoaderStatus(false));
        }, 500);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      {loader && <Loader />}

      <Header auth={user} />
      <div className={style.container}>
        <Router auth={user} />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
