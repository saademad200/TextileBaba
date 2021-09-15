/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/core";
import React from "react";

const Button = ({ text }) => (
  <a css={styles} href="#/" className="btn">
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  background: #1F51FF;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 14px;
  transition: background 500ms ease-in-out;
  &:hover {
    background: #4169E1;
  }
`;

export default Button;
