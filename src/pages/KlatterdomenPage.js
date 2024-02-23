import { useEffect } from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
import scrollToTop from "../components/utils/scrollToTop";

const KlatterdomenPage = () => {

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div className="text-white">
            <div className="md:w-[80%] w-[95%] mx-auto">
                <h1 className="md:text-5xl text-3xl font-mono">{data.projects[1].title}</h1>
                <p className="my-16 md:max-w-[400px] text-neutral-400">{data.projects[1].description}</p>
            </div>
            <img src={data.projects[1].picture} alt='' className='rounded-sm object-cover w-full 2xl:h-[600px] md:h-[400px] h-[250px] transition-all duration-1000' />
            <div className="w-[80%] mx-auto">
                <div className="my-16 flex flex-col md:flex-row justify-between">
                    <div className="flex">
                        <div className="flex flex-col mr-32">
                            <p className="font-light text-neutral-400">Role</p>
                            <p>{data.projects[1].role}</p>
                        </div>
                        <div className="flex flex-col mr-32">
                            <p className="font-light text-neutral-400">Year</p>
                            <p>{data.projects[1].year}</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 md:mt-0">
                        <p className="font-light text-neutral-400">Links</p>
                        <div className="flex">
                            <Link className="hover:text-neutral-400 transition-all duration-200 mr-5" to={data.projects[1].githubLink} target='_blank' rel='noopener noreferrer'>Github</Link>
                            <Link className="hover:text-neutral-400 transition-all duration-200" to={data.projects[1].deployLink} target='_blank' rel='noopener noreferrer'>Preview</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KlatterdomenPage;