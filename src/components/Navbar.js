import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();
    const sLocation = location.pathname;

    return (
        <>
            {
                sLocation === "/" && <nav className="mx-auto flex font-mono pb-16 pl-3 pt-2 md:pt-0 md:pl-0 md:h-32 md:pb-0 md:w-[80%]"></nav>
            }
            {
                sLocation === "/info" && <nav className="mx-auto flex font-mono pb-16 pl-3 pt-2 md:pt-0 md:pl-0 md:h-32 md:pb-0 md:w-[80%]">
                    <div className="flex my-auto text-white">
                        <Link to={"/"} className="text-white">
                            Home
                        </Link>
                        <p className="ml-3">/</p>
                        <p className="ml-3 text-neutral-400">Info</p>
                    </div>
                </nav>
            }
            {
                sLocation === "/project/marketplace" && <nav className="mx-auto flex font-mono pb-16 pl-3 pt-2 md:pt-0 md:pl-0 md:h-32 md:pb-0 md:w-[80%]">
                    <div className="flex my-auto text-white">
                        <Link to={"/"} className="text-white">
                            Home
                        </Link>
                        <p className="ml-3">/</p>
                        <p className="ml-3 text-neutral-400">Project-003</p>
                    </div>
                </nav>
            }
            {
                sLocation === "/project/klatterdomen" && <nav className="mx-auto flex font-mono pb-16 pl-3 pt-2 md:pt-0 md:pl-0 md:h-32 md:pb-0 md:w-[80%]">
                    <div className="flex my-auto text-white">
                        <Link to={"/"} className="text-white">
                            Home
                        </Link>
                        <p className="ml-3">/</p>
                        <p className="ml-3 text-neutral-400">Klatterdomen</p>
                    </div>
                </nav>
            }
            {
                sLocation === "/project/portfolio" && <nav className="mx-auto flex font-mono pb-16 pl-3 pt-2 md:pt-0 md:pl-0 md:h-32 md:pb-0 md:w-[80%]">
                    <div className="flex my-auto text-white">
                        <Link to={"/"} className="text-white">
                            Home
                        </Link>
                        <p className="ml-3">/</p>
                        <p className="ml-3 text-neutral-400">Portfolio</p>
                    </div>
                </nav>
            }
            {
                sLocation === "/project/forum" && <nav className="mx-auto flex font-mono pb-16 pl-3 pt-2 md:pt-0 md:pl-0 md:h-32 md:pb-0 md:w-[80%]">
                    <div className="flex my-auto text-white">
                        <Link to={"/"} className="text-white">
                            Home
                        </Link>
                        <p className="ml-3">/</p>
                        <p className="ml-3 text-neutral-400">Project-002</p>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar;