import React from "react";

const PromotionRequest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "promotionapply/",
        {
          user: data.user.username,
          current_position: "2023-01-01",
          new_position: "2023-01-01",
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

  return <div>PromotionRequest</div>;
};

export default PromotionRequest;
