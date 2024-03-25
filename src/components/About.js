import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="text-white mx-auto w-[95%] md:w-full">
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-90"></span>
                    <span className="relative inline-flex h-1 w-1 mx-auto my-auto rounded-full bg-green-500"></span>
                </span>
                <p className="text-sm">Available for work.</p>
            </div>
            <p className="text-2xl font-mono max-w-[900px] my-16 md:leading-[50px] md:text-5xl md:[word-spacing:-10px]">I'M A FRONT-END DEVELOPER BORN, RAISED & BASED IN GOTHENBURG.</p>
            <div className="flex mb-2 justify-between">
                <Link to={"/info"} className="bg-neutral-800 hover:cursor-pointer hover:bg-neutral-700 transition-all duration-500 w-fit px-4 py-3">Info About Simon</Link>
                <Link to={"/projects"} className="hover:cursor-pointer transition-all duration-500 w-fit px-4 py-3 x">All Projects</Link>
            </div>
        </div>
    )
}

export default About;