import { useState } from 'react';
import marketplaceImage from '../images/marketplace.jpg'

const Marketplace = () => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="col-span-2 h-[500px] opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="absolute bottom-0 left-0 ml-4 mb-3 z-10 text-black">
                <p className='mb-1 text-xl text-white bg-black w-fit p-1'>Web</p>
                <p className='text-3xl text-white bg-black w-fit p-1'>Marketplace</p>
            </div>
            <img src={marketplaceImage} alt='' className={`rounded-sm object-cover w-full h-full transition-all duration-1000 ${isHovered ? "scale-105" : "scale-100"}`}/>
        </div>
    )
}

export default Marketplace;