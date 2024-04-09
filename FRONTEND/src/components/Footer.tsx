import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-list">
          <div className="footer-item">
            <img src={logo} alt="" />
            <p className="footer__address">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="footer-nav">
            <div className="footer-item">
              <h2 className="footer__title">Links</h2>
              <ul className="footer-menu-list">
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Home
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Shop
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Blog
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h2 className="footer__title">Help</h2>
              <ul className="footer-menu-list">
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Payment Options
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Returns
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Privacy Policies
                  </Link>
                </li>
                <li className="footer-menu-item">
                  <Link to="" className="footer-menu-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <h2 className="footer__title">Newsletter</h2>
            <form action="" className="newsletter">
              <input
                type="text"
                className="newsletter__input"
                placeholder="Enter Your Email Address"
              />
              <button className="newsletter__btn">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="copyright">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
