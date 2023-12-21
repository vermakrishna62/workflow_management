import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpiner";
import Dashboard from "./dashboard/Dashboard";

const HomeAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [msg, setMsg] = useState("");
  const [show, setShow] = useState("");

  const getData = async () => {
    if (localStorage.getItem("access_token") === null) {
      // alert("login to karo");
      toast.error("Login to karo", { position: "top-center" });
      navigate("/");
    } else {
      try {
        const { data } = await axios
          .get("home/", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .catch((err) => setMsg("error"));
        console.log(data);
        setShow(data.message);
        setLoading(false);
      } catch (e) {
        // alert("pehle login karo bhaisaab");
        // never uncomment below code, as it will do damage
        // window.location.href = "/";

        console.log("not auth");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // if (msg === "error") {
  //   alert("error occured");
  //   return <Navigate to="/" />;
  // }
  const user = "User 12";

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : msg === "error" ? (
        <div>Error occurred. Please try again.</div>
      ) : (
        <>
          <Dashboard user={user} />
        </>
      )}
    </>
  );
};

export default HomeAuth;
