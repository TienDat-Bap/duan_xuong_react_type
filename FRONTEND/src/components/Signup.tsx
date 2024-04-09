import React from "react";
import icons51 from "../assets/icons/51.svg";
import icons52 from "../assets/icons/52.svg";
import icons53 from "../assets/icons/btn_google.svg";
import Joi from "joi";
import { useLocalStorage } from "@/common/hooks/useStorage";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Iuser } from "@/interfaces/user";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type userType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
};
const signinSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
  avatar: Joi.string().uri(),
});
const Signup = (props: Props) => {
  // const [, setUser] = useLocalStorage("user", {});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userType>({
    resolver: joiResolver(signinSchema),
  });
  const { mutate } = useMutation({
    mutationFn: async (formData: Iuser) => {
      try {
        await axios.post("http://localhost:8080/api/v1/auth/signup", formData);
        alert("Đăng ký thành công");
        navigate("/signin"); // Chuyển hướng sau khi đăng nhập thành công
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log(error),
  });
  const onSubmit = (formData: Iuser) => {
    mutate(formData);
  };
  return (
    <>
      <div className="signin">
        <div style={{ height: "auto" }} className="container">
          <a
            style={{
              marginLeft: "700px",
              marginTop: "20px",
              display: "inline-block",
            }}
            href="/signin"
          >
            <button className="btn btn-danger">Login</button>
          </a>
          <h2>Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="title_usename">
              <label htmlFor="name" className="Username">
                name:
              </label>
              <br />
              <input
                type="text"
                id="name"
                className="Username__input"
                placeholder="name"
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name && (
                <div className="text-danger">{errors.name.message}</div>
              )}
            </div>
            <div className="title_usename">
              <label htmlFor="email" className="Username">
                Email:
              </label>
              <br />
              <input
                type="email"
                id="email"
                className="Username__input"
                placeholder="Email"
                {...register("email", { required: true, minLength: 3 })}
              />
              {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
            </div>
            <div className="title_usename">
              <label htmlFor="Password" className="Username">
                Password:
              </label>
              <br />
              <input
                type="password"
                id="Password"
                className="Username__input"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <div className="text-danger">{errors.password.message}</div>
              )}
            </div>
            <div className="title_usename">
              <label htmlFor="confirmPassword" className="Username">
                confirmPassword:
              </label>
              <br />
              <input
                type="password"
                id="confirmPassword"
                className="Username__input"
                placeholder="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.confirmPassword && (
                <div className="text-danger">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <div className="title_usename">
              <label htmlFor="avatar" className="Username">
                avatar:
              </label>
              <br />
              <input
                type="text"
                id="avatar"
                className="Username__input"
                placeholder="avatar"
                {...register("avatar", { required: true, minLength: 3 })}
              />
              {errors.avatar && (
                <div className="text-danger">{errors.avatar.message}</div>
              )}
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
