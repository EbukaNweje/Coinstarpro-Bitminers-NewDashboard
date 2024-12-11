import {FaChevronRight, FaStarOfLife} from "react-icons/fa";
import {FaArrowRightLong, FaRightLong} from "react-icons/fa6";
import {NavLink, useNavigate} from "react-router-dom";

const Investments = () => {

    const Nav = useNavigate()

    return (
        <div className="w-full h-max bg-[#f5f6fa] px-48 phone:gap-6 phone:px-6 py-4">
            <div className="w-full h-max flex flex-col gap-3 mt-4">
                <div className="w-full h-max flex items-center gap-2 text-lg cursor-pointer">
                    <p className="w-full h-max flex justify-between">
                        My Plans{" "}
                        <span className="w-max h-max flex gap-4">
                            <button className="w-max h-max flex items-center justify-center text-white font-semibold bg-[#a286f4] text-xs px-4 py-2 rounded gap-2"
                            onClick={() => Nav('my-withdrawal')}
                            >
                                Withdrawals
                                <FaArrowRightLong />
                            </button>
                            <button className="w-max h-max flex items-center justify-center text-[#364a63] font-semibold bg-[#fff] text-xs px-4 py-2 rounded gap-2 border border-gray-300">
                                Invest More
                                <FaArrowRightLong />
                            </button>
                        </span>
                    </p>
                </div>
                <p className="text-4xl font-semibold text-[#364a63] flex flex-col">
                    Invested History
                    <span className="text-sm font-normal">
                        Here is your both active and inactive investement plans.
                    </span>
                </p>
            </div>
            <div className="w-full h-max flex flex-col gap-2 mt-6">
                <p className="text-lg font-semibold text-[#364a63]">
                    Active Plan (0)
                </p>
                <div className="w-full h-max flex flex-col gap-4">
                    <div className="w-full h-max flex items-center justify-between rounded border border-gray-300 p-6 phone:p-4 bg-white">
                        <div className="w-max h-max p-4 rounded-full flex items-center justify-center bg-[#f5f6fa]">
                            <FaStarOfLife color="#364a63" />
                        </div>
                        <div className="w-max flex flex-col gap-1">
                            <p className="text-[#364a63] font-semibold text-sm">
                                SILVER PLAN - 550% for 60 Days
                            </p>
                            <p className="text-[#8094ae] text-sm flex gap-2">
                                Invested Amount -
                                <span className="text-[#364a63] font-semibold text-xs">
                                    $10,000.00
                                </span>
                            </p>
                            <p className="text-[#a286f4]  text-xs">
                                Click to delete
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <FaRightLong color="#8094ae" />
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max flex flex-col phone:hidden">
                            <p className="text-[#364a63] font-semibold text-sm">
                                $0.00{" "}
                                <span className="text-[#a286f4]">-0.00%</span>
                            </p>
                            <p className="text-[#8094ae] text-sm">
                                Net Profit Earn
                            </p>
                        </div>
                        <div className="w-max h-max cursor-pointer hover:bg-[#f5f6fa] p-4 rounded-full transition-all duration-500">
                            <NavLink to={`/dashboard/my-invest/${2}`}>
                                <FaChevronRight color="#8094ae" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-between rounded border border-gray-300 p-6 phone:p-4 bg-white">
                        <div className="w-max h-max p-4 rounded-full flex items-center justify-center bg-[#f5f6fa]">
                            <FaStarOfLife color="#364a63" />
                        </div>
                        <div className="w-max flex flex-col gap-1">
                            <p className="text-[#364a63] font-semibold text-sm">
                                SILVER PLAN - 550% for 60 Days
                            </p>
                            <p className="text-[#8094ae] text-sm flex gap-2">
                                Invested Amount -
                                <span className="text-[#364a63] font-semibold text-xs">
                                    $10,000.00
                                </span>
                            </p>
                            <p className="text-[#a286f4]  text-xs">
                                Click to delete
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <FaRightLong color="#8094ae" />
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max flex flex-col phone:hidden">
                            <p className="text-[#364a63] font-semibold text-sm">
                                $0.00{" "}
                                <span className="text-[#a286f4]">-0.00%</span>
                            </p>
                            <p className="text-[#8094ae] text-sm">
                                Net Profit Earn
                            </p>
                        </div>
                        <div className="w-max h-max cursor-pointer hover:bg-[#f5f6fa] p-4 rounded-full transition-all duration-500">
                            <NavLink to={`/dashboard/my-invest/${2}`}>
                                <FaChevronRight color="#8094ae" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-max flex flex-col gap-2 mt-6">
                <p className="text-lg font-semibold text-[#364a63]">
                    Inactive Plan (0)
                </p>
                <div className="w-full h-max flex flex-col gap-4">
                    <div className="w-full h-max flex items-center justify-between rounded border border-gray-300 p-6 phone:p-4 bg-white">
                        <div className="w-max h-max p-4 rounded-full flex items-center justify-center bg-[#f5f6fa]">
                            <FaStarOfLife color="#364a63" />
                        </div>
                        <div className="w-max flex flex-col gap-1">
                            <p className="text-[#364a63] font-semibold text-sm">
                                SILVER PLAN - 550% for 60 Days
                            </p>
                            <p className="text-[#8094ae] text-sm flex gap-2">
                                Invested Amount -
                                <span className="text-[#364a63] font-semibold text-xs">
                                    $10,000.00
                                </span>
                            </p>
                            <p className="text-[#a286f4]  text-xs">
                                Click to delete
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <FaRightLong color="#8094ae" />
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max flex flex-col phone:hidden">
                            <p className="text-[#364a63] font-semibold text-sm">
                                $0.00{" "}
                                <span className="text-[#a286f4]">-0.00%</span>
                            </p>
                            <p className="text-[#8094ae] text-sm">
                                Net Profit Earn
                            </p>
                        </div>
                        <div className="w-max h-max cursor-pointer">
                            <FaChevronRight color="#8094ae" />
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center justify-between rounded border border-gray-300 p-6 phone:p-4 bg-white">
                        <div className="w-max h-max p-4 rounded-full flex items-center justify-center bg-[#f5f6fa]">
                            <FaStarOfLife color="#364a63" />
                        </div>
                        <div className="w-max flex flex-col gap-1">
                            <p className="text-[#364a63] font-semibold text-sm">
                                SILVER PLAN - 550% for 60 Days
                            </p>
                            <p className="text-[#8094ae] text-sm flex gap-2">
                                Invested Amount -
                                <span className="text-[#364a63] font-semibold text-xs">
                                    $10,000.00
                                </span>
                            </p>
                            <p className="text-[#a286f4]  text-xs">
                                Click to delete
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <FaRightLong color="#8094ae" />
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <p className="text-[#526484] text-sm flex flex-col gap-1">
                                Tue, Aug 27, 2024 3:55 AM
                                <span className="text-[#8094ae] text-xs">
                                    Start date
                                </span>
                            </p>
                        </div>
                        <div className="w-max h-max flex flex-col phone:hidden">
                            <p className="text-[#364a63] font-semibold text-sm">
                                $0.00{" "}
                                <span className="text-[#a286f4]">-0.00%</span>
                            </p>
                            <p className="text-[#8094ae] text-sm">
                                Net Profit Earn
                            </p>
                        </div>
                        <div className="w-max h-max cursor-pointer">
                            <FaChevronRight color="#8094ae" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investments;
