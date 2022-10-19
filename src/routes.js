import {Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home/index';
import Projects from './pages/Projects';

 
 
export default function RouterComponent(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>

    );
}