import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="2xl:h-24 h-16 w-full border-t border-neutral-500">
            <div className="w-[80%] h-full mx-auto font-light text-sm justify-between flex text-neutral-300">
                <p className="h-fit my-auto">Simon Björkberg © 2024</p>
                <div className="flex my-auto">
                    <a className="mr-10 hover:text-white transition-all duration-500 hover:cursor-pointer" href="mailto:S.bjorkberg@gmail.com">Mail</a>
                    <Link className="hover:text-white transition-all duration-500 hover:cursor-pointer" to='https://www.linkedin.com/in/simonbjorkberg/' target='_blank' rel='noopener noreferrer'>LinkedIn</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;