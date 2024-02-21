import { useState } from 'react';
import forumImage from '../images/forum.jpg'

const Forum = () => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="h-[500px] opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="absolute bottom-0 left-0 ml-4 mb-3 z-10 text-black">
                <p className='mb-1 text-xl text-white bg-black w-fit p-1'>Web - Project 002</p>
                <p className='text-3xl text-white bg-black w-fit p-1'>Forum</p>
            </div>
            <img src={forumImage} alt="" className={`rounded-sm object-cover w-full h-full transition-all duration-1000 ${isHovered ? "scale-105" : "scale-100"}`} />
        </div>
    )
}

export default Forum;