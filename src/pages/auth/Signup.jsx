import {FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Signup = () => {
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
                <p className="text-xl text-[#5d3891] font-semibold">
                    Register an account
                </p>
                <form className="w-max phone:w-full phone:px-4 h-max flex flex-col items-center gap-5">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                        placeholder="First Name *"
                        required
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                        placeholder="Last Name *"
                        required
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                        placeholder="Username *"
                        required
                    />
                    <input
                        type="email"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                        placeholder="Email *"
                        required
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                        placeholder="Phone *"
                        required
                    />
                    <select
                        type="text"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                    >
                        <option value="">Select Country</option>
                        <option value="">Select Country</option>
                        <option value="">Select Country</option>
                        <option value="">Select Country</option>
                    </select>
                    <input
                        type="password"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                        placeholder="Password *"
                        required
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        className="w-[33rem] phone:w-full h-12 rounded border border-gray-100 bg-[#f8f8f8] outline-none pl-4"
                        placeholder="Confirm Password *"
                        required
                    />
                    <div className="w-[33rem] phone:w-full flex items-center">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            className="w-4 h-4 cursor-pointer"
                            required
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
                    <button
                        type="submit"
                        className="w-40 h-12 rounded bg-[#a286f4] text-white text-sm font-bold transition-all duration-500 hover:bg-white hover:border-2 hover:text-[#a286f4] hover:border-[#a286f4]"
                    >
                        LOG IN
                    </button>
                    <div className="w-max phone:w-full phone:justify-between phone:gap-0 h-max flex gap-20 text-sm text-[#a286f4]">
                        <div className="w-max h-max cursor-pointer">
                            Already registered?
                        </div>
                        <NavLink to={"/"}>
                            <div className="w-max h-max cursor-pointer">
                                Login here
                            </div>
                        </NavLink>
                    </div>
                </form>
            </div>
            <div className="w-full phone:h-24 phone:gap-3 phone:flex-col phone:justify-center  phone:py-4 h-14 text-white px-48 flex items-center justify-between bg-[#0e1120]">
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
