const ProjectContainer = ({ title, description, timeFrame }) => {
    return (
        <div className='font-light font-mono border-b mb-5 border-neutral-700 flex justify-between h-fit'>
            <div className='flex flex-col justify-between w-full'>
                <h1 className='text-2xl mb-4'>{title}</h1>
                <p className='mb-4 w-1/2 min-w-[700px] text-neutral-400'>{description}</p>
            </div>
            <div className='my-auto w-44 text-right'>
                <p className=''>{timeFrame}</p>
            </div>
        </div>
    )
}

export default ProjectContainer;