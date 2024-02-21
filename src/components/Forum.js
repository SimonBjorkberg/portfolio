import { useState } from 'react';
import forumImage from '../images/forum.jpg'

const Forum = () => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="h-[500px] opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative bg-gradient-to-t from-black to-white" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="absolute bottom-0 left-0 ml-4 mb-3 z-10 text-black">
                <p className='mb-1 text-xl text-white bg-black w-fit p-1'>Web</p>
                <p className='text-3xl text-white bg-black w-fit p-1'>Forum</p>
            </div>
            <img src={forumImage} alt="test" className='rounded-sm object-cover w-full h-full hover:scale-105 transition-all duration-1000' />
        </div>
    )
}

export default Forum;