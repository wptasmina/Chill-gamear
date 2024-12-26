import React, { useContext, useRef, useState } from "react";

import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { signInWithGoogle, setLoading, logInWithEmail } =
    useContext(AuthContext);
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logInWithEmail(email, password, navigate);
  };

  const handleForgetRoute = () => {
    const email = emailRef.current?.value || "";
    navigate("/forgetPassword", { state: { email } });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleGooglePopUp = async () => {
    setLoading(true);
    const result = await signInWithGoogle();

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center my-10 mx-5">
      <div className="card bg-base-100 w-full md:w-3/4 lg:w-3/6 px-2 shrink-0 shadow-2xl">
        <h2 className="text-2xl my-10 font-bold text-center mb-6 text-[#FF00D3]">
          Login Now!
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
              ref={emailRef}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input w-full input-bordered pr-10"
                required
                name="password"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <label className="label">
              <a
                onClick={handleForgetRoute}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent border-none bg-[#FF00D3]">
              Login
            </button>
          </div>
          <button onClick={handleGooglePopUp} className="btn flex items-center">
            <span>
              <FaGoogle />
            </span>
            Login With Google
          </button>
        </form>
        <div className="flex justify-center items-center">
          <p className="my-5 font-bold">
            Don't have an account?{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
