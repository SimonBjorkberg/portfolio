import { Link } from "react-router-dom"
import githubIcon from '../images/github-mark-white.png'

const Drawer = ({ project, setX, setOpened }) => {

    return (
        <div className="h-full flex flex-col">
            <div className="w-full h-fit flex justify-end">
                <p className="text-white mr-5 my-2 hover:cursor-pointer w-fit h-fit self-end" onClick={() => { setX(false); setOpened(false) }}>x</p>
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
                <div className="flex py-10">
                    <Link to={`${project.githubLink}`} target='_blank' rel='noopener noreferrer' className="w-8 rounded-full hover:bg-neutral-700"><img src={githubIcon} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Drawer;