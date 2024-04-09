import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Prote = ({ children }) => {
  const { user } = JSON.parse(localStorage.getItem("user"));
  if (user.role != "admin") {
    alert("Bạn không có quyền truy cập");
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
};

export default Prote;
