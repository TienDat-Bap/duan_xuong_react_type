import Services from "../index/Services";
import BannerShop from "./BannerShop";
import SortFilterPrice from "./SortFilterPrice";



const Shop = () => {

  return (
    <>
      <div>
        <BannerShop />
        {/*--------------------------------End .banner-----------------------------------------------------*/}
        <SortFilterPrice/>
        {/*--------------------------------End .SortFilterPrice-----------------------------------------------------*/}
        
        {/*------------------------------------------------------End .news------------------------------------------------*/}
        <Services />
        {/*----------------------------------------------------End .services----------------------------------------*/}
      </div>
    </>
  );
};

export default Shop;
