import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.main);

  return <>Your e-mail: {user.email}</>;
};

export default Dashboard;
