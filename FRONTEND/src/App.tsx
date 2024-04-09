import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import Index from "./pages/website/index/Index";
import Shop from "./pages/website/shop/Shop";
import ProductDetails from "./pages/website/product_details/ProductDetails";
import Cart from "./pages/website/cart/Cart";
import Checkout from "./pages/website/checkout/Checkout";
import Signin from "./components/Signin";
import Notfound from "./components/Notfound";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import Signup from "./components/Signup";
import Prote from "./components/Prote";
import Order from "./components/Order";
import OrderList from "./pages/admin/OrderList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Index />} />
          <Route path="shop" element={<Shop />} />
          <Route path="detail/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path='check-order' element={<Order />} />
        </Route>
        <Route path="admin" element={<Prote><LayoutAdmin /></Prote>}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="order" element={<OrderList />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEdit />} />
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
