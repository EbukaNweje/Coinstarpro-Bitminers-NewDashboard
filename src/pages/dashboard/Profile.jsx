import {Modal} from "antd";
import {useState} from "react";
import {FaChevronRight, FaUser} from "react-icons/fa";

const Profile = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const [openWallet, setOpenWallet] = useState(false);
    const [openPassword, setopenPassword] = useState(false);

    return (
        <>
            <div className="w-full h-max px-48 phone:px-6 py-10 phone:py-6 flex flex-col gap-4 ">
                <p className="text-lg text-[#8094ae]">My Profile</p>
                <p className=" text-3xl text-[#364a63] font-semibold">
                    My Profile
                </p>
                <div className="w-full h-max flex flex-col gap-4 items-center">
                    <div className="w-max h-max rounded-full bg-[#f5eee4] p-2 flex items-center justify-center">
                        <FaUser color="#f1cea4" className="w-12 h-12" />
                    </div>
                    <button className="w-max h-max px-4 py-2 rounded font-semibold text-white text-sm bg-[#1ee0ac] cursor-pointer">
                        Update Picture
                    </button>
                    <div className="w-full h-max flex">
                        <p className=" text-[#8094ae]">
                            You have full control to manage your own account
                            setting.{" "}
                        </p>
                    </div>
                </div>
                <div
                    className="w-full h-max flex flex-col gap-2"
                    onClick={() => setOpenProfile(true)}
                >
                    <p className="text-xl font-semibold text-[#364a63]">
                        Personal Information
                    </p>
                    <p className="text-base text-[#8094ae]">
                        Basic info, like your name and address, that you use on
                        Crypto-Crest.
                    </p>
                    <div className="w-full h-max flex flex-col rounded border border-gray-300 bg-white">
                        <div className="w-full h-max flex items-center justify-between px-4 py-6 cursor-pointer border-b border-b-gray-300">
                            <div className="w-[60%] phone:w-max h-max flex phone:flex-col justify-between items-center phone:items-start">
                                <p className="text-[#8094ae]">Full Name</p>
                                <p className="text-[#364a63]">
                                    Freya Conner Hamilton Clark
                                </p>
                            </div>
                            <div className="w-[40%] phone:w-max h-max flex items-center justify-end">
                                <FaChevronRight size={22} />
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center justify-between px-4 py-6 cursor-pointer border-b border-b-gray-300">
                            <div className="w-[60%] phone:w-max h-max flex phone:flex-col justify-between items-center phone:items-start">
                                <p className="text-[#8094ae]">Email</p>
                                <p className="text-[#364a63]">
                                    businesscocoltd@gmail.com
                                </p>
                            </div>
                            <div className="w-[40%] phone:w-max h-max flex items-center justify-end">
                                <FaChevronRight size={22} />
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center justify-between px-4 py-6 cursor-pointer border-b border-b-gray-300">
                            <div className="w-[60%] phone:w-max h-max flex phone:flex-col justify-between items-center phone:items-start">
                                <p className="text-[#8094ae]"> Dateof birth</p>
                                <p className="text-[#364a63]">
                                    +1 (516) 344-2712
                                </p>
                            </div>
                            <div className="w-[40%] phone:w-max h-max flex items-center justify-end">
                                <FaChevronRight size={22} />
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center justify-between px-4 py-6 cursor-pointer border-b border-b-gray-300">
                            <div className="w-[60%] phone:w-max h-max flex phone:flex-col justify-between items-center phone:items-start">
                                <p className="text-[#8094ae]">Date of birth</p>
                                <p className="text-[#364a63]">
                                    Update date of birth
                                </p>
                            </div>
                            <div className="w-[40%] phone:w-max h-max flex items-center justify-end">
                                <FaChevronRight size={22} />
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center justify-between px-4 py-6 cursor-pointer ">
                            <div className="w-[60%] phone:w-max h-max flex phone:flex-col justify-between items-center phone:items-start">
                                <p className="text-[#8094ae]"> Address</p>
                                <p className="text-[#364a63]">Update Address</p>
                            </div>
                            <div className="w-[40%] phone:w-max h-max flex items-center justify-end">
                                <FaChevronRight size={22} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col gap-2">
                    <p className="text-xl font-semibold text-[#364a63]">
                        Personal Preferences
                    </p>
                    <p className="text-base text-[#8094ae]">
                        Your personalized preference allows you use or platform
                        better.
                    </p>
                    <div className="w-full h-max flex flex-col rounded border border-gray-300 bg-white phone:gap-2">
                        <div
                            className="w-full h-max flex phone:flex-col phone:items-start items-center justify-between px-4 py-6 cursor-pointer "
                            onClick={() => setOpenWallet(true)}
                        >
                            <div className="w-[60%] phone:w-max h-max flex phone:flex-col justify-between items-center phone:items-start">
                                <p className="text-[#8094ae]">Wallet Address</p>
                                <p className="text-[#364a63]">Bitcoin: null</p>
                            </div>
                            <div className="w-[40%] phone:w-max h-max flex items-center justify-end">
                                <p className="text-[#a286f4]">
                                    Add/Change Aallet Address
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col gap-2">
                    <p className="text-xl font-semibold text-[#364a63]">
                        Security Settings
                    </p>
                    <p className="text-base text-[#8094ae]">
                        These settings helps you keep your account secure.
                    </p>
                    <div className="w-full h-max flex flex-col rounded border border-gray-300 bg-white">
                        <div className="w-full h-max flex phone:flex-col phone:items-start items-center justify-between px-4 py-6 cursor-pointer phone:gap-4">
                            <div className="w-max h-max flex justify-between flex-col items-centerm phone:items-start">
                                <p className="text-[#364a63] text-lg font-semibold">
                                    Change Password
                                </p>
                                <p className="text-[#364a63]">
                                    Set a unique password to protect your
                                    account.
                                </p>
                            </div>
                            <div className="w-max h-max flex items-center justify-end gap-2 phone:flex-col phone:items-start">
                                <p className="text-[#a286f4] text-sm italic">
                                    Last changed: 2024-08-23 12:48:36
                                </p>
                                <button
                                    className="w-max h-max px-4 py-2 rounded font-semibold text-white text-xs bg-[#a286f4] cursor-pointer"
                                    onClick={() =>
                                        setopenPassword(true)
                                    }
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={openProfile}
                onCancel={() => setOpenProfile(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                maskClosable={true}
                closeIcon={true}
                className="w-[45%] phone:w-full phone:p-0"
            >
                <div className="w-full h-max flex flex-col gap-2 p-2">
                    <p className="w-max h-max flex flex-col text-lg font-semibold text-[#364a63]">
                        Update Profile{" "}
                        <span className="text-sm font-normal text-[#526484]">
                            Note: you cannot update profile after KYC
                        </span>
                    </p>
                    <div className="w-full h-max flex flex-col gap-3 mt-4">
                        <div className="w-full h-max flex justify-between gap-5">
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">First Name</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Last Name</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-between gap-5">
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Phone Number</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Date of Birth</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-between gap-5">
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Phone Number</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Date of Birth</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-between gap-5">
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Address</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Postal Code</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                />
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-between gap-5">
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">Country</p>
                                <select
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                >
                                    <option value="">Select Country</option>
                                    <option value="">Select Country</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-center gap-5 mt-2">
                        <button className="w-max h-max px-6 py-2 font-semibold text-white bg-[#364a63] rounded">
                            CANCEL
                        </button>
                        <button className="w-max h-max px-6 py-2 font-semibold text-white bg-[#a286f4] rounded">
                            UPDATE
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={openWallet}
                onCancel={() => setOpenWallet(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                maskClosable={true}
                closeIcon={true}
                className="w-[45%] phone:w-full phone:p-0"
            >
                <div className="w-full h-max flex flex-col gap-2 p-2">
                    <p className="w-max h-max flex flex-col text-lg font-semibold text-[#364a63]">
                        Update Wallet Address
                        <span className="text-sm font-normal text-[#526484]">
                            Bitcoin: null
                        </span>
                    </p>
                    <div className="w-full h-max flex flex-col gap-3 mt-4">
                        <div className="w-full h-max flex justify-between gap-5">
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">
                                    Choose Cryptocurrency
                                </p>
                                <select
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                >
                                    <option value="">BITCOIN (BTC)</option>
                                    <option value="">USDT (TRC20)</option>
                                    <option value="">ETHEREUM (ETH)</option>
                                </select>
                            </div>
                            <div className="w-1/2 h-max flex flex-col">
                                <p className=" text-[#364a63]">
                                    Wallet Address
                                </p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                    placeholder="Enter your wallet address"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-center gap-5 mt-2">
                        <button className="w-max h-max px-6 py-2 font-semibold text-white bg-[#364a63] rounded">
                            CANCEL
                        </button>
                        <button className="w-max h-max px-6 py-2 font-semibold text-white bg-[#a286f4] rounded">
                            UPDATE
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={openPassword}
                onCancel={() => setopenPassword(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                maskClosable={true}
                closeIcon={true}
                className="w-[45%] phone:w-full phone:p-0"
            >
                <div className="w-full h-max flex flex-col gap-2 p-2">
                    <p className="w-max h-max flex flex-col text-lg font-semibold text-[#364a63]">
                        Update Password
                    </p>
                    <div className="w-full h-max flex flex-col gap-4 mt-4">
                        <div className="w-full h-max flex flex-col">
                            <p className=" text-[#364a63]">Old Password*</p>
                            <input
                                type="password"
                                className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                placeholder="Old Password"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <p className=" text-[#364a63]">Old Password*</p>
                            <input
                                type="password"
                                className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                placeholder="Old Password"
                            />
                        </div>
                        <div className="w-full h-max flex flex-col">
                            <p className=" text-[#364a63]">Old Password*</p>
                            <input
                                type="password"
                                className="w-full h-10 rounded border border-gray-300 outline-none pl-2"
                                placeholder="Old Password"
                            />
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-center gap-5 mt-2">
                        <button className="w-max h-max px-6 py-2 font-semibold text-white bg-[#364a63] rounded">
                            CANCEL
                        </button>
                        <button className="w-max h-max px-6 py-2 font-semibold text-white bg-[#a286f4] rounded">
                            UPDATE
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Profile;
