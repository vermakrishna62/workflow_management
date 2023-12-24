import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
`;

const spinnerContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinner = () => {
  return (
    <div className="sweet-loading" css={spinnerContainer}>
      <ClipLoader size={50} color={"#123abc"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
