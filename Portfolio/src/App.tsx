import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";

import Headers from "./components/Headers";
import ThemeContext from "./components/ThemeContext";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState<boolean>(true);
  const toggle = () => setDark((d) => !d);

  useEffect(() => {
    document.querySelector("body")?.classList.toggle("dark-mode", dark);
  },[dark])
  
  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <BrowserRouter>
        <Headers dark={dark} toggle={toggle} />
        <Routes>
          <Route path="" element={<Home dark={dark}/>} />

          <Route path="/projects">
            <Route index element={<Projects />} />
            <Route path=":id" element={<Projects />} />
          </Route>

          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
