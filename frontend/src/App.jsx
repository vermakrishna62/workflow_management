import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestAuthentication from "./components/TestAuthentication";
import HomeAuth from "./components/HomeAuth";
import LogoutAuth from "./components/LogoutAuth";
import LeaveRequest from "./components/LeaveRequest";
import PromotionRequest from "./components/PromotionRequest";
import AppraisalRequest from "./components/AppraisalRequest";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TestAuthentication />} />
          <Route path="/home" element={<HomeAuth />} />
          <Route path="/logout" element={<LogoutAuth />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/promotion-request" element={<PromotionRequest />} />
          <Route path="/appraisal-request" element={<AppraisalRequest />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

// import React from "react";
// import Test from "./Test";

// const App = () => {
//   return (
//     <div>
//       <Test />
//     </div>
//   );
// };

// export default App;
