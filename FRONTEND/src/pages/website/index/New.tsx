import { IProduct } from "@/interfaces/product";
import { Link } from "react-router-dom";
import shave from "../../../assets/icons/shave.svg";
import shave2 from "../../../assets/icons/shave2.svg";
import shave3 from "../../../assets/icons/shave3.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "@/common/hooks/useStorage";
import axios from "axios";

type ProductListProps = {
  products?: IProduct[]
  pagination?: {
      currentPage: number
      totalPages: number
      totalItems: number
  }
}


const New = ({ products, pagination }: ProductListProps) => {
  const { totalPages } = pagination || { totalPages: 1 }
  console.log(totalPages)
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
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">New</h2>
        </div>
        <div className="section-body">
          <div className="product-list">
          {products?.map((product: IProduct, index: number) => (
              <div key={index} className="product-item">
                <div className="product-image">
                  <img src={product.image} alt="" className="product__thumbnail" />
                  <span className="product-sale">{product.discount}%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <Link to="" className="product__link">
                      {product.name}
                    </Link>
                  </h3>
                  <Link to="" className="product__category">
                    Stylish cafe chair
                  </Link>
                  <div className="product-price">
                    <span className="product-price__new">${product.price}</span>
                    <span className="product-price__old mt-1">
                      <del>${product.price - product.price * (product.discount / 100)}</del>
                    </span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="product-action__quickview border-0 ">
                    <Link
                      className="product-action__quickview__item"
                      to={`/detail/${product._id}`}
                    >
                      Quick View
                    </Link>
                  </button>
                  <button className="product-action__addtocart border-0">
                    <Link
                      className="product-action__quickview__item"
                      to={`/cart`}
                      onClick={() =>
                        mutate({ productId: product._id, quantity: 1 })
                      }
                    >
                      Add To Cart
                    </Link>
                  </button>
                  <div className="product-actions-more">
                    <span className="product-action__share">
                      <img src={shave} alt="" />
                    </span>
                    <span className="product-action__compare px-2">
                      <img src={shave2} alt="" />
                    </span>
                    <span className="product-action__like">
                      <img src={shave3} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/*-----------------------------------------End .product-item----------------------------------------*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
