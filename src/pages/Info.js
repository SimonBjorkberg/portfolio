import ProjectContainer from '../components/ProjectContainer'
import infoImage from '../images/info.png'
import { Link } from 'react-router-dom'

const Info = () => {

    const technologies = ["React", "MongoDB", "Node.jS", "HBS", "Express", "JWT", "REST API", "Socket.IO", "SCSS", "TailwindCSS", "JavaScript", "CSS", "HTML", "Axios", "Mongoose", "Cloudinary"]

    console.log(technologies)

    return (
        <div className="Info text-white font-sans">
            <img src={infoImage} className='object-cover w-full h-[500px]' alt='' />
            <p className="text-sm font-light">
                Trying to figure out how to solve the green
                <span className='text-blue-400'>
                    <Link to='https://topbouldering.com/what-is-a-boulder-problem/' target='_blank' rel='noopener noreferrer'> problem</Link>
                </span>.
            </p>
            <div className='w-1/2 min-w-[700px] font-light'>
                <h1 className="text-2xl max-w-[900px] mt-16 mb-4 leading-[40px] [word-spacing:-10px] text-neutral-400">Info</h1>
                <p className='mb-3'>I combine my love for problem solving with my education in innovation to create well functioning and user friendly web applications.</p>
                <p className='mb-3'>During my freetime you can expect to find me in the various climbing gyms around Gothenburg, or relaxing infront of my computer either playing games or learning new technologies related to front-end developing.</p>
                <p className='mb-3'>I consider myself a good teamplayer and do not break under pressure or in stressful situations, and I rarely give up when things get tough.</p>
            </div>
            <div className='w-1/2 min-w-[700px] h-fit mt-16'>
                <h1 className='text-2xl mb-4 text-neutral-400 font-light'>Documented competences</h1>
                <div className='flex flex-wrap gap-2 w-full h-fit'>
                    {technologies.map((tech) => {
                        return <p className='px-1 border border-neutral-600 w-fit'>{tech}</p>
                    })}
                </div>
            </div>
            <div className='mt-20 w-full'>
                <h1 className='font-light text-2xl mb-4 text-neutral-400'>Projects</h1>
                <ProjectContainer title={"Project 004 - Klätterdomen"} description={"A React web app created by me with the intention of getting better at TailwindCSS & SASS/SCSS while also experimenting with layouts."} timeFrame={"2023"} />
                <ProjectContainer title={"Project 003 - E-commerce"} description={"A React web app created by me and two classmates with the intention of learning React, Stripe, Socket.IO TailwindCSS & continue refining backend technologies."} timeFrame={"2023"} />
                <ProjectContainer title={"Project 002 - Forum"} description={"A Handlebars web app created by me and a classmate with the intention of learning backend technologies such as creating our own database, schemas & routes."} timeFrame={"2023"} />
                <ProjectContainer title={"Project 001 - Dino Game"} description={"A game created by me and a classmate with the intention of learning JavaScript classes and it's uses, as well as canvas."} timeFrame={"2023"} />
            </div>
            <div className='mt-20'>
                <h1 className='font-light text-2xl mb-4 text-neutral-400'>Experience</h1>
                <div className='font-light font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                    <div className='flex flex-col justify-between w-full'>
                        <h1 className='text-2xl mb-4'>Klätterdomen - Current position</h1>
                        <p className='mb-4 w-1/2 min-w-[600px] text-neutral-400'>Working as a climbing instructor & sales rep, working with ages ranging from kids up to our most senior customers. A big part of the job is customer relations.</p>
                    </div>
                    <div className='my-auto w-44 text-right'>
                        <p className=''>2022 - Present</p>
                    </div>
                </div>
                <div className='font-light font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                    <div className='flex flex-col justify-between w-full'>
                        <h1 className='text-2xl mb-4'>Freelance</h1>
                        <p className='mb-4 w-1/2 min-w-[600px] text-neutral-400'>A web application that me and two classmates built towards the end of high school, it was a reseller web application where we bought digital goods in bulk and sold them to specific buyers.</p>
                    </div>
                    <div className='my-auto w-44 text-right'>
                        2016 - 2018
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-fit mt-16'>
                <h1 className='text-2xl mb-4 text-neutral-400 font-light'>Education</h1>
            </div>
            <div className='font-light font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                <div className='flex flex-col justify-between w-full'>
                    <h1 className='text-2xl mb-4'>Ironhack Bootcamp</h1>
                    <p className='mb-4 w-1/2 min-w-[600px] text-neutral-400'>An intense 6 month fullstack JavaScript course with the prime goal of learning industry standard practices to be able to jump straight into the market.</p>
                </div>
                <div className='my-auto w-44 text-right'>
                    2023
                </div>
            </div>
            <div className='font-light font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                <div className='flex flex-col justify-between w-full'>
                    <h1 className='text-2xl mb-4'>Thoren Innovation School</h1>
                    <p className='mb-4 w-1/2 min-w-[600px] text-neutral-400'>An innovative high-school with a focus on innovation, coming up with new ideas & solving problems in creative ways. This is where my programming journey started.</p>
                </div>
                <div className='my-auto w-44 text-right'>
                    2014 - 2017
                </div>
            </div>
        </div>
    )
}

export default Info;