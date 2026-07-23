import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://zerodha-clone-wmj5.onrender.com/signup", {
        name,
        email,
        password,
      });
      setMessage(res.data.message);
      window.location.href = "https://zerodha-clone-z8fj.onrender.com";
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong!");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://zerodha-clone-wmj5.onrender.com/login", {
        email,
        password,
      });
      setMessage(res.data.message);
      window.location.href = "https://zerodha-clone-z8fj.onrender.com";
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-5 border rounded shadow">
          <h2 className="text-center mb-4">
            {isLogin ? "Login to your account" : "Open a free demat account"}
          </h2>
          {message && <p className="text-center text-danger">{message}</p>}
          <form onSubmit={isLogin ? handleLogin : handleSignup}>
            {!isLogin && (
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="text-center mt-3">
            {isLogin ? (
              <>
                Account nahi hai?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => { setIsLogin(false); setMessage(""); }}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => { setIsLogin(true); setMessage(""); }}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;