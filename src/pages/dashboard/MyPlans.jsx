import {useState} from "react";
import {FaCheckCircle} from "react-icons/fa";
import {FaArrowRightLong} from "react-icons/fa6";
import {useNavigate} from "react-router";

const MyPlans = () => {
    const navigate = useNavigate();
    const [plan, setPlan] = useState(0);
    // const planData = {
    //     plan1: 1000,
    //     plan2: 5000,
    //     plan3: 10000,
    // };
    const handleProceed = () => {
        navigate("/dashboard/deposit");
    };
    return (
        <div className="w-full h-max flex px-48 phone:px-6 phone:gap-2 flex-col gap-6 py-10 items-center text-[#8094ae]">
            <p>Choose an option</p>
            <p className="text-[#364a63] text-3xl font-semibold">
                Pricing/Plans
            </p>
            <p className="text-sm text-[#526484]">
                Choose your investment plan and start earning.
            </p>
            <div className="w-full flex phone:flex-col justify-between h-max gap-8">
                <div className="w-1/3 phone:flex-col phone:w-full phone:h-max h-max bg-white flex p-10 border flex-col justify-between gap-4 border-gray-300 rounded relative">
                    {plan === 1 && (
                        <span className="w-max h-max absolute top-4 right-4">
                            <FaCheckCircle
                                className=""
                                size={24}
                                color="#a286f4"
                            />
                        </span>
                    )}
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max flex flex-col items-center gap-4">
                            <p className="text-[#364a63] text-2xl w-max flex flex-col items-center font-semibold">
                                STARTER PLAN
                                <span className="text-sm font-normal text-[#8094ae] ">
                                    Enjoy entry level of invest & earn money.
                                </span>
                            </p>
                            <div className="w-full flex items-center justify-between">
                                <p className="w-1/2 h-max flex flex-col items-center text-3xl text-[#526484]">
                                    525%
                                    <span className="text-xs text-[#8094ae]">
                                        Interest
                                    </span>
                                </p>
                                <p className="w-1/2 h-max flex flex-col items-center text-3xl text-[#526484]">
                                    30
                                    <span className="text-xs text-[#8094ae]">
                                        Days
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 border-t-2 border-t-[#a286f4] mt-2 pt-5 text-sm text-[#526484]">
                            <p className="w-full h-max flex justify-between">
                                Min Deposits <span>$1,000.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Max Deposits <span>$10,000.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Renewable <span>Yes</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Referral Bonus <span>10%</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Turnover <span>Monthly</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max mt-2">
                        <div className="w-full h-max mt-2">
                            {plan === 1 ? (
                                <button className="w-full h-max py-3 text-xs font-semibold rounded text-[#fff] bg-[#a286f4] border border-gray-300">
                                    PLAN SELECTED
                                </button>
                            ) : (
                                <button
                                    className="w-full h-max py-3 text-xs font-semibold rounded text-[#364a63] bg-[#f5f6fa] border border-gray-300"
                                    onClick={() => setPlan(1)}
                                >
                                    CHOOSE THIS PLAN
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 phone:flex-col phone:w-full phone:h-max h-max bg-white flex p-10 border flex-col justify-between gap-4 border-gray-300 rounded relative">
                    {plan === 2 && (
                        <span className="w-max h-max absolute top-4 right-4">
                            <FaCheckCircle
                                className=""
                                size={24}
                                color="#a286f4"
                            />
                        </span>
                    )}

                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max flex flex-col items-center gap-4">
                            <p className="text-[#364a63] text-2xl w-max flex flex-col items-center font-semibold">
                                SILVER PLAN
                                <span className="text-sm font-normal text-[#8094ae] ">
                                    Enjoy entry level of invest & earn money.
                                </span>
                            </p>
                            <div className="w-full flex items-center justify-between">
                                <p className="w-1/2 h-max flex flex-col items-center text-3xl text-[#526484]">
                                    555%
                                    <span className="text-xs text-[#8094ae]">
                                        Interest
                                    </span>
                                </p>
                                <p className="w-1/2 h-max flex flex-col items-center text-3xl text-[#526484]">
                                    60
                                    <span className="text-xs text-[#8094ae]">
                                        Days
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 border-t-2 border-t-[#a286f4] mt-2 pt-5 text-sm text-[#526484]">
                            <p className="w-full h-max flex justify-between">
                                Min Deposits <span>$10,000.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Max Deposits <span>$100,000.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Renewable <span>Yes</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Referral Bonus <span>10%</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Turnover <span>Monthly</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max mt-2">
                        {plan === 2 ? (
                            <button className="w-full h-max py-3 text-xs font-semibold rounded text-[#fff] bg-[#a286f4] border border-gray-300">
                                PLAN SELECTED
                            </button>
                        ) : (
                            <button
                                className="w-full h-max py-3 text-xs font-semibold rounded text-[#364a63] bg-[#f5f6fa] border border-gray-300"
                                onClick={() => setPlan(2)}
                            >
                                CHOOSE THIS PLAN
                            </button>
                        )}
                    </div>
                </div>
                <div className="w-1/3 phone:flex-col phone:w-full phone:h-max h-max bg-white flex p-10 border flex-col justify-between gap-4 border-gray-300 rounded relative">
                    {plan === 3 && (
                        <span className="w-max h-max absolute top-4 right-4">
                            <FaCheckCircle
                                className=""
                                size={24}
                                color="#a286f4"
                            />
                        </span>
                    )}
                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max flex flex-col items-center gap-4">
                            <p className="text-[#364a63] text-2xl w-max flex flex-col items-center font-semibold">
                                GOLD PLAN
                                <span className="text-sm font-normal text-[#8094ae] ">
                                    Enjoy entry level of invest & earn money.
                                </span>
                            </p>
                            <div className="w-full flex items-center justify-between">
                                <p className="w-1/2 h-max flex flex-col items-center text-3xl text-[#526484]">
                                    575%
                                    <span className="text-xs text-[#8094ae]">
                                        Interest
                                    </span>
                                </p>
                                <p className="w-1/2 h-max flex flex-col items-center text-3xl text-[#526484]">
                                    90
                                    <span className="text-xs text-[#8094ae]">
                                        Days
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 border-t-2 border-t-[#a286f4] mt-2 pt-5 text-sm text-[#526484]">
                            <p className="w-full h-max flex justify-between">
                                Min Deposits <span>$100,000.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Max Deposits <span>$1,000,000.00</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Renewable <span>Yes</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Referral Bonus <span>10%</span>
                            </p>
                            <p className="w-full h-max flex justify-between">
                                Turnover <span>Monthly</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max mt-2">
                        {plan === 3 ? (
                            <button className="w-full h-max py-3 text-xs font-semibold rounded text-[#fff] bg-[#a286f4] border border-gray-300">
                                PLAN SELECTED
                            </button>
                        ) : (
                            <button
                                className="w-full h-max py-3 text-xs font-semibold rounded text-[#364a63] bg-[#f5f6fa] border border-gray-300"
                                onClick={() => setPlan(3)}
                            >
                                CHOOSE THIS PLAN
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-max h-max flex mt-4">
                <button
                    className="w-max h-max py-3 px-4 flex items-center gap-2 text-sm font-semibold rounded text-[#fff] bg-[#a286f4] border border-gray-300"
                    onClick={handleProceed}
                >
                    Continue to Invest <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
};

export default MyPlans;
