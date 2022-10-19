import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import {Home} from "./pages/Home"
import {AboutMe} from "./pages/AboutMe"
import {Contact} from "./pages/Contact"
import {Projects} from "./pages/Projects"
import './global/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (     
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
