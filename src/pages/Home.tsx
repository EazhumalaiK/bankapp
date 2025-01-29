import { useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../context/AllContext";
import MyBalance from "../components/MyBalance";

const Home = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("MyComponent must be used within a MyContext.Provider");
  }

  console.log("context", context);
  const { user } = context;
  console.log(user, typeof user);
  const { FullName, UserID } = user;
  console.log(FullName, UserID);
  return (
    <div>
      <div className="bg-slate-800 w-full p-6 text-white">
        <nav className="flex gap-8">
          <Link to="/home">Home</Link>
          <Link to="/mytransactions">My Transactions</Link>
          <Link to="/myprofile">My Profile</Link>
        </nav>
      </div>
      <div className="p-4">
        <h3 className="text-end">
          Welcome{" "}
          <span className="text-slate-950 text-xl font-bold">{FullName}</span>
        </h3>
      </div>
      <MyBalance UserID={UserID} />
    </div>
  );
};

export default Home;
