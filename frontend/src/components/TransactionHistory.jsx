import { Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const TransactionHistory = ({ data }) => {
  const [transactions, setTransactions] = useState();

  const getTransactions = async () => {
    const response = await axios.get("emp-transaction/emp-1/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data.transaction_data);
  };

  getTransactions();

  return (
    <Box>
      <div>TransactionHistory</div>
    </Box>
  );
};

export default TransactionHistory;
