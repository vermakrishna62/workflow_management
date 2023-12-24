import React from "react";

const AppraisalRequest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "appraiseapply/",
        {
          user: data.user.username,
          performance_review: "performance review",
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

  return <div>AppraisalRequest</div>;
};

export default AppraisalRequest;
