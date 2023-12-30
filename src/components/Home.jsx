import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import landing from '../assets/maximice_only_logo_white-removebg-preview.png'
import '../css/info-card.css'
import pngfile from '../assets/maximice_logo_white-removebg-preview.png'
// import whowe from '../assets/whowe-removebg-preview.png'
import webd from '../assets/webdev-removebg-preview.png'
import logo from '../assets/31530356_bird_2-removebg-preview.png'
import webdes from '../assets/28695260_site_design_2-removebg-preview.png'
import bg from '../assets/image-removebg.png'
import aboutback from '../assets/boutback.jpg'
// import aboutfront from '../assets/image1.jpg'
import abouttop from '../assets/image.jpg'
import mrketing from '../assets/27953109_marketing16-removebg-preview.png'
import '../css/style.css'
import about from '../assets/boutback-removebg-preview.png'
import ReactTyped from 'react-typed';

const Home = () => {
    return (
        <>
            <div className='w-full h-full m-auto bg-black'>
                <div className="w-full m-auto  h-screen bg-gradient-to-t from-black to-black">
                    <img src={bg} className='w-full absolute object-cover h-full ' alt="dfsf" />
                    <div className='flex justify-between'>
                        <div className='flex w-full items-center'>
                            <img src={pngfile} className='w-[50px]' alt="" />
                            <span className='ml-2 font-bold text-white cursor-pointer relative'>Maximice.Ass.in</span>
                        </div>
                        <div className='flex mt-2 cursor-pointer '>
                            <FaFacebookSquare size={25} className='text-white cursor-pointer m-1 relative ' />
                            <FaInstagramSquare size={25} className='text-white cursor-pointer m-1 relative' />
                            <FaLinkedin size={25} className='text-white cursor-pointer m-1 relative' />
                            <FaWhatsappSquare size={25} className='text-white cursor-pointer m-1 relative' />
                        </div>
                    </div>
                    {/* <img src={bg} alt='' /> */}

                    <div class="area" >
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div >

                    <div className='flex w-full p-2'>

                        <div className='flex w-full items-center justify-center flex-col max-w-[1300px] m-auto p-2'>

                            <div className='font-bold flex justify-center h-full w-full flex-col text-gray-500 relative    '>
                                <h1 className='text-8xl drop-shadow-2xl contrast-100 font-bold text-[#cba02e]'>Maximice Associates</h1>
                                <p className='mt-1 text-md'> <ReactTyped
                                    strings={["Leverage Your Business", "Seamless Solution", "Designer"]}
                                    typeSpeed={50}
                                    loop
                                    backSpeed={20}
                                    cursorChar="."
                                    showCursor={true}
                                /></p>
                                <p className='text-white text-md mt-1 mb-2   '> Web Developement <span className='text-[#cba02e]'>|</span> Digital Marketing <span className='text-[#cba02e]'>|</span> Logo Design</p>

                                <div className='flex gap-2 cursor-pointer relative'>
                                    <button className='text-white p-4  w-[120px] ease-in-out duration-300 bg-[#cba02e] cursor-pointer rounded-md hover:bg-transparent hover:text-[#cba02e]'>Explore</button>
                                    <button className='text-white p-4  w-[120px] ease-in-out duration-300  cursor-pointer rounded-md hover:bg-transparent '>Contact</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <img src={landing} className=' relative w-[300px]' alt="" />
                        </div>
                    </div>
                </div>

                <div className='w-full m-auto h-screen bg-gradient-to-b from-black to-gray-900'>

                    <img src={aboutback} className='h-screen bg-gradient-to-t from-gray-900 to-black w-full absolute object-cover' alt="" />
                    <div className='grid grid-cols-2 max-w-[1200px] relative p-2 m-auto text-white'>
                        <div className='flex w-full justify-center items-center h-full'>
                            <img src={about} className='w-full h-full' alt="" />
                        </div>
                        <div className='flex flex-col w-full justify-center h-full'>
                            <h1 className='text-[#cba02e] text-3xl font-bold font-sans'>
                                Welcome to Maximice Associates

                            </h1>
                            <p className='text-gray-400 mt-3 text-xl'>100% Trusted and Registered Company in Pune Maharashtra India, with a professional website that provides the best web development and web design services. We are a company that offers multi-functional web portals, and we make sure that a well-developed and attractive website can help our clients to record ROI-driven results.</p>
                            <p>Want to Know More ...</p>
                        </div>
                    </div>
                </div>

                <div className='w-full m-auto h-screen bg-gradient-to-t from-black to-gray-900'>
                    <img src={abouttop} className=' object-cover absolute w-[100%] h-full' alt="" />
                    <h1 className='text-[#cba02e] font-bold text-4xl text-center ml-2 relative mt-2'>our services</h1>
                    <div className='flex max-w-[1200px] m-auto items-center justify-center p-2 gap-2 text-gray-400'>
                        <div class="card-container">
                            <div class="card">
                                <div class="img-content">
                                    <div className='flex flex-col items-center w-full  h-[200px] justify-center'>
                                        <h1 className='border-2 rounded-lg p-2  border-amber-500 cursor-pointer text-gray-400'>Web Design</h1>
                                        <img src={webdes} className='w-[100px] ' alt="" />
                                    </div>
                                </div>
                                <div class="content">
                                    <p class="heading">Card Hover</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipii
                                        voluptas ten mollitia pariatur odit, ab
                                        minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                        necessitatibus dignissimos molestias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-container">
                            <div class="card">
                                <div class="img-content">
                                    <div className='flex flex-col items-center w-full h-[200px] justify-center'>
                                        <h1 className='border-2 rounded-lg p-2  border-amber-500 cursor-pointer text-gray-400'>Digital Marketing</h1>
                                        <img src={mrketing} className='w-[100px] ' alt="" />
                                    </div>
                                </div>
                                <div class="content">
                                    <p class="heading">Card Hover</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipii
                                        voluptas ten mollitia pariatur odit, ab
                                        minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                        necessitatibus dignissimos molestias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-container">
                            <div class="card">
                                <div class="img-content">
                                    <div className='flex flex-col items-center w-full h-[200px] justify-center'>
                                        <h1 className='border-2 rounded-lg p-2  border-amber-500 cursor-pointer text-gray-400'>Logo Design</h1>
                                        <img src={logo} className='w-[100px] ' alt="" />
                                    </div>
                                </div>
                                <div class="content">
                                    <p class="heading">Card Hover</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipii
                                        voluptas ten mollitia pariatur odit, ab
                                        minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                        necessitatibus dignissimos molestias.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-container">
                            <div class="card">
                                <div class="img-content">
                                    <div className='flex flex-col items-center w-full h-[200px] justify-center'>
                                        <h1 className='border-2 rounded-lg p-2  border-amber-500 cursor-pointer text-gray-400'>Web Development</h1>
                                        <img src={webd} className='w-[100px] ' alt="" />
                                    </div>
                                </div>
                                <div class="content">
                                    <p class="heading">Card Hover</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipii
                                        voluptas ten mollitia pariatur odit, ab
                                        minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                        necessitatibus dignissimos molestias.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' text-white bg-transparent relative w-full m-auto'>
                        {/* <h1 className='text-4xl text-center uppercase text-[#cba02e] font-bold'>Our Achievements</h1> */}
                        <p className='text-center text-xl mt-4 p-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi accusamus, asperiores aut a eveniet est sit doloremque laborum facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur cupiditate obcaecati architecto quia molestiae incidunt quod blanditiis sapiente aut! Dignissimos laboriosam fuga vel. Magnam illum cupiditate rerum sapiente tempora.</p>
                        <div className='flex w-full items-center justify-around mt-4'>
                            <div className=' flex flex-col w-full h-full items-center justify-center'>
                                <span className='text-orange-500 font-bold text-2xl'>+10</span>
                                <p className='text-xl uppercase text-gray-400'>Web Developement</p>
                            </div>
                            <div className=' flex flex-col w-full h-full items-center justify-center'>
                                <span className='text-rose-500 font-bold text-2xl'>+22</span>
                                <p className='text-xl uppercase text-gray-400'>Logo Design</p>
                            </div>
                            <div className=' flex flex-col w-full h-full items-center justify-center'>
                                <span className='text-green-600 font-bold text-2xl'>+02</span>
                                <p className='text-xl uppercase text-gray-400'>App Developement</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full m-auto h-screen '>
                <img src={aboutback} className='h-screen  w-full absolute object-cover' alt="" />
                </div>
            </div>



        </>
    )
}

export default Home