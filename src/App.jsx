import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdventureDetails from "./pages/AdventureDetails";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./pages/UpdateProfile";
import Error from "./pages/Error";
import ResetPassword from "./pages/ResetPassword";
// Add the AOS CSS import here
import 'aos/dist/aos.css'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
           
               <ResetPassword/>
             
            }
          />
          <Route
            path="/adventure-details/:id"
            element={
              <PrivateRoute>
                <AdventureDetails />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
