import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

type Props = {};

const LayoutWebsite = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWebsite;
