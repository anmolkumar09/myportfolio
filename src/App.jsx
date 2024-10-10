import styled, {ThemeProvider}from "styled-components"
import {darkTheme} from "./utils/Themes"
import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import HeroSection from "./components/section/Hero"
import Skills from "./components/section/Skills"
import Experience from "./components/section/Experience"
// import Project from "./components/section/Project"
import Education from "./components/section/Education"
const Body = styled.div`
  background-color: ${({theme})=> theme.bg};
  width: 100%;
  color: ${({theme})=> theme.text_primary};
  position: relative;
  overflow-x: hidden;
  height: 90vh;
`;

function App() {

  return <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Navbar/>
      <Body>
        <HeroSection/>
        <Skills/>
        <Experience/>
        <Education/>
        {/* <Project/> */}
      </Body>
    </BrowserRouter>
  </ThemeProvider>
}

export default App
