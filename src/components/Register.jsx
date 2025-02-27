import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { handleEmailPassSignUp, setUserName, setUserPhoto } =
    useContext(AuthContext);
  const validatePassword = (password) => {
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const length = password.length >= 6;

    if (!uppercase)
      return "Password must contain at least one uppercase letter.";
    if (!lowercase)
      return "Password must contain at least one lowercase letter.";
    if (!length) return "Password must be at least 6 characters long.";

    return "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photoURL");

    const email = form.get("email");
    const password = form.get("password");

    const passError = validatePassword(password);
    if (passError) {
      toast.error(passError);
      return;
    }
    handleEmailPassSignUp(email, password, name, photoURL, navigate);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center my-10 mx-5">
      <div className="card bg-base-100 w-full md:w-3/4 lg:w-3/6 shrink-0 shadow-2xl">
        <h2 className="text-2xl my-10 font-bold text-center mb-2 text-blue-600">
          Register Now!
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
              name="photoURL"
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
                className="input w-full  input-bordered pr-10"
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="flex flex-col px-2 justify-center items-center">
          <div>
            {error && (
              <p className="text-red-600 font-bold text-center">{error}</p>
            )}
          </div>
          <p className="my-5 font-bold">
            Already have an account?{" "}
            <Link className="text-red-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
