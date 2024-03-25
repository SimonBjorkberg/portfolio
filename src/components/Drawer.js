import { Link } from "react-router-dom"
import githubIcon from '../images/github-mark-white.png'

const Drawer = ({ project, setX }) => {

    console.log(project)

    return (
        <div className="h-full flex flex-col">
            <div className="w-full h-fit flex justify-end">
                <p className="text-white mr-5 my-2 hover:cursor-pointer w-fit h-fit self-end" onClick={() => { setX(false) }}>x</p>
            </div>
            <div className="h-full md:mx-10 mb-10 overflow-y-scroll flex flex-col text-white">
                <p className="text-[4vw] md:text-[2vw] mb-2 h-fit mx-5 md:mx-0 w-fit">{project.title}</p>
                <p className='text-[12px] md:text-sm mb-2 mx-5 md:mx-0'>{project.description}</p>
                <div>
                    <ul className='flex w-fit h-fit gap-2 mt-2 flex-wrap md:w-1/2 mx-5 md:mx-0 md:text-md text-sm'>
                        {project?.technologies?.map((tech, i) => {
                            return <li key={i} className='border px-1'>{tech}</li>
                        })}
                    </ul>
                </div>
                <div className="my-auto w-full mb-5">
                    {project?.info?.map((info, i) => {
                        { console.log(info) }
                        return <div key={i} className="w-full">
                            <div className="overflow-hidden transition-all duration-1000 relative">
                                <img src={info.image} className="rounded-sm md:h-[220px] h-[170px] object-cover object-left transition-all duration-1000 w-full" />
                            </div>
                            <p className="mt-5 md:w-2/3 md:mx-0 mx-5">{info.description}</p>
                        </div>
                    })}

                </div>
                <div className="mt-auto m-5 flex gap-10">
                    <Link to={`${project.githubLink}`} target='_blank' rel='noopener noreferrer' className="w-8 rounded-full"><img src={githubIcon} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Drawer;