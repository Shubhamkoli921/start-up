import React from 'react'
import shubham from '../assets/shubham.jpg'
const InfoCard = () => {
    return (
        <>
            <div className='flex w-full m-4 p-4'>
                <div className='m-auto'>something</div>
                <div className='grid grid-cols-3'>
                    <div className='m-2'>
                        <img className='w-[250px]' src={shubham} alt="" />
                        <h1 className='text-sm text-center text-gray-700'>Shubham koli <span className='text-gray-500'>&#40; Founder & CEO &#41;</span></h1>
                    </div>
                    <div className='m-2'>
                        <img className='w-[250px]' src={shubham} alt="" />
                        <h1 className='text-sm text-center text-gray-700'>Shubham koli <span className='text-gray-500'>&#40; Founder & CEO &#41;</span></h1>
                    </div>
                    <div className='m-2'>
                        <img className='w-[250px]' src={shubham} alt="" />
                        <h1 className='text-sm text-center text-gray-700'>Shubham koli <span className='text-gray-500'>&#40; Founder & CEO &#41;</span></h1>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default InfoCard