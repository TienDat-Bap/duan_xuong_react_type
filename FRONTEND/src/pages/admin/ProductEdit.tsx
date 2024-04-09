import instance from "@/configs/axios";
import { IProduct } from "@/interfaces/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset // Sử dụng reset từ hook useForm
  } = useForm<IProduct>();

  const { mutate } = useMutation({
    mutationFn: async (product: IProduct) => {
      const response = await instance.put(`/products/${id}`, product);
      return response.data;
    },
    onSuccess: () => {
      alert("Cập nhật sản phẩm thành công");
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
      navigate("/admin/products");
    },
  });

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/products/${id}`);
        const productData = response.data;
        // Đặt lại giá trị của form dựa trên dữ liệu sản phẩm
        reset(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id, reset]);


  return (
    <div>
      <div className="py-3 d-flex align-items-center justify-content-between">
        <h1>Thêm mới sản phẩm</h1>
        <Link to="/admin/products" className="btn btn-primary">
          Danh sách sản phẩm
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Tên sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: true })}
          />
          {/* {errors.name && errors.name.type === 'required' && (
            <div className='form-text text-danger'>Không được để trống</div>
          )} */}
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Ảnh sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            {...register("image", { required: true })}
          />
          {/* {errors.image && errors.image.type === 'required' && (
            <div className='form-text text-danger'>Không được để trống</div>
          )} */}
          {errors.image && (
            <span className="text-danger">{errors.image.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            {...register("price")}
          />
          {/* {errors.price && errors.price.type === 'required' && (
            <div className='form-text text-danger'>Không được để trống</div>
          )}
          {errors.price && errors.price.type === 'validate' && (
            <div className='form-text text-danger'>Phải là số không âm</div>
          )} */}
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="countInStock" className="form-label">
            Số lượng sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="countInStock"
            {...register("countInStock")}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả sản phẩm
          </label>
          <textarea
            className="form-control"
            id="description"
            cols={30}
            rows={10}
            {...register("description")}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Giảm giá sản phẩm
          </label>
          <input
            type="number"
            className="form-control"
            id="discount"
            {...register("discount")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh mục sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            {...register("category")}
          />
          {errors.category && (
            <span className="text-danger">{errors.category.message}</span>
          )}
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue={false}
            id="flexCheckIndeterminate"
            {...register("featured")}
          />
          <label className="form-check-label" htmlFor="flexCheckIndeterminate">
            Indeterminate checkbox
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
