import React from 'react'
import { FaArrowDown, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import '../css/style.css'
import whoweare from '../assets/whoweare.jpg'
import shubham from '../assets/shubham.jpg'
import omkar from '../assets/omkar.jpeg'
import rakesh from '../assets/rakesh.jpeg'
// import shubhangi from '../assets/shubhangi.jpeg'
// import InfoCard from './infocard';   
const Home = () => {
    return (
        <>
            <div className='h-full w-full p-4 bg ' >
                <div className='w-full m-auto p-2 h-screen border-4 rounded-xl border-slate-500 shadow-black shadow-xl'>
                    <div className='flex justify-center md:flex-col absolute right-0 p-4 mr-6 h-full'>
                        <FaInstagramSquare size={30} className="m-0 text-orange-600 cursor-pointer" />
                        <FaLinkedin size={30} className='text-blue-600 cursor-pointer' />
                        <FaWhatsappSquare size={30} className='text-green-600 cursor-pointer' />
                    </div>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <h1 className='md:text-8xl text-4xl underline'>Maximice<span className='text-red-400 underline'>.</span>com </h1>
                        <span className='md:text-2xl text-sm mt-4 font-extrabold animate-pulse'>Leverage Your Business</span>
                    </div>
                    <FaArrowDown className='animate-bounce flex justify-center items-center w-[100px] m-auto bg-white' size={30} />
                </div>

                <div className='w-full m-auto lg:h-screen h-full p-2 -mb-4'>
                    <h1 className='flex justify-center items-center lg:text-8xl mt-10'>Who we are <span className='text-red-400 ml-2'>?</span></h1>
                    <div className='flex justify-between h-full w-full'>
                        <div className='flex justify-center w-full h-full items-center lg:max-w-[800px]  m-auto'>
                            <div className='mt-2 p-4'>
                                <p className='lg:text-4xl text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptas!
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi impedit. Ducimus, vero id commodi accusamus sint illo </p>
                            </div>
                        </div>
                        <div className='justify-center items-center flex lg:max-w-[200px] m-auto'>
                            <div class="card">
                                <img className='h-full lg:w-[200px]' src={whoweare} alt="" />
                                <div class="card__content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full m-auto p-4 lg:h-screen h-full mt-8'>
                    <div className='flex  p-4 rounded-2xl shadow-xl shadow-black lg:w-[1500px] m-auto'>
                        <div className='flex flex-col justify-center w-full h-full items-center m-auto'>
                            <h1 className='lg:text-6xl text-md w-full text-center'>Innovate with us </h1>
                            <p className='text-center mt-4 lg:text-2xl lg:text-justify text-md lg:p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero?Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                            {/* <span>still  having a doubt?</span> */}
                            <span className='text-orange-500 uppercase lg:text-5xl text-md font-extrabold mt-4 text-center'>Give us a call on</span>
                            <span className='lg:text-3xl text-sm mt-4'>+91-9890845263</span>
                            <span className='lg:text-2xl text-sm'>workwith@maximice.in</span>
                        </div>
                        <div className='w-full h-full flex justify-center items-center m-auto flex-col'>
                            <img className='shadow-white shadow-lg lg:w-[300px] w-[100px] rounded-xl' src={shubham} alt="" />
                            <span className='lg:text-4xl text-sm mt-4'>Shubham koli</span>
                            <span className='text-gray-500 font-serif mt-2 text-sm'>Team Leader</span>
                            <button className='bg-black text-gray-300 lg:w-[200px] w-[100px] p-2 mt-2 text-sm font-sans'>Contact Us</button>

                            <div className='flex rounded-full lg:mt-4 gap-2 lg:gap-4 p-2 lg:w-[200px] w-[80px]'>
                                <FaInstagramSquare size={30} className="m-0 sm:w-[50px] text-orange-600 cursor-pointer" />
                                <FaLinkedin size={30} className='text-blue-600 cursor-pointer' />
                                <FaWhatsappSquare size={30} className='text-green-600 cursor-pointer' />
                                <FaFacebookSquare size={30} className='text-blue-800 cursor-pointer' />
                            </div>
                            <span className='lg:text-2xl text-sm'>www.Maximice.in</span>
                        </div>
                    </div>
                </div>

                <div className='w-full m-auto lg:h-screen h-full  mt-6 '>
                    <h1 className='flex mt-6 w-full m-auto text-6xl justify-center font-extrabold'>Meet Our Leadership Team</h1>

                    <div className='w-full h-full -mt-10 justify-center items-center lg:flex grid grid-cols-2'>
                        <div className='lg:h-[170px] h-[100px] lg:w-full  bg-gradient-to-br to-indigo-500 via-purple-700 from-violet-500 absolute'></div>
                        {/* <div className='flex flex-col'> */}


                        <div className='flex m-2 relative flex-col  '>
                            <img className='w-[190px]  -mt-0 rounded-xl' src={shubham} alt="" />
                            <div className='flex justify-center items-center flex-col '>
                                <h1 className='text-sm text-gray-800'>Shubham koli </h1>
                                <span className='text-gray-500'>&#40; Founder & CEO &#41;</span>
                            </div>
                        </div>
                        <div className='flex m-2 relative flex-col  '>
                            <img className='w-[190px]  mt-14 rounded-xl' src={rakesh} alt="" />
                            <div className='flex justify-center items-center flex-col '>
                                <h1 className='text-sm text-gray-800'>Shubham koli </h1>
                                <span className='text-gray-500'>&#40; Founder & CEO &#41;</span>
                            </div>
                        </div>

                        <div className='flex m-2 relative flex-col  '>
                            <img className='w-[190px]  -mt-0 rounded-xl' src={omkar} alt="" />
                            <div className='flex justify-center items-center flex-col '>
                                <h1 className='text-sm text-gray-800'>Shubham koli </h1>
                                <span className='text-gray-500'>&#40; Founder & CEO &#41;</span>
                            </div>
                        </div>
                        <div className='flex m-2 relative flex-col  '>
                            <img className='w-[190px]  mt-14 rounded-xl' src={shubham} alt="" />
                            <div className='flex justify-center items-center flex-col '>
                                <h1 className='text-sm text-gray-800'>Shubham koli </h1>
                                <span className='text-gray-500'>&#40; Founder & CEO &#41;</span>
                            </div>
                        </div>
                        <div className='flex m-2 relative flex-col  '>
                            <img className='w-[190px]  -mt-0 rounded-xl' src={shubham} alt="" />
                            <div className='flex justify-center items-center flex-col '>
                                <h1 className='text-sm text-gray-800'>Shubham koli </h1>
                                <span className='text-gray-500'>&#40; Founder & CEO &#41;</span>
                            </div>
                        </div>
                        <div className='flex m-2 relative flex-col  '>
                            <img className='w-[190px]  mt-16 rounded-xl' src={shubham} alt="" />
                            <div className='flex justify-center items-center flex-col '>
                                <h1 className='text-sm text-gray-800'>Shubham koli </h1>
                                <span className='text-gray-500'>&#40; Founder & CEO &#41;</span>
                            </div>
                        </div>


                    </div>
                    <button className=" btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)]  bg-white ease-out hover:translate-y-1 transition-all roundedm-2 p-4 flex justify-center items-center shadow-black text-white rounded-xl cursor-pointer duration-500 bg-gradient-to-br to-indigo-500 via-purple-700 from-violet-500 bg-size-200 hover:bg-right-bottom w-full -mt-5">Contact Us</button>
                
                    <h1 className='flex justify-center items-center uppercase text-4xl font-extrabold mt-6'>Alone we can do so little, together we can do so much.</h1>
                </div>

            </div>
        </>
    )
}

export default Home