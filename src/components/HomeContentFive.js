import React from 'react'

import Syncity from '../assets/syncity.jpg'
import Elfinkingdom from '../assets/elfinkingdom.png'
import Vulcanverse from '../assets/vulcanverse.jpg'
import Mixmob from '../assets/mixmob.png'
import Axieinfinity from '../assets/axieinfinity.webp'
import Bigtime from '../assets/bigtime.webp'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function HomeContentFive() {
    const [mousedown, setMouseDown] = React.useState(false)

    const handleEvent = (event) => {
        if (event.type === "touchstart") {

            setMouseDown(true)
        } else {

            setMouseDown(false)
        }
    }

    return (
        <div className='w-3/4 h-4/5 relative flex flex-col justify-center items-center md:mt-[2rem]'>
            <div className=' md:w-5/6 md:h-1/6 flex flex-col items-center justify-around'>
                <div className='text-white font-brand text-2xl'>Games we are playing</div>
                <div className='text-white'>Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.</div>
            </div>
            <div className='w-full h-5/6 hidden  md:flex flex-wrap justify-center items-center' style={{ perspective: "2000px" }}>
                <div className=' w-[30%] h-[40%] border-[1.65px] border-white mx-4 mb-2 p-2 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{ transform: "rotate3d(0, 1, 0, 30deg)" }} >
                    <div className='h-full w-full p-3 flex items-end justify-start' style={{ backgroundImage: `url(${Syncity})`, backgroundSize: 'cover' }}>
                        <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                            <div className=' font-semibold'>Syn City</div>
                            <div className=' text-gray-300 text-sm'>RPG</div>
                        </div>
                    </div>
                </div>
                <div className=' w-[30%] h-[40%] border-[1.65px] border-white mx-4 mb-2 p-2 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{ transform: "translate3d(0, 0, -2rem)" }}>
                    <div className='h-full w-full p-3 flex items-end justify-center' style={{ backgroundImage: `url(${Elfinkingdom})`, backgroundSize: 'cover' }}>
                        <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                            <div className=' font-semibold'>Elfin Kingdom</div>
                            <div className=' text-gray-300 text-sm'>MMORPG</div>
                        </div>
                    </div>
                </div>
                <div className=' w-[30%] h-[40%] border-[1.65px] border-white mx-4 mb-2 p-2 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{ transform: "rotate3d(0, 1, 0, -30deg)" }}>
                    <div className='h-full w-full p-3 flex items-end justify-end' style={{ backgroundImage: `url(${Vulcanverse})`, backgroundSize: 'cover' }}>
                        <div className=' bg-opacity-70 bg-black text-white w-2/3 text-left px-3 py-1.5'>
                            <div className=' font-semibold'>Vulcan Verse</div>
                            <div className=' text-gray-300 text-sm'>MMORPG</div>
                        </div>
                    </div>
                </div>
                <div className=' w-[30%] h-[40%] border-[1.65px] border-white mx-4 mt-2 p-2 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{ transform: "rotate3d(0, 1, 0, 30deg)" }}>
                    <div className='h-full w-full p-3 flex items-end justify-start' style={{ backgroundImage: `url(${Mixmob})`, backgroundSize: 'cover' }}>
                        <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                            <div className=' font-semibold'>Mixmob</div>
                            <div className=' text-gray-300 text-sm'>MMORPG</div>
                        </div>
                    </div>
                </div>
                <div className=' w-[30%] h-[40%] border-[1.65px] border-white mx-4 mt-2 p-2 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{ transform: "translate3d(0, 0, -2rem)" }}>
                    <div className='h-full w-full p-3 flex items-end justify-center' style={{ backgroundImage: `url(${Axieinfinity})`, backgroundSize: 'cover' }}>
                        <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                            <div className=' font-semibold'>Axie Infinity</div>
                            <div className=' text-gray-300 text-sm'>MMORPG</div>
                        </div>
                    </div>
                </div>
                <div className=' w-[30%] h-[40%] border-[1.65px] border-white mx-4 mt-2 p-2 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{ transform: "rotate3d(0, 1, 0, -30deg)" }}>
                    <div className='h-full w-full p-3 flex items-end justify-end' style={{ backgroundImage: `url(${Bigtime})`, backgroundSize: 'cover' }}>
                        <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                            <div className=' font-semibold'>Big Time</div>
                            <div className=' text-gray-300 text-sm'>MMORPG</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden mt-[2rem] flex items-center justify-center">

                <CarouselProvider
                    naturalSlideWidth={600}
                    naturalSlideHeight={800}
                    isPlaying={true}
                    interval={2000}
                    infinite={true}
                    totalSlides={6}
                    className='w-[425px]'
                >
                    <Slider>
                        <Slide onTouchStart={handleEvent} onTouchEnd={handleEvent} innerClassName='flex justify-center' index={0}>
                            <div className={` w-4/5 h-5/6 border-[1.65px] border-white mx-4 my-2 p-2 ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} style={{ transform: "rotate3d(0, 1, 0, 30deg)" }} >
                                <div className='h-full w-full p-3 flex items-end justify-start' style={{ backgroundImage: `url(${Syncity})`, backgroundSize: 'cover' }}>
                                    <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                                        <div className=' font-semibold'>Syn City</div>
                                        <div className=' text-gray-300 text-sm'>RPG</div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide onTouchStart={handleEvent} onTouchEnd={handleEvent} innerClassName='flex justify-center' index={1}>
                            <div className={` w-4/5 h-5/6 border-[1.65px] border-white mx-4 my-2 p-2 ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} style={{ transform: "translate3d(0, 0, -2rem)" }}>
                                <div className='h-full w-full p-3 flex items-end justify-center' style={{ backgroundImage: `url(${Elfinkingdom})`, backgroundSize: 'cover' }}>
                                    <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                                        <div className=' font-semibold'>Elfin Kingdom</div>
                                        <div className=' text-gray-300 text-sm'>MMORPG</div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide onTouchStart={handleEvent} onTouchEnd={handleEvent} innerClassName='flex justify-center' index={2}>
                            <div className={` w-4/5 h-5/6 border-[1.65px] border-white mx-4 my-2 p-2 ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} style={{ transform: "rotate3d(0, 1, 0, -30deg)" }}>
                                <div className='h-full w-full p-3 flex items-end justify-end' style={{ backgroundImage: `url(${Vulcanverse})`, backgroundSize: 'cover' }}>
                                    <div className=' bg-opacity-70 bg-black text-white w-2/3 text-left px-3 py-1.5'>
                                        <div className=' font-semibold'>Vulcan Verse</div>
                                        <div className=' text-gray-300 text-sm'>MMORPG</div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide onTouchStart={handleEvent} onTouchEnd={handleEvent} innerClassName='flex justify-center' index={3}>
                            <div className={` w-4/5 h-5/6 border-[1.65px] border-white mx-4 my-2 p-2 ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} style={{ transform: "rotate3d(0, 1, 0, 30deg)" }}>
                                <div className='h-full w-full p-3 flex items-end justify-start' style={{ backgroundImage: `url(${Mixmob})`, backgroundSize: 'cover' }}>
                                    <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                                        <div className=' font-semibold'>Mixmob</div>
                                        <div className=' text-gray-300 text-sm'>MMORPG</div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide onTouchStart={handleEvent} onTouchEnd={handleEvent} innerClassName='flex justify-center' index={4}>
                            <div className={` w-4/5 h-5/6 border-[1.65px] border-white mx-4 my-2 p-2 ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} style={{ transform: "translate3d(0, 0, -2rem)" }}>
                                <div className='h-full w-full p-3 flex items-end justify-center' style={{ backgroundImage: `url(${Axieinfinity})`, backgroundSize: 'cover' }}>
                                    <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                                        <div className=' font-semibold'>Axie Infinity</div>
                                        <div className=' text-gray-300 text-sm'>MMORPG</div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide onTouchStart={handleEvent} onTouchEnd={handleEvent} innerClassName='flex justify-center' index={5}>
                            <div className={` w-4/5 h-5/6 border-[1.65px] border-white mx-4 my-2 p-2 ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} style={{ transform: "rotate3d(0, 1, 0, -30deg)" }}>
                                <div className='h-full w-full p-3 flex items-end justify-end' style={{ backgroundImage: `url(${Bigtime})`, backgroundSize: 'cover' }}>
                                    <div className='bg-black bg-opacity-70 text-white w-2/3 text-left px-3 py-1.5'>
                                        <div className=' font-semibold'>Big Time</div>
                                        <div className=' text-gray-300 text-sm'>MMORPG</div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default HomeContentFive