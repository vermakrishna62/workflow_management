import React, { useState } from "react";
// import { useAuth } from "./AuthProvider";

import axios from "axios";

const MainContent = () => {
  //   const auth = useAuth();

  //   console.log(auth);

  const [employeeDetail, setEmployeeDetail] = useState();

  const getEmpDetail = async () => {
    try {
      const response = axios.get(
        "http://localhost:8000/api/employees/test121/"
      );

      console.table(response);
    } catch (err) {
      console.log(err);
    }
  };

  return <div>MainContent</div>;
};

export default MainContent;
