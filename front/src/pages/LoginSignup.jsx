import React from "react";
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

  const [errors, setErrors] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required. Please fill in the email field.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required. Please fill in the email field.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    if (!formData.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required. Please fill in the password field.",
      }));
    } else if (formData.password.trim().length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password should contain at least 8 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }

    if (!errors.password && !errors.username && !errors.email) {
      state === "Login" ? login() : signUp();
    }
  };

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4001/login", {
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
      localStorage.setItem("username", responseData.name);
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signUp = async () => {
    let responseData;
    await fetch("http://localhost:4001/signup", {
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
      localStorage.setItem("username", responseData.name);
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="w-full bg-[#fce3fe] py-16 xs:py-28">
      <form
        onSubmit={handleSubmit}
        className=" max-w-lg m-auto bg-white py-4 xs:py-10 px-7 xs:px-16"
      >
        <h1 className=" my-5 mx-0 text-3xl xs:text-4xl sm:text-5xl">{state}</h1>
        <div className="loginsignup-fields  flex flex-col gap-3 xs:gap-7 mt-8">
          {state === "Sign Up" && (
            <>
              <input
                className="border border-solid border-[#c9c9c9] p-3 xs:p-5 rounded-xl"
                name="username"
                value={formData.username}
                onChange={(e) => changeHandler(e)}
                type="text"
                placeholder="Your Name"
              />
              {errors.username && (
                <p className="-mt-5" style={{ color: "red" }}>
                  {errors.username}
                </p>
              )}
            </>
          )}
          <input
            className="border border-solid border-[#c9c9c9] p-3 xs:p-5  rounded-xl"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="-mt-5" style={{ color: "red" }}>
              {errors.email}
            </p>
          )}
          <input
            className="border border-solid border-[#c9c9c9] p-3 xs:p-5  rounded-xl"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="-mt-5" style={{ color: "red" }}>
              {errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className=" min-w-48 xs:min-w-56 sm:min-w-72 rounded-xl h-10 xs:h-14 text-white bg-red-400 mt-4 sm:mt-8 text-lg xs:text-xl sm:text-2xl font-medium cursor-pointer"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login mt-5 text-[#5c5c5c] text-sm xs:text-base sm:text-lg font-medium">
            Already have an account?&nbsp;
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
          <p className="loginsignup-login mt-5 text-[#5c5c5c] text-sm xs:text-base sm:text-lg font-medium">
            Create an account?&nbsp;
            <span
              className="text-[#ff4141] text-sm xs:text-basesm:text-lg font-semibold cursor-pointer"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree flex items-center mt-6 gap-5 text-[#5c5c5c] text-sm xs:text-base sm:text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
