import { useEffect, useState } from "react";

function MyBalance(UserID: any) {
  const [balance, setBalance] = useState(0);

  console.log(UserID);
  useEffect(() => {
    fetch(
      `https://bankapp156-sandbox.mxapps.io/rest/accountbalance/v1/balance/784563`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.AccountBalance), console.log(data);
      });
  }, []);
  return (
    <div className="bg-blue-400 text-white p-10 m-10 shadow-2xl w-56 h-28 ">
      <h3 className="text-2xl text-center font bold"> £{balance}</h3>
    </div>
  );
}

export default MyBalance;
