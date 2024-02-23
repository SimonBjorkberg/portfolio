import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" mx-auto flex font-mono pb-16 pl-3 pt-2 md:pt-0 md:pl-0 md:h-32 md:pb-0 md:w-[80%]">
            <Link className="my-auto" to={"/"}>
                <p className="text-white">Home</p>
            </Link>
        </nav>
    )
}

export default Navbar;