import React from "react";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const LogoutAuth = () => {
  const navigate = useNavigate();
  const [executed, setExecuted] = useState(false);

  useEffect(() => {
    (async () => {
      const refresh_token = localStorage.getItem("refresh_token");

      if (!refresh_token) {
        // User is not logged in, navigate to the desired route
        navigate("/");
      } else {
        try {
          const { data } = await axios.post(
            "logout/",
            {
              refresh_token: localStorage.getItem("refresh_token"),
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            },
            { withCredentials: true }
          );

          localStorage.clear();
          axios.defaults.headers.common["Authorization"] = null;

          // alert("logout successfull");

          toast.success("You are logged out", { position: "top-center" });

          navigate("/");
        } catch (e) {
          console.log("logout not working", e);
        }
      }
    })();
  }, []);

  return <div></div>;
};

export default LogoutAuth;
