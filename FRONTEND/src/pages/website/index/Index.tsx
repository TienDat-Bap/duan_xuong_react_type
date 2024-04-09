import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import New from "./New";
import Shop from "./Shop";
import Blog from "./Blog";
import Services from "./Services";
import { useProductQuery } from "@/common/hooks/useProductQuery";
import { IProduct } from "@/common/types/product";


const index = () => {
  const { data } = useProductQuery({ _limit: 4 })
  const featuredProducts = data?.data.filter((product: IProduct) => product.featured === true)
  return (
    <>
      <div>
        {<Banner />}
        {/*--------------------------------End .banner-----------------------------------------------------*/}
        {<New products={featuredProducts} />}
        <div className="container">
          <hr />
        </div>
        {/*------------------------------------------------------End .news------------------------------------------------*/}
        {<Shop />}
        {/*----------------------------------------------End .shop--------------------------------------------*/}
        {<Blog />}
        {/*------------------------------------------------End .blog----------------------------------------------------*/}
        {<Services />}
        {/*------------------------------------------------------------End .services-------------------------------------*/}
      </div>
    </>
  );
};

export default index;
