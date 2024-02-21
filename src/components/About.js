import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="text-white">
            <div className="flex items-center gap-2 -translate-x-[2px]">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-90"></span>
                    <span className="relative inline-flex h-1 w-1 mx-auto my-auto rounded-full bg-green-500"></span>
                </span>
                <p className="text-sm font-sans">Available for work.</p>
            </div>
            <p className="text-5xl max-w-[900px] my-16 leading-[50px] [word-spacing:-10px]">I AM A FRONT-END DEVELOPER BORN, RAISED & BASED IN GOTHENBURG.</p>

            <div className="bg-neutral-800 rounded-sm hover:cursor-pointer hover:bg-neutral-700 transition-all duration-500 w-fit mb-20"><Link to={"/info"}><p className="px-4 py-3">Info about Simon</p></Link></div>

        </div>
    )
}

export default About;