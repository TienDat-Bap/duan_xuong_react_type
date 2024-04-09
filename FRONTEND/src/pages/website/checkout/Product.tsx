import useCart from "@/common/hooks/useCart"; // Sửa câu lệnh import
import { useLocalStorage } from "@/common/hooks/useStorage";
import instance from "@/configs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  city: string;
  email: string;
  phone: string;
  payment: string;
};

const Product = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    city: "",
    email: "",
    phone: "",
    payment: ""
  });
  const { data, calculateTotal } = useCart();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { mutate } = useMutation({
    mutationFn: async (order: {
      userId: string;
      items: [];
      totalPrice: number;
      customerInfo: FormData;
    }) => {
      try {
        const { data } = await instance.post('/orders', order);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        throw new Error('Error placing order:',error);
      }
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({queryKey:["CARTS_KEY",userId]})
      alert("Bạn đặt hàng thành công");
      // navigate('/check-order')
    },
    onError: (error) => {
      console.error('Error placing order:', error);
      // Xử lý lỗi nếu cần
    }
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      userId,
      items: data?.products,
      totalPrice: calculateTotal(),
      customerInfo: formData
    });
  };
  return (
    <section className="invoiceProduct">
      <div className="container">
        <div className="invoice">
          <div className="invoice-information">
            <h2>Billing details</h2>
            <form action="" >
              <div className="invoice-information-firstlast">
                <div className="">
                  <label htmlFor="FirstName" className="FirstName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="customerName"
                    onChange={onChange}
                    className="FirstName__input"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="LastName" className="FirstName">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="LastName"
                    name="email"
                    onChange={onChange}
                    className="FirstName__input"
                    required
                  />
                </div>
              </div>
              <div className="title__Company">
                <label htmlFor="Company" className="Company">
                  City
                </label>
                <input
                  type="text"
                  id="Company"
                  name="city"
                  onChange={onChange}
                  className="Company__input"
                  required
                />
              </div>
              <div className="title__Company">
                <label htmlFor="Phone" className="Company">
                  Phone
                </label>
                <input
                  type="text"
                  id="Phone"
                  name="phone"
                  onChange={onChange}
                  className="Company__input"
                  required
                />
              </div>
            </form>
          </div>
          <div className="invoice-price">
            <div className="invoice-price-product">
              <div className="invoice-price-product-title">
                <h6 className="invoice-price-product-title__name">Product</h6>
                <h6 className="invoice-price-product-title__Subtotal">
                  Subtotal
                </h6>
              </div>
              {data?.products?.map((cart,i)=>(
              <div key={i} className="invoice-price-product-title-Asgaard">
                <span className="invoice-price-product-title-Asgaard__sofa">
                  {cart.name}
                </span>
                <span className="invoice-price-product-title-Asgaard__sofax">
                  x
                </span>
                <span className="invoice-price-product-title-Asgaard__sofa1">
                  {cart.quantity}
                </span>
                <span className="invoice-price-product-title-Asgaard__sofa2">
                {cart.price * cart.quantity}đ
                </span>
              </div>
              ))}



              <div className="invoice-price-product-title-Subtotal">
                <span className="invoice-price-product-title-Subtotal1">
                  Subtotal
                </span>
                <span className="invoice-price-product-title-Subtotal2">
                  {calculateTotal()}đ
                </span>
              </div>
              <div className="invoice-price-product-title-Total">
                <span className="invoice-price-product-title-Total2">
                  Total
                </span>
                <span className="invoice-price-product-title-Total3">
                  {calculateTotal()}đ
                </span>
              </div>
            </div>
            <div className="invoice-price-text">
              <label>
                <input type="radio" className="gender" name="payment" onChange={onChange} value={"Tiền mặt"}/>
                <span className="Directs">Tiền mặt</span>
              </label>
              <br />
              <label>
                <input type="radio" className="gender" name="payment" onChange={onChange} value={"Thanh Toán Online"} />
                <span className="Directs">Thanh toán online</span>
              </label>
              <p className="p2">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <span>privacy policy</span>.
              </p>
              <a href="">
                <button onClick={onSubmit}>Place order</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
