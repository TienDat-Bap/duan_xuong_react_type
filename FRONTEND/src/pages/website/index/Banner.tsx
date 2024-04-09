import React from "react";
import banner from "../../../assets/icons/banner.svg";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="banner">
      <div className="banner-container">
        <img src={banner} alt="" className="banner__img" />
        <div className="banner-title">
          <h2 className="banner-title__h2">Trang chủ</h2>
          <span className="banner-title__span">Home</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
