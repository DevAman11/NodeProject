import React from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");
  const [Store, setStore] = useState();

  
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const LogData = {
      Email: Email,
      Password: Password,
    };

    try {
      // Using POST method instead of GET
      const response = await fetch("http://localhost:7000/Login", {
        method: "POST", // Correct HTTP method for sending data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(LogData), // Send the login data in the body
      });

      const result = await response.json();

      // Check if the response is OK (successful)
      if (response.ok) {
        setMessage("Login Successful");
        setStore(result);
        console.log(result); // Store the response (likely the user data or token)
        navigate(`/Logindata/${result.LoginData._id}`);
      } else {
        setMessage(result.Message); // If not successful, show the error message
      }
    } catch (error) {
      setMessage("Something Went Wrong, Please Try Again Later");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="LoginDiv  flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="textheading mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login To Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="GET" onSubmit={HandleSubmit}>
            <div>
              <label
                for="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-orange-700 hover:text-indigo-500 text-justify"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-gradient-to-r to-teal-400 from-blue-500 hover:from-pink-500 hover:to-orange-500 ... flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log In
              </button>{" "}
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-zinc-100">
            Not a member?
            <Link
              to="/Signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              New User ?
            </Link>
          </p>
          {Message && <p>{Message}</p>}
          {Store && (
            <>
              <p>{Store.msg}</p>
              {/* <p>{Store.Token}</p> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
