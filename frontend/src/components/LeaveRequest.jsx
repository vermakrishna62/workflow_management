import React from "react";
import axios from "axios";
import { Box } from "@mui/material";

const LeaveRequest = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "leaveapply/",
        {
          user: data.user.username,
          start_date: "2023-01-01",
          end_date: "2023-01-01",
          reason: "Vacation",
          status: "Application Sent",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Box>
        <div>LeaveRequest</div>

        <br />
        <button onClick={handleSubmit}>Submit</button>
      </Box>
    </>
  );
};

export default LeaveRequest;
