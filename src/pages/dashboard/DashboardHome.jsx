import {CgTranscript} from "react-icons/cg";
import {FaRegCopy} from "react-icons/fa";
import {FaArrowRightLong} from "react-icons/fa6";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {IoLink, IoOpenOutline} from "react-icons/io5";
import { useNavigate } from "react-router";

const DashboardHome = () => {
const Nav = useNavigate()

    return (
        <div className="w-full h-max px-48 phone:px-6 py-10 phone:py-6 flex flex-col gap-8 ">
            <div className="w-full h-max flex justify-between">
                <div className="w-max phone:w-full h-max flex flex-col gap-2">
                    <p>Welcome!</p>
                    <div className="w-max phone:w-full flex phone:flex-col phone:items-start phone:gap-4 items-center gap-8">
                        <p className="text-4xl phone:w-full font-semibold text-[rgb(54,74,99)] truncate">
                            Freya Conner Hamilton Clark
                        </p>
                        <div className="w-max h-max py-2 rounded bg-white border border-gray-300 text-sm font-semibold px-3 flex items-center justify-center gap-2">
                            <p>My Plans</p>
                            <FaArrowRightLong  onClick={() => Nav('my-plans')}/>
                        </div>
                    </div>
                    <p className="text-[rgb(82,100,132)] mt-1">
                        At a glance summary of your investment account. Have
                        fun!
                    </p>
                </div>
            </div>
            <div className="w-full h-max flex items-center pl-8 phone:pl-3 phone:pr-3 py-6 border border-gray-300v gap-2 bg-white rounded cursor-pointer">
                <CgTranscript size={20} className="text-[#a286f4]" />
                <p className="w-max phone:w-full truncate flex items-center gap-2">
                    Do you know you can have a continous profit of 5% passively?
                    <span className="text-[#a286f4] phone:hidden">
                        <IoOpenOutline />
                    </span>
                </p>
            </div>
            <div className="w-full h-max flex flex-col">
                <div className="w-full flex justify-between phone:flex-col h-max gap-8">
                    <div className="w-1/3 phone:w-full h-28 rounded bg-[#0f3951] flex flex-col px-8 pt-5">
                        <div className="w-full h-max flex flex-col justify-between gap-4">
                            <p className="w-max flex items-center gap-2 text-[#1ee0ac]">
                                Available Balance
                                <span>
                                    <IoIosInformationCircleOutline color="rgb(30,224,172)" />
                                </span>
                            </p>
                            <p className="w-full flex items-center justify-between text-3xl text-white">
                                $10.00
                                <span className="text-[#1ee0ac] text-sm">
                                    100%
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 phone:w-full h-28 rounded bg-[#0f3951] flex flex-col px-8 pt-5">
                        <div className="w-full h-max flex flex-col justify-between gap-4">
                            <p className="w-max flex items-center gap-2 text-[#1ee0ac]">
                                Total Invested
                                <span>
                                    <IoIosInformationCircleOutline color="rgb(30,224,172)" />
                                </span>
                            </p>
                            <p className="w-full flex items-center justify-between text-3xl text-white">
                                $10.00
                                <span className="text-[#1ee0ac] text-sm">
                                    100%
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 phone:w-full h-28 rounded bg-[#0f3951] flex flex-col px-8 pt-5">
                        <div className="w-full h-max flex flex-col justify-between gap-4">
                            <p className="w-max flex items-center gap-2 text-[#1ee0ac]">
                                Total Profits
                                <span>
                                    <IoIosInformationCircleOutline color="rgb(30,224,172)" />
                                </span>
                            </p>
                            <p className="w-full flex items-center justify-between text-3xl text-white">
                                $10.00
                                <span className="text-[#1ee0ac] text-sm">
                                    100%
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex phone:flex-col justify-between h-max gap-8">
                <div className="w-1/3 phone:flex-col phone:w-full phone:h-max h-[26rem] bg-white flex p-6 border flex-col justify-between gap-4 border-gray-300 rounded">
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[#8094ae]">Balance in Account</p>
                            <p className="w-full flex items-center justify-between text-3xl text-[#526484]">
                                $10.00
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-2 border-t-2 border-t-[#a286f4] mt-2 pt-5 text-sm text-[#526484]">
                            <p className="w-full h-max flex justify-between">
                                Available Funds <span>$10.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Available Funds <span>$10.00</span>
                            </p>
                            <div className="w-full h-max flex justify-between border-t border-t-gray-300 font-semibold text-black py-2">
                                <p>Total</p>
                                <p>$10.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex">
                        <button className="w-full h-max py-3 font-semibold rounded text-white bg-[#a286f4]"
                        onClick={() => Nav('new-withdrawal')}
                        >
                            Withdraw Funds
                        </button>
                    </div>
                </div>
                <div className="w-1/3 phone:flex-col phone:w-full phone:h-max h-[26rem] bg-white flex p-6 border flex-col justify-between gap-4 border-gray-300 rounded">
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[#8094ae]">Confirmed Deposits</p>
                            <p className="w-full flex items-center justify-between text-3xl text-[#526484]">
                                $10.00
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-2 border-t-2 border-t-[#a286f4] mt-2 pt-5 text-sm text-[#526484]">
                            <p className="w-full h-max flex justify-between">
                                Pending Deposits <span>$10.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Pending Withdrawal <span>$10.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Confirmed Withdrawal <span>$10.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Referral Bonus <span>$10.00</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col gap-4">
                        <button className="w-full h-max py-3 font-semibold rounded text-white bg-[#a286f4]" onClick={()=>Nav('deposit')}>
                            Deposit
                        </button>
                        <p className="w-full h-max flex flex-col items-center text-sm">
                            Earn up to 10% referral commission.{" "}
                            <span>Refer a friend now!</span>
                        </p>
                    </div>
                </div>
                <div className="w-1/3 phone:flex-col phone:w-full phone:h-max h-[26rem] bg-white flex p-6 border flex-col justify-between gap-4 border-gray-300 rounded">
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-[#8094ae]">My Investment</p>
                            <p className="w-full flex items-center justify-between text-3xl text-[#526484]">
                                0 - Total
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-2 border-t-2 border-t-[#a286f4] mt-2 pt-5 text-sm text-[#526484]">
                            <p className="w-full h-max flex justify-between">
                                Active Packages <span>0</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Active Packages <span>0</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex">
                        <button className="w-full h-max py-3 font-semibold rounded text-white bg-[#a286f4]"
                        onClick={() => Nav("my-invest")}
                        >
                            See All Investment
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-max flex phone:flex-col border border-gray-300 rounded">
                <div className="w-[60%] phone:w-full h-max flex flex-col gap-6 justify-between p-6 bg-white rounded-l">
                    <div className="w-full flex justify-between">
                        <div className="w-max h-max flex flex-col">
                            <p className="w-max text-2xl text-gray-800">
                                Refer Us and Earn
                            </p>
                            <p className="text-[#526484] text-sm">
                                Use Link below to invite your friends
                            </p>
                        </div>
                        <div className="w-max flex">
                            <button className="w-max h-max px-4 py-2 text-xs font-semibold rounded text-white bg-[#a286f4]"
                            onClick={() => Nav('referus')}
                            >
                                Referral List
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-10 flex items-center justify-between border border-gray-300 rounded px-2">
                        <IoLink />
                        <input
                            type="text"
                            className="w-[90%] bg-transparent h-full border-none outline-none"
                            value={"https://ap.crypto-crest.com/ref/boduxi"}
                        />
                        <p className="w-max flex items-center text-sm">
                            <span>
                                <FaRegCopy />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-[40%] phone:w-full h-max flex justify-between rounded-r p-6 text-sm">
                    <p>My Referral</p>
                    <p className="w-max h-max flex flex-col text-xl">
                        0 <span className="text-xs text-[#8094ae]">Joined</span>
                    </p>
                    <p className="w-max h-max flex flex-col text-xl">
                        0 <span className="text-xs text-[#8094ae]">Joined</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
