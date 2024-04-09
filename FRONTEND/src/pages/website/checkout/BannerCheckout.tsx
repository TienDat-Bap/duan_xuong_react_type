import React from "react";
import banner from "../../../assets/icons/banner.svg";
import icons25 from "../../../assets/icons/25.svg";
import icons49 from "../../../assets/icons/49.svg";

type Props = {};

const BannerCheckout = (props: Props) => {
  return (
    <section className="banner" style={{ marginBottom: 0, height: 400 }}>
      <div className="banner-container">
        <img src={banner} alt="" className="banner__img" />
        <div className="banner-title">
          <h2 className="banner-title__h2">
            <img src={icons49} alt="" />
          </h2>
          <span className="banner-title__span">Home </span>
          <sub>
            <img src={icons25} alt="" style={{ marginTop: "-10px" }} />
          </sub>
          <span className="banner-title__span">Checkout </span>
        </div>
      </div>
    </section>
  );
};

export default BannerCheckout;
