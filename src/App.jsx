import { useState } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Topbar from "./components/Topbar";
import Intro from "./sections/Intro";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Works from "./sections/Works";

const AppContainer = styled.div`
height: 100vh;
`

const Sections = styled.div`
width: 100%;
        height: calc(100vh - 70px);
        background-color: lightsalmon;
        position: relative;
        top: 70px;
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        scrollbar-width: none; //for firefox
        &::-webkit-scrollbar{
            display: none;
        }

        > *{
            width: 100vw;
            height: calc(100vh - 70px);
            scroll-snap-align: start;
        }
`

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <AppContainer>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sections>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
      </Sections>  
  </AppContainer>
  )
};

export default App;