import Dino from "./Dinogame";
import Forum from "./Forum";
import Klatterdomen from "./Klatterdomen";
import Marketplace from "./Marketplace";

const Projects = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-3 mb-3">
                <Forum />
                <Klatterdomen />
                <Marketplace />
                <Dino />
            </div>
        </div>
    )
}

export default Projects;