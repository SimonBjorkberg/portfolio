import newForumImage from '../images/newForum.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Forum = () => {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="2xl:h-[500px] md:h-[400px] h-[250px] opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate('/project/forum')}>
            <div className="absolute bottom-0 left-0 md:ml-4 mb-3 z-10 text-black">
                <p className='mb-1 md:text-xl text-white bg-black w-fit p-1'>Project 005</p>
                <p className='md:text-3xl text-xl text-white bg-black w-fit p-1'>TypeScript Forum (WIP)</p>
            </div>
            <img src={newForumImage} alt="" className={`rounded-sm object-cover w-full h-full transition-all duration-1000 ${isHovered ? "scale-[1.03]" : "scale-100"}`} />
        </div>
    )
}

export default Forum;