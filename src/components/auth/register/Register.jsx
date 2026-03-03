import React from 'react';
import PickBazarLogo from "../../../assets/logo.png";
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registerSchema = yup.object({
  firstname: yup
    .string()
    .min(3, "First name must be at least 3 characters")
    .required("First name is required"),
  lastname: yup
    .string()
    .min(3, "Last name must be at least 3 characters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(registerSchema),
    });
    
    const registerUser = (data) => {
        console.log(data);
        navigate("/login");
    };
    
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={PickBazarLogo} alt="PickBazar_Logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
      </div>
    
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(registerUser)} className="space-y-6">
            <div>
            <label htmlFor="firstname" className="block text-sm/6 font-medium text-[#019376]">First Name</label>
            <div className="mt-2">
              <input id="firstname" type="text" name="firstname" {...register("firstname")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-[#019376] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#019376] focus:outline-2 focus:-outline-offset-2 focus:outline-[#019376] sm:text-sm/6" />
              <p className="mt-1 text-sm text-red-500">{errors?.firstname?.message}</p>
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm/6 font-medium text-[#019376]">Last Name</label>
            <div className="mt-2">
              <input id="lastname" type="text" name="lastname" {...register("lastname")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-[#019376] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#019376] focus:outline-2 focus:-outline-offset-2 focus:outline-[#019376] sm:text-sm/6" />
              <p className="mt-1 text-sm text-red-500">{errors?.lastname?.message}</p>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-[#019376]">Email address</label>
            <div className="mt-2">
              <input id="email" type="email" name="email" autoComplete="email" {...register("email")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-[#019376] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#019376] focus:outline-2 focus:-outline-offset-2 focus:outline-[#019376] sm:text-sm/6" />
              <p className="mt-1 text-sm text-red-500">{errors?.email?.message}</p>
            </div>
          </div>
    
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-[#019376]">Password</label>
              
            </div>
            <div className="mt-2">
              <input id="password" type="password" name="password" autoComplete="current-password" {...register("password")} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-[#019376] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#019376] focus:outline-2 focus:-outline-offset-2 focus:outline-[#019376] sm:text-sm/6" />
              <p className="mt-1 text-sm text-red-500">{errors?.password?.message}</p>
            </div>
          </div>
    
          <div>
            {/* onClick={() => {navigate("/login")}} */}
            <button type="submit" className="flex w-full justify-center rounded-md bg-[#019376] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#019376]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#019376]">Register</button>
          </div>
        </form>
    
        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Already a member?
          <a href="#" onClick={() => {navigate("/login")}} className="font-semibold text-[#019376]/80 hover:text-[#019376]/60"> Sign in </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
