import {FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";

const Login = () => {

    const Nav = useNavigate()
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
                    <div className="w-max h-max cursor-pointer">Login</div>
                    <div className="w-max h-max cursor-pointer">Register</div>
                </div>
            </div>
            <div className="w-full h-[calc(100%-6.5rem)] phone:h-[calc(100%-6rem)] bg-[#ffffff] flex items-center justify-center flex-col gap-5">
            <p className="text-xl text-[#5d3891] font-semibold">
                    Login your account
                </p>
                <form className="w-max phone:w-full phone:px-4 h-max flex flex-col items-center gap-5">
                    <input
                        type="text"
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
                        placeholder="Email *"
                        required
                    />
                    <button
                        // type="submit"
                        onClick={() => Nav('/dashboard')}
                        className="w-40 h-12 rounded bg-[#a286f4] text-white text-sm font-bold transition-all duration-500 hover:bg-white hover:border-2 hover:text-[#a286f4] hover:border-[#a286f4]"
                    >
                        LOG IN
                    </button>
                    <div className="w-max phone:w-full phone:justify-between phone:gap-0 h-max flex gap-80 text-sm text-[#a286f4]">
                        <div className="w-max h-max cursor-pointer">
                            Forgot Password?
                        </div>
                        <NavLink to={"/register"}>
                            <div className="w-max h-max cursor-pointer">
                                Create Account
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

export default Login;
