import React from "react";
import BannerCart from "./BannerCart";
import Product from "./Product";
import Services from "../index/Services";

type Props = {};

const Cart = (props: Props) => {
  return (
    <>
      <div>
        <BannerCart />
        {/*--------------------------------End .banner-----------------------------------------------------*/}
        <Product />
        {/*---------------------------------- cartproduct --------------------------------------------------*/}
        <Services />
        {/*------------------------------------------------------------End .services------------------------------------------------*/}
      </div>
    </>
  );
};

export default Cart;
