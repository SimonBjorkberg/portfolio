import Portfolio from "./Portfolio";
import Forum from "./Forum";
import Klatterdomen from "./Klatterdomen";
import Marketplace from "./Marketplace";

const Projects = () => {

    return (
        <div className="mb-2">
            <div className="2xl:grid 2xl:grid-cols-3 flex flex-col gap-2 2xl:flex-none font-mono">
                <Forum />
                <Klatterdomen />
                <Portfolio />
                <Marketplace />
            </div>
        </div>
    )
}

export default Projects;