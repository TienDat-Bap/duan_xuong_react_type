import { useProductQuery } from "@/common/hooks/useProductQuery";
import { IProduct } from "@/interfaces/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [search,setSearch] = useState("")
  const queryClient = useQueryClient();
  const { data:products } = useProductQuery({
    _expand: "category"
  });

  
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      return (
        window.confirm("Bạn chắc chắn muốn xóa không") &&
        (await axios.delete(`http://localhost:8080/api/v1/products/${id}`))
      );
    },
    onSuccess: () => {
      alert("Xoá sản phẩm thành công");
      queryClient.invalidateQueries({ queryKey: ["PRODUCT_KEY"] });
    },
  });
  // Kiểm tra nếu data không tồn tại hoặc không có thuộc tính data
  if (!products || !products.data) {
    return <p>Loading...</p>;
  }
  console.log(products.data)
  const onHandleSearch = async(e)=>{
    setSearch(e.target.value.toLowerCase())
  // const newProduct =  query?.data?.data.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
  // console.log(newProduct)
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h5">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        <input className="form-control me-4 border border-3" type="text" placeholder="Search" aria-label="Search" style={{width:300}} onChange={(e)=>onHandleSearch(e)}/>
          <div className="btn-group me-2">
            <Link
              to="/admin/products/add"
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Thêm sản phẩm
            </Link>
          </div>
        </div>
      </div>
      <div className="table-responsive">
    
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {products?.data.map((item:IProduct,i:number)=>{
               if(item.name.toLowerCase().includes(search)){
                return    <tr key={i}>
               <td>{i+1}</td>
               <td>
                <img width={50} src={item.image} alt={item.name} />
               </td>
               <td>{item.name}</td>
               <td>{item.category?.name}</td>
               <td>{item.price}</td>
               <td>{item.featured ? "check" : "uncheck"}</td>
               <td>{item.countInStock}</td>
               <td width={200}>
                  <button
                    className="btn btn-danger"
                    onClick={() => mutate(item._id)}
                  >
                    Xoá
                  </button>
                  <Link
                    to={`/admin/products/${item._id}/edit`}
                    className="btn btn-primary ms-2"
                  >
                    Cập nhật
                  </Link>
                </td>
             </tr>
               }
            })}
            {/* {products.data.map((product: IProduct, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={product.image} alt={product.name} width={50} />
                </td>
                <td>
                  <span>{product.name}</span>
                </td>
                <td>
                  <span>{product.category}</span>
                </td>
                <td>{product.price}</td>
                <td>{product.featured ? "check" : "uncheck"}</td>
                <td>{product.countInStock}</td>
                <td width={200}>
                  <button
                    className="btn btn-danger"
                    onClick={() => mutate(product._id)}
                  >
                    Xoá
                  </button>
                  <Link
                    to={`/admin/products/${product._id}/edit`}
                    className="btn btn-primary ms-2"
                  >
                    Cập nhật
                  </Link>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
