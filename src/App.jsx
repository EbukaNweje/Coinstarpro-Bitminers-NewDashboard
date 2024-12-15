import {RouterProvider, createHashRouter} from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verify from "./pages/auth/Verify";
import ErrorPage from "./components/ErrorPage";
import DashboardRoute from "./routes/DashboardRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Deposit from "./pages/dashboard/Deposit";
import MyPlans from "./pages/dashboard/MyPlans";
import NewWithdrawal from "./pages/dashboard/NewWithdrawal";
import NewBonus from "./pages/dashboard/NewBonus";
import DepositPay from "./pages/dashboard/DepositPay";
import Investments from "./pages/dashboard/Investments";
import InvestmentsView from "./pages/dashboard/InvestmentsView";
import DepositHistory from "./pages/dashboard/DepositHistory";
import MyWithdrawal from "./pages/dashboard/MyWithdrawal";
import Profile from "./pages/dashboard/Profile";
import Referral from "./pages/dashboard/Referral";
import Forgottenpassword from "./pages/auth/Forgottenpassword";
import Reset from "./pages/auth/Reset";
import Profit from "./pages/dashboard/Profit";

const App = () => {
    const router = createHashRouter([
        {
            path: "",
            element: <Login />,
        },
        {
            path: "register",
            element: <Signup />,
        },
        {
            path: "forgotten-password", element: <Forgottenpassword />,
        },
        {
            path: "reset-password", element: <Reset/>,
        },
        {
            path: "verify",
            element: <Verify />,
        },
        {
            path: "/dashboard",
            errorElement: <ErrorPage />,
            element: <DashboardRoute element={<Dashboard />}></DashboardRoute>,
            children: [
                { path: "", element: <DashboardHome />, },
                { path: "deposit", element: <Deposit />, },
                { path: "deposit-pay",element: <DepositPay />, },
                { path: "my-plans", element: <MyPlans />,},
                { path: "new-withdrawal",element: <NewWithdrawal />,},
                { path: "new-bonus",element: <NewBonus />,},
                { path: "my-invest",element: <Investments />,},
                { path: "my-invest/:id",element: <InvestmentsView />,},
                { path: "my-deposit",element: <DepositHistory />,},
                { path: "my-withdrawal",element: <MyWithdrawal />,},
                { path: "profile",element: <Profile />,},
                { path: "referus",element: <Referral />,},
                { path: "profit",element: <Profit />,},
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
