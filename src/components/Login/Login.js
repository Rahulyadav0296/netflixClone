import React, { useState } from "react";
import Header from "../Header/Header";

function Login() {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="The background"
        />
      </div>
      <form className="w-3/12 absolute text-white p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isLogin ? "Sign Up" : "Sign In"}
        </h1>
        {isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            className="p-4 my-4 w-full bg-gray-700"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          value={users.email}
          className="p-4 my-4 w-full bg-gray-700"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Email Password"
          value={users.password}
          onChange={handleChange}
          className="p-4 my-4 w-full bg-gray-700"
          name="password"
        />
        <button type="submit" className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
        <p
          className="py-4 cursor-pointer"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin
            ? "New to NetFlix? Sign Up Now."
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
}

export default Login;
