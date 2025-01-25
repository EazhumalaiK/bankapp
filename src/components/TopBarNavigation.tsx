import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import AllTransactions from "../pages/AllTransactions";
import MyProfile from "../pages/MyProfile";
import MyTransactions from "../pages/MyTransactions";

const TopBarNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/AllTransactions" element={<AllTransactions />}></Route>
        <Route path="/MyProfile" element={<MyProfile />}></Route>
        <Route path="/MyTransactions" element={<MyTransactions />}></Route>
      </Routes>
    </div>
  );
};

export default TopBarNavigation;
