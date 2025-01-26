import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("Signup");

  const [isSignupDone, setIsSignupDone] = useState(false);

  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    fullname: "",
    username: "",
    password: "",
    ConfirmPassword: "",
  });

  // const [currentUser, setCurrentUser] = useState({
  //   FullName: "string",
  //   Email: "string",
  //   IsLocalUser: false,
  //   Name: "string",
  //   Password: "string",
  //   LastLogin: "2025-01-26T10:53:13.653Z",
  //   Blocked: false,
  //   BlockedSince: "2025-01-26T10:53:13.653Z",
  //   Active: false,
  //   FailedLogins: 0,
  //   WebServiceUser: false,
  //   IsAnonymous: false,
  // });

  const updateCurrentUserDe = (data: any) => {
    console.log("name", data);
    navigate("/");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignupForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const loginSubmit = () => {
    fetch(
      `https://bankapp156-sandbox.mxapps.io/rest/myservice/v1/account/${loginForm.username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // This tells the server you expect JSON in response
        },
      }
    )
      .then((response) => response.json())
      .then((data) => updateCurrentUserDe(data));
  };

  const onSubmit = () => {
    console.log(signupForm);

    const stringafter = JSON.stringify({
      FullName: signupForm.firstname + signupForm.lastname,
      IsLocalUser: true,
      Name: signupForm.username,
      Password: signupForm.password,
      Blocked: false,
      Active: true,
      FailedLogins: 0,
      WebServiceUser: false,
      IsAnonymous: false,
    });

    console.log(stringafter);

    fetch("https://bankapp156-sandbox.mxapps.io/rest/myservice/v1/account", {
      method: "POST", // Specify the method
      headers: {
        "Content-Type": "application/json", // Define the content type
      },
      body: stringafter, // Pass the data you want to send as a JSON string
    })
      // .then((response) => response.json()) // Convert the response to JSON
      .then((response) => {
        if (response && response.status === 201) {
          setIsSignupDone(true);
          setSignupForm({
            firstname: "",
            lastname: "",
            fullname: "",
            username: "",
            password: "",
            ConfirmPassword: "",
          });
        }
      }) // Convert the response to JSON
      .then((data) => console.log(data)) // Handle the response data
      .catch((error) => console.error("Error:", error)); // Catch and handle errors
  };

  const activateBackend = () => {
    window.open(
      "https://bankapp156-sandbox.mxapps.io/rest-doc/rest/myservice/v1#/account/get_account__email_"
    );
  };

  return (
    <div>
      <div className="grid justify-end">
        <button
          className="bg-slate-800 p-3 m-3 text-white cursor-pointer"
          onClick={activateBackend}
        >
          Activate Backend
        </button>
      </div>
      <div className="grid justify-center m-2 p-5">
        {isSignupDone ? (
          <h3>your account has been created. Please login</h3>
        ) : (
          <h3></h3>
        )}
        <div className="grid grid-cols-2 border border-slate-800 px-10 py-2 m-2">
          <button
            className={
              activeTab === "Login" ? "bg-slate-800 p-3 text-white" : "p-3"
            }
            onClick={() => setActiveTab("Login")}
          >
            Login
          </button>
          <button
            className={
              activeTab === "Signup" ? "bg-slate-800 p-3 text-white" : "p-3"
            }
            onClick={() => setActiveTab("Signup")}
          >
            Signup
          </button>
        </div>
        {activeTab === "Login" ? (
          <div>
            <div className="p-15 grid gap-5 justify-stretch">
              <input
                type="text"
                placeholder="Username"
                className="p-3 border-2 border-solid"
                name="username"
                onChange={handleLoginChange}
                value={loginForm.username}
              />
              <input
                type="text"
                placeholder="Password"
                className="p-3 border-2 border-solid"
                name="password"
                onChange={handleLoginChange}
                value={loginForm.password}
              />
              <button
                className="p-3 bg-slate-700 text-white cursor-pointer "
                onClick={loginSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 p-15">
            <input
              type="text"
              placeholder="Firstname"
              className="p-3 border-2 border-solid"
              name="firstname"
              value={signupForm.firstname}
              onChange={handleOnChange}
            />
            <input
              type="text"
              placeholder="Lastname"
              className="p-3 border-2 border-solid"
              name="lastname"
              onChange={handleOnChange}
              value={signupForm.lastname}
            />
            <input
              type="text"
              placeholder="Username"
              className="p-3 border-2 border-solid"
              name="username"
              onChange={handleOnChange}
              value={signupForm.username}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border-2 border-solid"
              name="password"
              onChange={handleOnChange}
              value={signupForm.password}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="p-3 border-2 border-solid"
              name="ConfirmPassword"
              onChange={handleOnChange}
              value={signupForm.ConfirmPassword}
            />
            <button
              className="p-3 bg-slate-800 text-white cursor-pointer align-middle"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
