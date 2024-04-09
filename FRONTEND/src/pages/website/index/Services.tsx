import React from "react";
import sanpham10 from "../../../assets/icons/10.svg";
import sanpham11 from "../../../assets/icons/11.svg";
import sanpham12 from "../../../assets/icons/12.svg";
import sanpham13 from "../../../assets/icons/13.svg";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="service-list">
          <div className="service-item">
            <img src={sanpham10} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*----------------------------------------------End service-item------------------------------------------*/}
          <div className="service-item">
            <img src={sanpham11} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*-----------------------------------------------End service-item-----------------------------------------*/}
          <div className="service-item">
            <img src={sanpham12} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*-----------------------------------------------End service-item------------------------------------------*/}
          <div className="service-item">
            <img src={sanpham13} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*--------------------------------------------------End service-item-----------------------------------------*/}
        </div>
      </div>
    </section>
  );
};

export default Services;
