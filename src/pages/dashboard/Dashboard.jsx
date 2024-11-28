import {Outlet} from "react-router";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
        <>
            <div className="w-full h-max flex flex-col">
                <div className="w-full h-max">
                    <Header />
                </div>
                <div className="w-full min-h-[calc(100vh-8rem)] h-max mt-16 bg-[#f5f6fa]">
                    <Outlet />
                </div>
                <div className="w-full h-16 bg-[#0f3951]">
                    <p>Copyright 2023</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
