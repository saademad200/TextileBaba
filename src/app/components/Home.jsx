import React from 'react';
import styled from "styled-components";
import Main from "./Main/Main";
import Services from './Services/Services';
import Facilities from './Facilities/Facilities';
import Contact from './Contact/Contact';
function Home() {
  return (
    <Container >
      <Main />
      <Facilities/>
      <Services/>
      <Contact />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

 
`;


export default Home;