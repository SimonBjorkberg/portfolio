import infoImage from '../images/info.png'
import { Link } from 'react-router-dom'

const Info = () => {

    const technologies = ["React", "MongoDB", "Node.jS", "HBS", "Express", "JWT", "REST API", ""]

    console.log(technologies)

    return (
        <div className="Info text-white font-sans">
            <img src={infoImage} className='object-cover w-full h-[500px]' alt=''/>
            <p className="text-sm font-extralight">
  Trying to figure out how to solve the green  
  <span className='text-blue-400'>
    <Link to='https://topbouldering.com/what-is-a-boulder-problem/' target='_blank' rel='noopener noreferrer'> problem</Link>
  </span>.
</p>
            <div className='w-1/2 font-light'>
                <h1 className="text-2xl max-w-[900px] mt-16 mb-4 leading-[40px] [word-spacing:-10px] text-neutral-400">Info</h1>
                <p className='mb-3'>I combine my love for problem solving with my education in innovation to create well functioning and user friendly web applications.</p>
                <p className='mb-3'>During my freetime you can expect to find me in the various climbing gyms around Gothenburg, or relaxing infront of my computer either playing games or learning new technologies related to front-end developing.</p>
                <p className='mb-3'>I consider myself a good teamplayer and do not break under pressure or in stressful situations, and I rarely give up when things get tough.</p>
                <h1 className='text-2xl mt-16 mb-4 text-neutral-400'>Documented competence</h1>
                
            </div>
            <div className=''>
                <h1 className='font-extralight text-2xl mt-20 mb-4 text-neutral-400'>Experience</h1>
                <div className='font-extralight font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                    <div className='flex flex-col justify-between w-full'>
                        <h1 className='text-4xl mb-4'>Klätterdomen - Current position</h1>
                        <p className='mb-4 w-1/2 text-neutral-400'>Working as a climbing instructor & sales rep, working with ages ranging from kids up to our most senior customers. A big part of the job is customer relations.</p>
                    </div>
                    <div className='my-auto w-44 text-right'>
                        <p className=''>2022 - Present</p>
                    </div>
                </div>
                <div className='font-extralight font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                    <div className='flex flex-col justify-between w-full'>
                        <h1 className='text-4xl mb-4'>Project 004 - Klätterdomen</h1>
                        <p className='mb-4 w-1/2 text-neutral-400'>A React web app created by me with the intention of learning TailwindCSS, SASS & playing around with layouts.</p>
                    </div>
                    <div className='my-auto w-44 text-right'>
                        2023
                    </div>
                </div>
                <div className='font-extralight font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                    <div className='flex flex-col justify-between w-full'>
                        <h1 className='text-4xl mb-4'>Project 003 - E commerce</h1>
                        <p className='mb-4 w-1/2 text-neutral-400'>A React web app created by me and two classmates with the intention of learning React & continuing refining backend technologies.</p>
                    </div>
                    <div className='my-auto w-44 text-right'>
                        2023
                    </div>
                </div>
                <div className='font-extralight font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                    <div className='flex flex-col justify-between w-full'>
                        <h1 className='text-4xl mb-4'>Project 002 - Forum</h1>
                        <p className='mb-4 w-1/2 text-neutral-400'>A Handlebars web app created by me and a classmate with the intention of learning backend technologies.</p>
                    </div>
                    <div className='my-auto w-44 text-right'>
                        2023
                    </div>
                </div>
                <div className='font-extralight font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
                    <div className='flex flex-col justify-between w-full'>
                        <h1 className='text-4xl mb-4'>Project 001 - Dino Game</h1>
                        <p className='mb-4 w-1/2 text-neutral-400'>A game created by me and a classmate with the intention of learning JavaScript classes and it's uses.</p>
                    </div>
                    <div className='my-auto w-44 text-right'>
                        2023
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;