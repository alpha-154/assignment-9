import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Firebase logout
      toast.success("Logout successful!");
      navigate("/"); // Redirect to the home page
    } catch (error) {
      toast.error("Failed to log out: " + error.message);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          Mountain Trek
        </Link>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <div className="flex items-center justify-center">
          <Link to="/profile" className="mr-4">
            My Profile
          </Link>
          {user ? (
            <div className="flex items-center justify-center gap-2">
              <div className="relative group">
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
                {/* Username tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "User"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="mr-4">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
