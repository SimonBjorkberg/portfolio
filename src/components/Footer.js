const Footer = () => {
    return (
        <div className="h-24 w-full border-t border-neutral-500">
            <div className="w-[80%] h-full mx-auto font-sans text-sm justify-between flex text-neutral-500">
                <p className="h-fit my-auto hover:text-white transition-all duration-500 hover:cursor-pointer">Simon Björkberg © 2024</p>
                <div className="flex my-auto">
                    <p className="mr-10 hover:text-white transition-all duration-500 hover:cursor-pointer">Mail</p>
                    <p className="hover:text-white transition-all duration-500 hover:cursor-pointer">LinkedIn</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;