import ProjectContainer from "../../components/ProjectContainer";
import "./style.css";

export default function Projects() {
    return (
        <div className="page-container">
            <h1 className="title title-projects">These are my projects</h1>
            <ProjectContainer title="DotTeteu.com" text ="My first personal site, that has a frontend with somethings about me, my projects, how to contact me, and a feedback about what I do." hrefImage="https://i.ibb.co/b2zXDmQ/Screenshot-1.png" type="project-light"/>
            <ProjectContainer title="Hotel Red Light" text ="My final project of university UNIP, that I made the
            backend of a hotel system with NodeJS and Typescript." hrefImage="https://i.ibb.co/tKVj57g/Screenshot-2.png" type="project-dark"/>
       </div>
    )
} 