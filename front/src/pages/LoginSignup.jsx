import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  const [state, setState] = React.useState("Login");
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signUp = async () => {
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup ">
      <div className="loginsignup-conyainer  m-auto bg-white py-10 px-16">
        <h1 className=" my-5 mx-0 text-5xl">{state}</h1>
        <div className="loginsignup-fields flex flex-col gap-7 mt-8">
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              onChange={(e) => changeHandler(e)}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}
          className=" h-20 text-white bg-red-400 mt-8 borde\ text-2xl font-medium cursor-pointer"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login mt-5 text-[#5c5c5c] text-lg font-medium">
            Already have an account?
            <span
              className="text-[#ff4141] font-semibold cursor-pointer"
              onClick={() => {
                setState("Login");
              }}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="loginsignup-login mt-5 text-[#5c5c5c] text-lg font-medium">
            Create an account?
            <span
              className="text-[#ff4141] font-semibold cursor-pointer"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree flex items-center mt-6 gap-5 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
