import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import icons1 from "../assets/icons/1.svg";
import icons2 from "../assets/icons/2.svg";
import icons3 from "../assets/icons/3.svg";
import icons4 from "../assets/icons/4.svg";
import useCart from "@/common/hooks/useCart";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa dữ liệu người dùng đã đăng nhập
    navigate("/signin"); // Chuyển hướng về trang đăng nhập
  };

  // Kiểm tra xem có dữ liệu người dùng trong localStorage hay không
  const user = localStorage.getItem("user");
  const { data } = useCart();

const cartNumber = data?.products.reduce((totalQuantity, cartItem) => { 
    // Kiểm tra xem cartItem có tồn tại và có thuộc tính quantity không
    if (cartItem && cartItem.quantity) {
        return totalQuantity + cartItem.quantity;
    } else {
        return totalQuantity; // Nếu cartItem không có thuộc tính quantity, giữ nguyên tổng
    }
}, 0);

  console.log(cartNumber)
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header__logo">
            <img src={Logo} alt="" />
          </Link>
          <div className="button-mobile">
            <button>=</button>
          </div>
          <nav className="main-menu">
            <ul className="main-menu__list">
              <li className="main-menu__item">
                <NavLink to="/" className="main-menu__link">
                  Home
                </NavLink>
              </li>
              <li className="main-menu__item">
                <NavLink to="/shop" className="main-menu__link">
                  Shop
                </NavLink>
              </li>
              <li className="main-menu__item">
                <NavLink to="/about" className="main-menu__link">
                  About
                </NavLink>
              </li>
              <li className="main-menu__item">
                <NavLink to="/contact" className="main-menu__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-items">
            <div className="header-item-user">
              {user ? (
                <button onClick={handleLogout} className="btn btn-danger">
                  {" "}
                  {/* Gửi cuộc gọi hàm */}
                  Đăng xuất
                </button>
              ) : (
                <span>
                  <a href="/signin">
                    <img src={icons1} />
                  </a>
                </span>
              )}
            </div>
            <div className="header-item-user">
              <span>
                <Link to="">
                  <img src={icons2} />
                </Link>
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <Link to="">
                  <img src={icons3} />
                </Link>
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <Link style={{textDecoration:"none"}} to="/cart">
                  <img src={icons4} /><span style={{color:"red",fontSize:"18px"}}>{cartNumber}</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
