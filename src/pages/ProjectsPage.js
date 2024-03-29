import { useContext, useEffect, useState } from "react";
import data from "../data/data";
import Drawer from "../components/Drawer";
import { ScrollContext } from "../components/utils/ScrollContext";

const ProjectsPage = () => {
    const [project, setProject] = useState({})
    const [show, setShow] = useState(false)
    const [x, setX] = useState(false)

    const { setOpened } = useContext(ScrollContext)

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
        <main className="md:w-[80%] mx-auto relative">
            <div className="2xl:grid 2xl:grid-cols-2 flex flex-col gap-2 2xl:flex-none font-mono mb-2">
                {data.projects.map((project, i) => {
                    return <div key={i} className="2xl:h-[300px] md:h-[300px] h-[200px] opacity-70 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative" 
                    onClick={() => { setProject(project); setX(true); setOpened(true) }}>
                        <div className="absolute bottom-2 left-2 z-10 w-fit text-black">
                            <p className='md:text-2xl text-md text-white bg-black p-1'>{project.title}</p>
                        </div>
                        <img src={project.picture} alt='' className={`bg-white rounded-sm object-cover w-full h-full transition-all duration-1000`} />
                    </div>
                })}
            </div>
            <div className={`top-0 h-screen bg-neutral-950 left-0 opacity-95 transition-all duration-1000 z-10 ${x ? "2xl:w-2/3 w-full fixed" : "w-0 fixed"}`}>
                {<div className="h-full">
                    {show && <Drawer project={project} setX={setX} setShow={setShow} x={x} setOpened={setOpened} />}
                </div>}
            </div>
        </main>
    )
}

export default ProjectsPage;