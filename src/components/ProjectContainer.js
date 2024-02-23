const ProjectContainer = ({ title, description, timeFrame }) => {
    return (
        <div className='font-light border-b mb-5 border-neutral-700 flex lg:flex-row flex-col lg:justify-between h-fit'>
            <div className='flex flex-col justify-between w-full'>
                <h1 className='text-xl mb-4'>{title}</h1>
                <p className='lg:mb-4 mb-3 lg:w-1/2 md:min-w-[600px] text-neutral-400'>{description}</p>
            </div>
            <div className='my-auto lg:w-44 mb-4 lg:text-right text-neutral-400'>
                <p className=''>{timeFrame}</p>
            </div>
        </div>
    )
}

export default ProjectContainer;