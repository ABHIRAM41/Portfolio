import { useState } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import About from "./Components/About";
import { Box } from "@chakra-ui/react";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Achievements from "./Components/Achievements";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ProjectN from "./Components/ProjectsN";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <NavBar />
        <About id="top" />
        <Skills />
        <ProjectN id="Projects" />
        <Projects id="LProjects" />
        <Achievements id="achievements" />
        <Contact id="contact" />
        <Footer />
      </Box>
    </>
  );
}

export default App;
