import React from "react";
import icons47 from "../../../assets/icons/47.svg";
import icons48 from "../../../assets/icons/48.svg";
import useCart from "@/common/hooks/useCart";
import { Link } from "react-router-dom";

type Props = {};

const Product = (props: Props) => {
  const { data, mutate, calculateTotal, isLoading, isError } = useCart();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if(data?.products?.length>0){
  return (
    <div className="cartProduct">
      <div className="container">
        <div className="cart">
          <div className="cart-details">
            <div className="cart-details__title">
              <span>Product</span>
              <span className="cart-details__title__a">Price</span>
              <span
                style={{ marginRight: "0px" }}
                className="cart-details__title__ab"
              >
                Quantity
              </span>
              <span style={{ marginLeft: "100px" }}>Subtotal</span>
            </div>
            {data?.products.map((product: any, index: number) => (
              <div key={index} className="cart-details__product mb-5">
                <img
                  className="cart-details__product__img1"
                  src={product.image}
                  width={108}
                  height={105}
                  style={{ borderRadius: "10px" }}
                  alt=""
                />
                <div className="cart-details__product__text">
                  <span
                    style={{ width: "175px", display: "inline-block" }}
                    className="cart-details__product__a"
                  >
                    {product.name}
                  </span>
                  <span
                    style={{ width: "171px", display: "inline-block" }}
                    className="cart-details__product__b"
                  >
                    ${product.price}
                  </span>
                  <span style={{ width: "168px", display: "inline-block" }}>
                    <button
                      style={{ border: "none" }}
                      onClick={() =>
                        mutate({
                          action: "DECREMENT",
                          productId: product.productId,
                        })
                      }
                    >
                      <i className="bi bi-chevron-double-down"></i>
                    </button>
                    <input
                      style={{ border: "none" }}
                      className="cart-details__product__c"
                      type="text"
                      value={product.quantity}
                    />
                    <button
                      style={{ border: "none" }}
                      onClick={() =>
                        mutate({
                          action: "INCREMENT",
                          productId: product.productId,
                        })
                      }
                    >
                      <i className="bi bi-chevron-double-up"></i>
                    </button>
                  </span>
                  <span
                    style={{ width: "100px", display: "inline-block" }}
                    className="cart-details__product__d"
                  >
                    ${product.price * product.quantity}
                  </span>
                </div>
                <button
                  style={{ border: "none" }}
                  onClick={() =>
                    mutate({
                      action: "REMOVE",
                      productId: product.productId,
                    })
                  }
                >
                  <img
                    src={icons48}
                    alt=""
                    className="cart-details__product__img2"
                    style={{ marginLeft: "0px" }}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="invoice_cart">
            <h6 className="invoice_cart__title">Cart Totals</h6>
            <div className="invoice_cart__text">
              <div className="containe d-flex justify-content-between ">
                <span
                  style={{ marginLeft: "65px", marginRight: "0px" }}
                  className="invoice_cart__a"
                >
                  Subtotal
                </span>
                <span
                  style={{ marginRight: "66px" }}
                  className="invoice_cart__b"
                >
                  ${calculateTotal()}
                </span>
              </div>
            </div>
            <div className="invoice_cart__text">
              <div className="container d-flex justify-content-between">
                <span
                  style={{ marginLeft: "50px" }}
                  className="invoice_cart__c"
                >
                  Total
                </span>
                <span
                  style={{ marginRight: "50px" }}
                  className="invoice_cart__d"
                >
                  ${calculateTotal()}
                </span>
              </div>
            </div>
            <button className="invoice_cart__btn">
              <a href="/checkout">Check Out</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}else{
  return (
    <div className="container mt-5">
    <div className="text-center">
       <div> <h1>Vui Lòng Thêm Sản Phẩm Vào Giỏ Hàng</h1>
       </div>
       <div>
       <Link to='/shop'>Quay lại shop</Link>
       </div>
    </div>
</div>
  )
}
};

export default Product;
