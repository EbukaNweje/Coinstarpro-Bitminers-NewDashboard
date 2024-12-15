import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Signup = () => {
    const Nav = useNavigate()
  const User = z
    .object({
      firstName: z.string().min(1, { message: "First Name is required" }),
      lastName: z.string().min(1, { message: "Last Name is required" }),
      userName: z.string().min(1, { message: "User Name is required" }),
      email: z.string().email({ message: "Must be a valid email" }),
      phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
      country: z.string().min(1, { message: "Country is required" }),
      password: z
        .string()
        .min(1, { message: "Password is required" })
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/, {
          message:
            "Password must be 8 characters long, include an uppercase and special character (!@#$%^&*).",
        }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" }),
      check: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"], 
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async (data) => {
    Nav('/')
    console.log(data);
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-12 bg-[#f8f8f8] phone:hidden px-48 flex items-center justify-between">
        <div className="w-max flex items-center gap-4">
          <FaTwitter />
          <FaTelegram />
          <FaInstagram />
        </div>
        <div className="w-max flex items-center gap-5 text-sm">
          <div className="w-max h-max cursor-pointer">Help</div>
          <div className="w-max h-max cursor-pointer">Support</div>
          <div className="w-max h-max cursor-pointer">Signup</div>
          <div className="w-max h-max cursor-pointer">Register</div>
        </div>
      </div>
      <div className="w-full h-max mt-28 mb-10 bg-[#ffffff] flex items-center justify-center flex-col gap-5">
        <p className="text-xl text-[#5d3891] font-semibold">Register an account</p>
        <form
          className="w-max phone:w-full phone:px-4 h-max flex flex-col items-center gap-5"
          onSubmit={handleSubmit(Onsubmit)}
        >
          <input
            type="text"
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            placeholder="First Name *"
            {...register("firstName")}
          />
          {errors?.firstName && <span style={{ color: "red" }}>{errors.firstName.message}</span>}

          <input
            type="text"
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            placeholder="Last Name *"
            {...register("lastName")}
          />
          {errors?.lastName && <span style={{ color: "red" }}>{errors.lastName.message}</span>}

          <input
            type="text"
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            placeholder="Username *"
            {...register("userName")}
          />
          {errors?.userName && <span style={{ color: "red" }}>{errors.userName.message}</span>}

          <input
            type="email"
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            placeholder="Email *"
            {...register("email")}
          />
          {errors?.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

          <input
            type="text"
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            placeholder="Phone *"
            {...register("phone")}
          />
          {errors?.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}

          <select
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            {...register("country")}
          >
            <option value="">Select country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {errors?.country && <span style={{ color: "red" }}>{errors.country.message}</span>}

          <input
            type="password"
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            placeholder="Password *"
            {...register("password")}
          />
          {errors?.password && <span style={{ color: "red" }}>{errors.password.message}</span>}

          <input
            type="password"
            className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
            placeholder="Confirm Password *"
            {...register("confirmPassword")}
          />
          {errors?.confirmPassword && <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>}

          <div className="w-[33rem] phone:w-full flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer"
              {...register("check")}
            />
            <label className="ml-2 phone:w-full text-sm text-gray-500 flex gap-2">
              I accept and agree with the terms
              <a href="#" className="text-[#a286f4]">
                Terms and Conditions
              </a>
              and
              <a href="#" className="text-[#a286f4]">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors?.check && <span style={{ color: "red" }}>{errors.check.message}</span>}

          <button
            type="submit"
            className="w-40 h-12 rounded bg-[#a286f4] text-white text-sm font-bold transition-all duration-500 hover:bg-white hover:border-2 hover:text-[#a286f4] hover:border-[#a286f4]"
          >
            Register
          </button>

          <div className="w-max phone:w-full phone:justify-between phone:gap-0 h-max flex gap-20 text-sm text-[#a286f4]">
            <div className="w-max h-max cursor-pointer">Already registered?</div>
            <NavLink to={"/"}>
              <div className="w-max h-max cursor-pointer">Login here</div>
            </NavLink>
          </div>
        </form>
      </div>
      <div className="w-full phone:h-24 phone:gap-3 phone:flex-col phone:justify-center phone:py-4 h-14 text-white px-48 flex items-center justify-between bg-[#0e1120]">
        <div className="w-max flex items-center gap-4">
          <p>Copyright © 2024. All rights reserved Crypto-Crest</p>
        </div>
        <div className="w-max flex items-center gap-5 ">
          <FaTwitter />
          <FaTelegram />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Signup;
