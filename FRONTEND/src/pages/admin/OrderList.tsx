import { getAllOrder } from '@/services/order'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const OrderList = (props: Props) => {
  const [search,setSearch] = useState("")

  const { data} = useQuery({
    queryKey: ['GET_ORDER'],
    queryFn: async () => {
        return  await getAllOrder()
    } 
})
const onHandleSearch = async(e)=>{
  setSearch(e.target.value.toLowerCase())
// const newProduct =  query?.data?.data.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
// console.log(newProduct)
}
console.log(data)

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h5">Quản lý order</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        <input className="form-control me-4 border border-3" type="text" placeholder="Search" aria-label="Search" style={{width:300}} onChange={(e)=>onHandleSearch(e)}/>
          {/* <div className="btn-group me-2">
            <Link
              to="/admin/products/add"
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Thêm sản phẩm
            </Link>
          </div> */}
        </div>
      </div>
      <div className="table-responsive">
    
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên khách hàng</th>
              <th scope="col">Số lượng sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Ngày tháng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {data?.map((item:any,i:number)=>{
               if(item.customerName.toLowerCase().includes(search)){
                return    <tr key={i}>
               <td>{i+1}</td>
               <td>
                {item.customerName}
               </td>
               <td>{item.items.reduce((totalQuantity, cartItem) => { 
    // Kiểm tra xem cartItem có tồn tại và có thuộc tính quantity không
    if (cartItem && cartItem.quantity) {
        return totalQuantity + cartItem.quantity;
    } else {
        return totalQuantity; // Nếu cartItem không có thuộc tính quantity, giữ nguyên tổng
    }
}, 0)}</td>
               <td>{item.totalPrice}đ</td>
               <td>{item.status}</td>
               <td>{item.createdAt}</td>
               <td width={200}>
                  {/* <button
                    className="btn btn-danger"
                    onClick={() => mutate(item._id)}
                  >
                    Xoá
                  </button> */}
                  <Link
                    to={`/admin/orderdetail/${item._id}/edit`}
                    className="btn btn-primary ms-2"
                  >
                    Chi tiết
                  </Link>
                </td>
             </tr>
               }
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderList