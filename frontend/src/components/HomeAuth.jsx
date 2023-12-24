import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpiner";
import Dashboard from "./dashboard/Dashboard";

const HomeAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [msg, setMsg] = useState("");
  const [userdata, setUserdata] = useState();

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
        console.log("Data List :- ");
        const username = data.data.username;
        setUserdata(username);

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

    () => {
      console.log("clean up");
    };
  }, []);

  // if (msg === "error") {
  //   alert("error occured");
  //   return <Navigate to="/" />;
  // }
  const user = "User 12";

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : msg === "error" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Error occurred. Please try again.
        </div>
      ) : (
        <>
          <Dashboard user={userdata} />
        </>
      )}
    </>
  );
};

export default HomeAuth;
