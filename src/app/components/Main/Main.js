/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/core";
import React from "react";
import Header from "../Navbar/Nav";
import Info from "./Info";

const Main = () => (
  <section css={styles} className="main" id="home">
    
    <Header />
    <Info/>
    
  </section>
);

const styles = css`
  width: 100%;
  height: 80vh;
`;

export default Main;
