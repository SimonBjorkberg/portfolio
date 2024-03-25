const Drawer = ({ project, setX }) => {

    return (
        <div className="h-full flex flex-col">
            <div className="w-full h-fit flex justify-end">
                <p className="text-white mr-5 my-2 hover:cursor-pointer w-fit h-fit self-end" onClick={() => { setX(false) }}>x</p>
            </div>
            <div className="h-full mx-10 mb-10 overflow-y-auto text-white">
                <p className="text-4xl mb-2">{project.title}</p>
                <p className='text-sm mb-2 w-full'>{project.description}</p>
                <div>
                    <ul className='flex w-full h-fit gap-2 mt-2 flex-wrap md:w-1/2'>
                        {project?.technologies?.map((tech) => {
                            return <li className='border px-1'>{tech}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Drawer;