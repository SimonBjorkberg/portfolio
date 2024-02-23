import marketplaceImage from '../images/marketplace.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Marketplace = () => {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="2xl:h-[500px] md:h-[400px] h-[250px] opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate('/project/marketplace')}>
            <div className="absolute bottom-0 left-0 md:ml-4 mb-3 z-10 text-black">
                <p className='mb-1 md:text-xl text-white bg-black w-fit p-1'>Project 003</p>
                <p className='md:text-3xl text-xl text-white bg-black w-fit p-1'>E-Commerce Marketplace</p>
            </div>
            <img src={marketplaceImage} alt='' className={`rounded-sm object-cover w-full h-full transition-all duration-1000 ${isHovered ? "scale-[1.03]" : "scale-100"}`}/>
        </div>
    )
}

export default Marketplace;