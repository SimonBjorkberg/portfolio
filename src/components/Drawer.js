import { Link } from "react-router-dom"
import githubIcon from '../images/github-mark-white.png'

const Drawer = ({ project, setX, setOpened }) => {

    return (
        <div className="h-full flex flex-col">
            <div className="w-full h-fit flex justify-end">
                <p className="text-white px-5 pt-2 pb-3 hover:cursor-pointer w-fit h-fit self-end transition-all z" onClick={() => { setX(false); setOpened(false) }}>x</p>
            </div>
            <div autoFocus className="h-full md:mx-10 px-3 mb-10 overflow-y-auto overscroll-none flex flex-col text-white">
                <p className="text-[4vw] md:text-[2vw] mb-2 h-fit w-fit">{project.title}</p>
                <p className='text-[12px] md:text-[16px] mb-2'>{project.description}</p>
                <div>
                    <ul className='flex w-fit h-fit gap-2 mt-2 flex-wrap md:w-1/2 md:text-md text-sm'>
                        {project?.technologies?.map((tech, i) => {
                            return <li key={i} className='border px-1'>{tech}</li>
                        })}
                    </ul>
                </div>
                <div className="w-full mt-10">
                    {project?.info?.map((info, i) => {
                        return <div key={i} className="w-full">
                            <h1 className="text-[20px] mb-5">{info.title}</h1>
                            <div className="overflow-hidden transition-all duration-1000 relative">
                                <img src={info.image} alt="" className="rounded-sm md:h-[220px] h-[170px] object-cover object-left transition-all duration-1000 w-full" />
                            </div>
                            <p className="mt-5 md:w-2/3 text-[12px] md:text-[16px]">{info.description}</p>
                        </div>
                    })}

                </div>
                <div className="flex my-10 flex-row justify-between bg-black px-4 py-3 h-20 rounded-md">
                    <Link to={`${project.githubLink}`} target='_blank' rel='noopener noreferrer' className="w-8 my-auto rounded-full transition-all duration-500 hover:bg-[#009dff]"><img src={githubIcon} alt="" /></Link>
                    {project.deployLink !== "" && <Link to={`${project.deployLink}`} className="hover:cursor-pointer transition-all w-fit h-fit my-auto px-4 py-3 y">Preview</Link>}
                </div>
            </div>
        </div>
    )
}

export default Drawer;