import React from "react";
import { Link } from "react-router-dom";
import sanpham21 from "../../../assets/icons/21.svg";
import sanpham22 from "../../../assets/icons/22.svg";
import sanpham23 from "../../../assets/icons/23.svg";
import sanpham24 from "../../../assets/icons/24.svg";

type Props = {};

const Blog = (props: Props) => {
  return (
    <section className="blog">
      <div className="container">
        <div className="section-heading section-blog-heading">
          <h2 className="section-heading__title">Blog</h2>
        </div>
        <div className="section-body">
          <div className="post-list">
            <div className="post-item">
              <div className="post-image">
                <Link to="">
                  <img src={sanpham21} alt="" className="post__thumbnail" />
                </Link>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <Link to="" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </Link>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <Link to="" className="post__readmore">
                  Readmore
                  <sub>
                    <img
                      className="post__readmore_img"
                      src={sanpham24}
                      alt=""
                    />
                  </sub>
                </Link>
              </div>
            </div>
            {/*------------------------------------------------End .post-item---------------------------------------*/}
            <div className="post-item">
              <div className="post-image">
                <Link to="">
                  <img src={sanpham22} alt="" className="post__thumbnail" />
                </Link>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <Link to="" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </Link>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <Link to="" className="post__readmore">
                  Readmore
                  <sub>
                    <img
                      className="post__readmore_img"
                      src={sanpham24}
                      alt=""
                    />
                  </sub>
                </Link>
              </div>
            </div>
            {/*------------------------------------------End .post-item--------------------------------------------*/}
            <div className="post-item">
              <div className="post-image">
                <Link to="">
                  <img src={sanpham23} alt="" className="post__thumbnail" />
                </Link>
              </div>
              <div className="post-info">
                <h3 className="post__title">
                  <Link to="" className="post__link">
                    THE ULTIMATE SOFA BUYING GUIDE
                  </Link>
                </h3>
                <p className="post__excerpt">
                  The versatility of our living space is more crucial than ever.
                  But buying a sofa might be a difficult undertaking. Your needs
                  and the size of your living area will determine everything,
                  However, don’t worry, were are here to help you
                </p>
                <Link to="" className="post__readmore">
                  Readmore
                  <sub>
                    <img
                      className="post__readmore_img"
                      src={sanpham24}
                      alt=""
                    />
                  </sub>
                </Link>
              </div>
            </div>
            {/*------------------------------------------End .post-item--------------------------------------------*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
