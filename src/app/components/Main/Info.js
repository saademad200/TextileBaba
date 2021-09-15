/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/core";
import React from "react";

import Button from "../GlobalComponents/Button";

const Info = () => (
  <div css={styles} className="info">
    <img src={"/assets/images/illustrations/logo.svg"} alt="class" />
    <Button text="BECOME A MEMBER" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  img {
    width: 50%;
    margin:40px;    
    height: auto;
    padding: 14px 170px;
    display: block;
  }  
  .btn {
        
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;
