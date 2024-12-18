import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  useEffect(() => {
    document.title = "Login - Mountain Trek";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Manage forgot password form visibility
  const navigate = useNavigate();

  // Handle standard email/password login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      toast.success("Redirecting to Google login...");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container-style min-h-screen flex justify-center  items-center">
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl border border-gray-400 rounded-xl px-8 py-4">
        <h1 className="text-2xl mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="block p-2 w-full mb-4 hover:outline-none focus:outline-none border focus:border-gray-400 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block p-2 w-full mb-4 hover:outline-none focus:outline-none border focus:border-gray-400 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-400 text-white p-2 w-full mb-4 border rounded-lg"
        >
          Login
        </button>

        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 hover:bg-red-400 text-white p-2 w-full mb-4 border rounded-lg"
        >
          Login with Google
        </button>

        <div className="mt-4">
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </div>

        {/* Forgot Password Section */}
        <div className="mt-4">
          <div className="mt-4">
            <button
              onClick={() => {
                if (email) {
                  navigate(
                    `/reset-password?email=${encodeURIComponent(email)}`
                  );
                } else {
                  toast.error("Please enter your email address.");
                }
              }}
              className="text-blue-600 underline"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
