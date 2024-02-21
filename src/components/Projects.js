import { useContext } from "react";
import Dino from "./Portfolio";
import Forum from "./Forum";
import Klatterdomen from "./Klatterdomen";
import Marketplace from "./Marketplace";
import { ProjectContext } from "../context/project.context";

const Projects = () => {

    const { setProject } = useContext(ProjectContext)

    return (
        <div>
            <div className="grid grid-cols-3 gap-3 mb-3">
                <Forum setProject={setProject} />
                <Klatterdomen setProject={setProject} />
                <Marketplace setProject={setProject} />
                <Dino setProject={setProject} />
            </div>
        </div>
    )
}

export default Projects;