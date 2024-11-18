import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Profile = () => {

  
  useEffect(() => {
    document.title = "My Profile - Mountain Trek";
  }, []);



  const [user] = useAuthState(auth);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error("No user is logged in");
    }
  }, [user]);



  return (
    <div className="container-style py-24">
      <div className="w-full p-8 border bg-white border-gray-200 shadow-lg rounded-xl">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl mb-6">Welcome {user?.displayName} to your profile:</h1>
      </div>
     
      {user ? (
        <div className="space-y-4">
          <div className="w-full flex justify-center items-cente mb-10">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div>
            <p>
              <strong>Name:</strong> {user.displayName || "No name provided"}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigate("/update-profile")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Profile
            </button>
            <button
              onClick={() => navigate("/reset-password")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Reset Password
            </button>
          </div>
         
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
      </div>
    
    </div>
  );
};

export default Profile;
