import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-32 w-[80%] mx-auto flex">
            <Link className="my-auto" to={"/"}>
                <p className="text-white">Home</p>
            </Link>
        </div>
    )
}

export default Navbar;