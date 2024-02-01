import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TransactionHistory = ({ data }) => {
  const [transactions, setTransactions] = useState();

  const getTransactions = async () => {
    const response = await axios.get("emp-transaction/emp-1/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data.transaction_data);
    setTransactions(response.data.transaction_data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Box>
      <div>TransactionHistory</div>

      <div>
        <ul>
          {transactions &&
            transactions.leave_history.map((item, index) => {
              return (
                <>
                  <li key={index}>
                    Reason - {item.reason} <br />
                    Status - {item.status} <br />
                    User - {item.user} <br />
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </Box>
  );
};

export default TransactionHistory;
