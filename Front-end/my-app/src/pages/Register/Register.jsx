import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const Register = () => {
    const {register, 
           handleSubmit,
           formState: {errors, isValid},
           watch,
           } = useForm({
            defaultValues: {
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            mode: "onChange",
    } );

    const submitHandler = () => {};


  return (
    <>
      <div className="font-[sans-serif] text-[#333] mt-4 p-4 relative">
  <div className="max-w-md w-full mx-auto relative z-50">
    <div className="text-center mb-8">
        <a href="/" className="w-16 dark:text-[#007bff] font-bold text-3xl">New <span>W</span>aves</a>
    </div>
    <div className="border border-gray-300 bg-white rounded-md p-8">
      <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-6">
          <h3 className="text-2xl font-extrabold text-center">Register</h3>
        </div>
        <div className="space-y-6">
          <div>
            <label className="text-sm mb-2 block">Name</label>
            <div className="relative flex items-center">
              <input
                name="name"
                type="text"
                {...register("name",{
                    minLength: {
                        value: 3,
                        message: "Name must be at least 3 character",
                    },
                    required:{
                        value: true,
                        message: "Name is required"
                    }
                })}
                className="bg-white border border-gray-300 w-full text-sm px-5 py-2.5 rounded outline-blue-500"
                placeholder="Enter name"
              />
            <FaRegUser className="w-4 h-4 absolute right-4"/>
            </div>
              {errors.name?.message && (
                <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
              )}
          </div>
          <div>
            <label className="text-sm mb-2 block">Email</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                {...register("email")}
                required=""
                className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                placeholder="Enter email"
              />
            <MdMailOutline className="w-4 h-4 absolute right-4"/>
            </div>
          </div>
          <div>
            <label className="text-sm mb-2 block">Password</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                {...register("password")}
                required=""
                className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                placeholder="Enter password"
              />
             <FaRegEye className="w-4 h-4 absolute right-4"/>
            </div>
          </div>
          <div>
            <label className="text-sm mb-2 block">Confirm Password</label>
            <div className="relative flex items-center">
              <input
                name=" confirmPassword"
                type="password"
                {...register("confirmPassword")}
                required=""
                className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                placeholder="Confirm password"
              />
             <FaRegEye className="w-4 h-4 absolute right-4"/>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-3 block text-sm">
              I accept the{" "}
              
              <Link to='/Terms-and-conditions' className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions
              </Link>
            </label>
          </div>
        </div>
        <div className="!mt-10">
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Create an account
          </button>
        </div>
        <p className="text-sm mt-6 text-center">
          Already have an account?{" "}
          
          <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1">
            Login here
          </Link>
        </p>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default Register
