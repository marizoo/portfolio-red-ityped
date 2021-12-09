import { useState } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import Topbar from "./components/Topbar";

const AppContainer = styled.div`
height: 100vh;
`

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <AppContainer>
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </AppContainer>
  )
};

export default App;