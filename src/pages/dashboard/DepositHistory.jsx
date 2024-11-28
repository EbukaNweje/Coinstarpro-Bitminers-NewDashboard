import {FaChevronRight} from "react-icons/fa";
import {FaArrowRightLong, FaRightLong} from "react-icons/fa6";
import {MdHistory} from "react-icons/md";
import {NavLink} from "react-router-dom";

const DepositHistory = () => {
    return (
        <div className="w-full h-max bg-[#f5f6fa] px-48 phone:gap-6 phone:px-6 py-4">
            <div className="w-full h-max flex flex-col gap-3 mt-4">
                <div className="w-full h-max flex items-center gap-2 text-lg cursor-pointer">
                    <p className="w-full h-max flex justify-between">
                        My Plans{" "}
                        <span className="w-max h-max flex gap-4">
                            <button className="w-max h-max flex items-center justify-center text-white font-semibold bg-[#a286f4] text-xs px-4 py-2 rounded gap-2">
                                Home
                                <FaArrowRightLong />
                            </button>
                        </span>
                    </p>
                </div>
                <p className="text-4xl font-semibold text-[#364a63] flex flex-col">
                    Deposit History (2)
                </p>
            </div>
            <div className="w-full h-max flex flex-col gap-2 mt-6">
                <div className="w-full h-max flex flex-col gap-4">
                    <div className="w-full h-max flex items-center justify-between rounded border border-gray-300 p-6 phone:p-4 bg-white">
                        <div className="w-max h-max p-4 rounded-full flex items-center justify-center bg-[#f5f6fa]">
                            <MdHistory color="#364a63" size={25} />
                        </div>
                        <div className="w-max flex flex-col gap-1">
                            <p className="text-[#364a63] font-semibold text-sm">
                                2580519 - Bitcoin
                            </p>
                            <p className="text-[#8094ae] text-sm flex gap-2">
                                Deposit Amount -
                                <span className="text-[#364a63] font-semibold text-xs">
                                    $10,000.00
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Created Date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <FaRightLong color="#8094ae" />
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Pending
                                <span className="text-[#8094ae] text-xs">
                                    Status
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max flex flex-col phone:hidden">
                            <p className="text-[#364a63] font-semibold text-sm">
                                Bitcoin
                            </p>
                            <p className="text-[#8094ae] text-sm">
                                Deposit Mode
                            </p>
                        </div>
                        <div className="w-max h-max cursor-pointer hover:bg-[#f5f6fa] p-4 rounded-full transition-all duration-500">
                            <NavLink to={`/dashboard/my-deposit`}>
                                <FaChevronRight color="#8094ae" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-between rounded border border-gray-300 p-6 phone:p-4 bg-white">
                        <div className="w-max h-max p-4 rounded-full flex items-center justify-center bg-[#f5f6fa]">
                            <MdHistory color="#364a63" size={25} />
                        </div>
                        <div className="w-max flex flex-col gap-1">
                            <p className="text-[#364a63] font-semibold text-sm">
                                2580519 - Bitcoin
                            </p>
                            <p className="text-[#8094ae] text-sm flex gap-2">
                                Deposit Amount -
                                <span className="text-[#364a63] font-semibold text-xs">
                                    $10,000.00
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Created Date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <FaRightLong color="#8094ae" />
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Pending
                                <span className="text-[#8094ae] text-xs">
                                    Status
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max flex flex-col phone:hidden">
                            <p className="text-[#364a63] font-semibold text-sm">
                                Bitcoin
                            </p>
                            <p className="text-[#8094ae] text-sm">
                                Deposit Mode
                            </p>
                        </div>
                        <div className="w-max h-max cursor-pointer hover:bg-[#f5f6fa] p-4 rounded-full transition-all duration-500">
                            <NavLink to={`/dashboard/my-deposit`}>
                                <FaChevronRight color="#8094ae" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositHistory;
