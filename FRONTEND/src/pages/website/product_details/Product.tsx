import { useLocalStorage } from "@/common/hooks/useStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import icons39 from "../../../assets/icons/39.svg";
import icons40 from "../../../assets/icons/40.svg";
import icons41 from "../../../assets/icons/41.svg";
import icons42 from "../../../assets/icons/42.svg";
import icons43 from "../../../assets/icons/43.svg";



const Product = ({product:pro}) => {
  const [quantity,setQuantity] = useState(1)
  const onHandleQuantity = (quantity:number)=>{
    // Kiểm tra nếu giá trị mới là một số và lớn hơn hoặc bằng 1 thì set giá trị mới vào state quantity
    if (!isNaN(quantity) && parseInt(quantity) >= 1) {
      setQuantity(parseInt(quantity));
    }
    
  }
  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onIncrease = () => {
    setQuantity(quantity + 1);
  };
  const queryClient = useQueryClient();
    const [user] = useLocalStorage("user", {});
    const userId = user?.user?._id;
    const { mutate } = useMutation({
      mutationFn: async ({ productId, quantity }: { productId: string; quantity: number }) => {
          const { data } = await axios.post(`http://localhost:8080/api/v1/carts/add-to-cart`, {
              userId,
              productId,
              quantity,
          });
          return data;
      },
      onSuccess: () => {
          queryClient.invalidateQueries({
              queryKey: ["cart", userId],
          });
      },
  });
  
  return (
    <div className="Productdetails">
      <div className="container">
        <div className="Productdetails-full">
          <div className="Productdetails-full-image">
            <div className="Productdetails-full-image__child">
              <a href="">
                <img src={pro.image} alt="" />
              </a>
              <a className="Productdetails-full-image__child__item" href="">
                <img src={pro.image} alt="" />
              </a>
              <a href="">
                <img src={pro.image} alt="" />
              </a>
              <a className="Productdetails-full-image__child__items" href="">
                <img src={pro.image} alt="" />
              </a>
            </div>
            <div className="Productdetails-full-imame__dad">
              <a href="">
                <img
                  src={pro.image}
                  alt=""
                  style={{
                    marginLeft: "31px",
                    width: "423px",
                    height: "500px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="Productdetails-full-content">
            <span className="Productdetails-full-content__title">
              {pro.name}
            </span>
            <br />
            <span className="Productdetails-full-content__price">
              ${pro.price}
            </span>
            <br />
            <img
              src={icons39}
              alt=""
              className="Productdetails-full-content__img "
            />
            <img
              style={{ marginBottom: "-5px" }}
              src={icons40}
              alt=""
              className="Productdetails-full-content__imgs me-2 "
            />
            <span>5 Customer Review</span>
            <p className="Productdetails-full-content__context mt-3">
              {pro.description}
            </p>
            <div className="Productdetails-full-content__size">
              <span className="Productdetails-full-content__size__title">
                Size
              </span>
              <br />
              <button className="Productdetails-full-content__size__l">
                L
              </button>
              <button className="Productdetails-full-content__size__x">
                XL
              </button>
              <button className="Productdetails-full-content__size__x">
                XS
              </button>
            </div>
            <div className="Productdetails-full-content__color">
              <span className="Productdetails-full-content__color__title">
                Color
              </span>
              <br />
              <button className="Productdetails-full-content__color__Violet" />
              <button className="Productdetails-full-content__color__black" />
              <button className="Productdetails-full-content__color__earthybrown" />
            </div>
            <div className="Productdetails-full-content__Addtocart">
              <div className="Productdetails-full-content__Addtocart__quantity">
                <button style={{marginLeft:"4px",border:"none",backgroundColor:"while"}} onClick={onDecrease}>-</button>
                <input type="text" value={quantity} min={1} style={{width:"25px",marginLeft:"35px",marginRight:"25px",fontSize:"18px",border:"none",backgroundColor:"white"}} onChange={(e)=>onHandleQuantity(e.target.value)}/>
                <button style={{border:"none",backgroundColor:"while"}} onClick={onIncrease}>+</button>
              </div>
              <button className="Productdetails-full-content__Addtocart__AddToCart">
                <Link to="/cart" onClick={() =>
                        mutate({ productId: pro._id, quantity: quantity })
                      }>Add To Cart</Link>
              </button>
              <button className="Productdetails-full-content__Addtocart__Compare">
                + Compare
              </button>
            </div>
            <div className="line">
              <hr />
            </div>
            <table className="Productdetails-full-content__table">
              <tbody>
                <tr>
                  <td className="title">SKU</td>
                  <td>
                    <span className="characters">:</span>
                    SS001
                  </td>
                </tr>
                <tr>
                  <td className="title">Category</td>
                  <td>
                    <span className="characters">:</span>Sofas
                  </td>
                </tr>
                <tr>
                  <td className="title">Tags</td>
                  <td>
                    <span className="characters">:</span> Sofa, Chair, Home,
                    Shop
                  </td>
                </tr>
                <tr>
                  <td className="title">Share</td>
                  <td>
                    <span className="characters">:</span>
                    <img src={icons41} />
                    <img className="image" src={icons42} />
                    <img src={icons43} className="img" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
