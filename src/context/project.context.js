import { createContext, useState } from "react";


const ProjectContext = createContext()

function ProjectProviderWrapper(props) {
    const [project, setProject] = useState({})

    return (
        <ProjectContext.Provider
            value={{
                project,
                setProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
}

export { ProjectProviderWrapper, ProjectContext }