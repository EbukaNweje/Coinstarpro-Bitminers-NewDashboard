import {FaArrowLeftLong} from "react-icons/fa6";
import { useNavigate } from "react-router";

const NewWithdrawal = () => {
    const Nav = useNavigate()
    return (
        <div className="w-full h-max flex bg-[#f5f6fa] px-48 phone:gap-6 phone:px-6 phone:flex-col py-4">
            <div className="w-[60%] phone:w-full h-max flex flex-col gap-2">
                <div className="w-max h-max flex items-center gap-2 text-lg cursor-pointer" onClick={()=> Nav('my-withdrawal')}>
                    <FaArrowLeftLong onClick={()=> Nav('my-withdrawal')} />
                    <p>History</p>
                </div>
                <p className="text-4xl font-semibold text-[#364a63]">
                    Want to withdraw from wallet?
                </p>
                <div className="w-full h-max flex flex-col gap-6 mt-4">
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-sm">Select Withdrawal Method</p>
                        <select
                            name=""
                            id=""
                            className="w-full h-14 border border-gray-300 rounded px-4 py-2"
                        >
                            <option value="">Select Method</option>
                            <option value="">Select Method</option>
                            <option value="">Select Method</option>
                        </select>
                    </div>

                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-sm">Enter your amount</p>
                        <div className="w-full h-14 flex items-center border border-gray-300 rounded px-4 py-2 bg-white">
                            <input
                                type="text"
                                className="w-[90%] border-r border-r-gray-200 h-full rounded-l outline-none "
                            />
                            <p className="w-[10%] h-full flex items-center justify-center">
                                USD
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex items-center">
                        <input
                            type="checkbox"
                            name=""
                            className="w-6 h-6"
                            id=""
                        />
                        <p className="ml-2 text-sm">
                            I agree to the terms and conditions
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[40%] phone:w-full phone:p-0 h-max pl-24 pt-32">
                <div className="w-full h-max rounded border bg-white border-gray-300">
                    <div className="w-full h-max flex justify-between p-6 border-b border-b-gray-300">
                        <p className="w-[70%] h-max flex flex-col text-[#8094ae]">
                            Payment Processor
                            <span className="text-xs">
                                No profit at the moment to withdraw
                            </span>
                        </p>
                        <p className="w-[30%] h-max flex flex-col text-[#526484]">
                            Blockchain
                        </p>
                    </div>
                    <div className="w-full h-20 flex items-center justify-center bg-[#f5f6fa]">
                        <button className="w-max h-max px-5 py-2 rounded text-white font-semibold bg-[#a286f4]">
                            Confirm & Withdrawal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewWithdrawal;
