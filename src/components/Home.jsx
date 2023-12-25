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
                <div className='md:max-w-[1300px] m-auto p-2 h-screen border-4 rounded-xl border-slate-500 shadow-black shadow-xl'>
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

                <div className='max-w-[1300px] m-auto md:h-screen p-4 -mb-4'>
                    <h1 className='flex justify-center items-center lg:text-6xl mt-10'>Who we are <span className='text-red-400 ml-2'>?</span></h1>
                    <div className='flex justify-between h-full w-full'>
                        <div className='flex justify-center w-full h-full items-center lg:max-w-[700px]  m-auto'>
                            <div className='mt-2'>
                                <p className='p-4 lg:text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptas!
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, excepturi impedit. Ducimus, vero id commodi accusamus sint illo </p>
                            </div>
                        </div>
                        <div className='justify-center items-center flex lg:max-w-[300px] m-auto'>
                            <div class="card">
                                <img className='h-full' src={whoweare} alt="" />
                                <div class="card__content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1200px] m-auto p-4 h-screen mt-8'>
                    <div className='flex  p-4 rounded-2xl shadow-xl shadow-black'>
                        <div className='flex flex-col justify-center w-full h-full items-center m-auto'>
                            <h1 className='text-6xl'>Innovate with us </h1>
                            <p className='max-w-[400px] m-auto mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero?Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                            {/* <span>still  having a doubt?</span> */}
                            <span className='text-orange-500 uppercase text-5xl font-extrabold mt-4'>Give us a call on</span>
                            <span className='text-3xl mt-4'>+91-9890845263</span>
                            <span>workwith@maximice.in</span>
                        </div>
                        <div className='w-full h-full flex justify-center items-center m-auto flex-col'>
                            <img className='shadow-white shadow-lg w-[240px] rounded-xl' src={shubham} alt="" />
                            <span className='text-4xl mt-4'>Shubham koli</span>
                            <span className='text-gray-500 font-serif mt-2'>Team Leader</span>
                            <button className='bg-black text-gray-300 w-[200px] p-2 mt-2 text-sm font-sans'>Contact Us</button>

                            <div className='flex rounded-full mt-4 gap-4 p-2'>
                                <FaInstagramSquare size={30} className="m-0 text-orange-600 cursor-pointer" />
                                <FaLinkedin size={30} className='text-blue-600 cursor-pointer' />
                                <FaWhatsappSquare size={30} className='text-green-600 cursor-pointer' />
                                <FaFacebookSquare size={30} className='text-blue-800 cursor-pointer' />
                            </div>
                            <span>www.Maximice.in</span>
                        </div>
                    </div>
                </div>

                <div className='max-w-[1300px] m-auto h-screen  mt-6 '>
                    <h1 className='flex mt-6 w-full m-auto text-6xl justify-center font-extrabold'>Meet Our Leadership Team</h1>

                    <div className='w-full h-full -mt-10 justify-center items-center flex'>
                        <div className='h-[170px] w-full bg-gradient-to-br to-indigo-500 via-purple-700 from-violet-500 absolute'></div>
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