import React from "react";
import BannerCheckout from "./BannerCheckout";
import Services from "../index/Services";
import Product from "./Product";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <>
      <div>
        <BannerCheckout />
        {/*--------------------------------End .banner-----------------------------------------------------*/}
        <Product />
        {/*-------------------------------- invoiceProduct --------------------------------------------------*/}
        <Services />
        {/*------------------------------------------------------------End .services------------------------------------------------*/}
      </div>
    </>
  );
};

export default Checkout;
