import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = () => {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={50} color={"#123abc"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
