import {FaArrowLeftLong} from "react-icons/fa6";
import {MdInfo} from "react-icons/md";
import qr from "../../assets/qr.jpg";
import {toast} from "react-toastify";

const DepositPay = () => {
    return (
        <div className="w-full h-max flex bg-[#f5f6fa] px-48 phone:gap-6 phone:px-6 phone:flex-col py-4">
            <div className="w-full h-max flex flex-col items-center gap-2">
                <div className="w-full h-max flex items-center gap-2 text-lg cursor-pointer">
                    <FaArrowLeftLong />
                    <p>History</p>
                </div>
                <p className="text-4xl font-semibold text-[#364a63] w-full text-center">
                    Payment Processor
                </p>
                <div className="w-[45%] phone:w-full h-max flex flex-col bg-white mt-4 rounded border-gray-300 border">
                    <div className="w-full rounded-t p-4 flex items-center text-xs">
                        <MdInfo color="#364a63" size={15} />
                        Copy and send this exact amount, to the payment address
                        below.
                    </div>
                    <div className="w-full h-44 flex items-center justify-center border-t border-t-gray-300 p-2">
                        <img
                            src={qr}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-max flex flex-col border-t border-t-gray-300 p-4">
                        <div className="w-full flex flex-col gap-2">
                            <p>Payment Address*</p>
                            <input
                                type="text"
                                readOnly
                                className="w-full h-10 bg-[#f5f6fa] outline-none rounded border-gray-300 border pl-3"
                                value={
                                    "bc1qq22tmtclwnk06uwp4ujpjzqavaj3h5ru7qy5s7"
                                }
                            />
                            <button className="w-max h-max px-2 py-2 rounded text-white bg-[#1ee0ac] font-semibold text-xs">
                                Copy Wallet
                            </button>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <p>Amount *</p>
                            <input
                                type="text"
                                readOnly
                                className="w-full h-10 bg-[#f5f6fa] outline-none rounded border-gray-300 border pl-3"
                                value={
                                    "bc1qq22tmtclwnk06uwp4ujpjzqavaj3h5ru7qy5s7"
                                }
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <p>Bitcoin Equivalent*</p>
                            <input
                                type="text"
                                readOnly
                                className="w-full h-10 bg-[#f5f6fa] outline-none rounded border-gray-300 border pl-3"
                                value={
                                    "bc1qq22tmtclwnk06uwp4ujpjzqavaj3h5ru7qy5s7"
                                }
                            />
                        </div>
                    </div>
                    <div className="w-full h-max flex border-t border-t-gray-300 p-4">
                        <div className="w-full h-max flex justify-between py-2">
                            <p className="w-[70%] h-max flex flex-col text-sm text-[#8094ae]">
                                Payment Processor
                            </p>
                            <p className="w-[30%] h-max flex flex-col text-[#526484]">
                                Blockchain
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex border-t border-t-gray-300 p-4">
                        <div className="w-full h-max flex flex-col gap-2">
                            <div className="w-full h-max text-lg text-[#364a63] font-semibold">
                                Your Investment Details
                            </div>
                            <div className="w-full h-max flex justify-between ">
                                <p className="w-full h-max flex flex-col text-xs gap-1 text-[#8094ae]">
                                    Name Of Plan{" "}
                                    <span className="text-[#526484] text-sm">
                                        GOLD PLAN
                                    </span>
                                </p>
                                <p className="w-full h-max flex flex-col text-xs gap-1 text-[#8094ae]">
                                    Duration
                                    <span className="text-[#526484] text-sm">
                                        GOLD PLAN
                                    </span>
                                </p>
                            </div>
                            <div className="w-full h-max flex justify-between">
                                <p className="w-full h-max flex flex-col text-xs gap-1 text-[#8094ae]">
                                    Profit
                                    <span className="text-[#526484] text-sm">
                                        525%
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-20 flex items-center justify-center border-t border-t-gray-300 p-4 bg-[#f5f6fa]">
                        <button
                            className="w-max h-max px-5 py-2 rounded text-white font-semibold bg-[#a286f4]"
                            onClick={() => toast.success("Successful")}
                        >
                            Paid
                        </button>
                    </div>
                    <div className="w-full h-max rounded-b p-4">
                        <p>
                            Note: click paid if have made payment to the above
                            wallet and wait for the system to confirm your
                            deposit!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositPay;
