import React from "react";
import { Link } from "react-router-dom";
import sanpham17 from "../../../assets/icons/17.svg";
import sanpham18 from "../../../assets/icons/18.svg";
import sanpham19 from "../../../assets/icons/19.svg";
import sanpham20 from "../../../assets/icons/20.svg";

type Props = {};

const Shop = (props: Props) => {
  return (
    <section className="shop">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">Shop</h2>
        </div>
        <div className="section-body">
          <div className="shops">
            <div className="shop-item">
              <Link to="" className="shop__link">
                <img src={sanpham17} alt="" className="shop__image" />
              </Link>
            </div>
            <div className="shop-item">
              <Link to="" className="shop__link">
                <img src={sanpham18} alt="" className="shop__image" />
              </Link>
            </div>
            <div className="shop-item">
              <Link to="" className="shop__link">
                <img src={sanpham19} alt="" className="shop__image" />
              </Link>
            </div>
            <div className="shop-item">
              <Link to="" className="shop__link">
                <img src={sanpham20} alt="" className="shop__image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
