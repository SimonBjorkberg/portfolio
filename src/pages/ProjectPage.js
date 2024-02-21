import { useContext } from "react";
import { ProjectContext } from "../context/project.context";

const ProjectPage = () => {
    const { project } = useContext(ProjectContext)

    console.log(project)

    return (
        <div className="">
            <img src={project.picture} alt="" />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectPage;