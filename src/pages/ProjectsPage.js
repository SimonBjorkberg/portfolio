import { useEffect, useState } from "react";
import data from "../data/data";
import Drawer from "../components/Drawer";

const ProjectsPage = () => {

    const [isHovered, setIsHovered] = useState("")
    const [project, setProject] = useState({})
    const [show, setShow] = useState(false)
    const [x, setX] = useState(false)

    useEffect(() => {
        if (x === true) {
            setTimeout(() => {
                setShow(true)
            }, 200);
        }
    }, [x])

    useEffect(() => {
        if (x === false) {
            setTimeout(() => {
                setShow(false)
            }, 400);
        }
    }, [x])

    return (
        <main className="md:w-[80%] mx-auto">
            <div className="grid gap-2 md:grid-cols-2 mb-2">
                {data.projects.map((project, i) => {
                    return <div key={i} className="2xl:h-[300px] md:h-[300px] h-[200px] opacity-70 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative" onMouseEnter={() => setIsHovered(project.title)} onMouseLeave={() => setIsHovered(false)} onClick={() => { setProject(project); setX(true) }}>
                        <div className="absolute bottom-0 left-0 z-10 w-full text-black">
                            <p className='md:text-2xl text-md text-white bg-black p-1'>{project.title}</p>
                        </div>
                        <img src={project.picture} alt='' className={`bg-white rounded-sm object-cover w-full h-full transition-all duration-1000`} />
                    </div>
                })}
            </div>
            <div className={`top-0 h-screen bg-neutral-950 left-0 opacity-95 transition-all duration-1000 z-10 ${x ? "md:w-2/3 w-full fixed" : "w-0 fixed"}`}>
                {<div className="h-full">
                    {show && <Drawer project={project} setX={setX} setShow={setShow} x={x} />}
                </div>}
            </div>
        </main>
    )
}

export default ProjectsPage;