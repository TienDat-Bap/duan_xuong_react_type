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

type Props = {};
const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .required(),
  password: Joi.string().min(6).required(),
});
const Signin = (props: Props) => {
  // const [, setUser] = useLocalStorage("user", {});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iuser>({
    resolver: joiResolver(signinSchema),
  });
  const { mutate } = useMutation({
    mutationFn: async (formData: Iuser) => {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/v1/auth/signin",
          formData
        );
        // setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        alert("Đăng nhập thành công");
        navigate("/"); // Chuyển hướng sau khi đăng nhập thành công
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
        <div className="container">
          <a style={{ position: "absolute", top: "80px" }} href="/signup">
            <button className="btn btn-danger">Register</button>
          </a>
          <a href="/">
            <img className="cancel" src={icons51} alt="" />
          </a>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <button>Login</button>
          </form>
          <div className="link">
            <a href="">
              <img className="link__one" src={icons52} alt="" />
            </a>
            <a href="">
              <img src={icons53} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
