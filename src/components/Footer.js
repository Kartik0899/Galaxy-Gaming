import React from 'react'
import GGTwitter from '../assets/GG_Twitter.png'

import Brand from '../assets/Brand_logo.png'

function Footer() {
  const [mousedown, setMouseDown] = React.useState(false)

  const handleEvent = (event) => {
    if (event.type === "touchstart") {

      setMouseDown(true)
    } else {

      setMouseDown(false)
    }
  }


  return (
    <div className='w-full h-4/5 relative flex flex-col justify-between items-center'>

      <div className='border-[2px] border-white h-2/5 w-2/3 p-5 flex justify-between'>
        <div className=' h-full w-full md:w-2/3'>
          <div className='text-white font-brand text-1xl md:text-2xl text-left h-1/5'>Join our Galaxy Gaming community</div>
          <div className='w-full md:w-3/5 h-1/4 text-lg mt-[6rem] md:mt-[4rem] border border-white flex justify-center items-center'>
            <a href='https://twitter.com/GalaxyGamingNFT' target='_blank' onTouchStart={handleEvent} onTouchEnd={handleEvent} className={`bg-white w-11/12 h-[81.6667%] md:hover:h-full md:hover:w-full md:hover:transition-[1.2s_ease-in-out] md:hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)] ${mousedown ? 'h-full w-full transition-[1.2s_ease-in-out] shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}  flex justify-center items-center`}>Join us on Twitter</a>
          </div>
        </div>
        <div className=' hidden w-1/3 md:flex justify-center items-center opacity-80' style={{ perspective: '500px' }}>
          <img src={GGTwitter} className='w-4/5 h-auto rounded-xl' style={{ transform: "translate3d(0,0,150px) rotate3d(0, 1, 0, -20deg)" }} />
        </div>
      </div>

      <div className=' h-1/2 w-screen bg-black flex flex-col justify-start items-center' style={{ boxShadow: '0 -10px 25px 1px #374151' }}>
        <div className='w-full h-full max-w-[1920px] flex flex-col justify-center items-center'>
        <div className='flex justify-around items-center h-4/6 w-3/4'>
          <div className='w-2/4 h-full p-4 hidden md:flex flex-col items-center justify-between'>
            <div className=' flex items-center justify-start'>
              <img src={Brand} className='w-4/5' />
            </div>
            <div className='text-left mt-4 w-full'>
              <span className='text-white '>A blockchain-based gaming NFT lending and borrowing platform.
                Allowing players, lenders and guilds to lend & borrow NFTs in a trustless manner.</span>
            </div>
          </div>
          <div className='w-1/3 h-full flex justify-center items-start'>
            {/* <div className='w-1/2 h-full p-4 flex flex-col items-center justify-around'>
            <div className='text-white font-brand'>Company</div>
            <div className='text-white'>Home</div>
            <div className='text-white'>About</div>
            <div className='text-white'>Vision</div>
            <div className='text-white'>News</div>

          </div> */}
            <div className='w-1/2 h-[67%] p-4 flex flex-col items-center justify-around'>
              <div className='text-white font-brand my-[1rem]'>Follow Us</div>
              <a href='https://twitter.com/GalaxyGamingNFT' target='_blank' className='text-white'>Twitter</a>
              <a href='https://www.linkedin.com/company/galaxy-gg/' target='_blank' className='text-white'>Linkedin</a>
            </div>
          </div>
          <div className=' w-[100%] md:w-1/2 h-full p-4 px-8 flex flex-col justify-around'>
            <div className='text-white font-brand w-full text-center md:text-right'>SUBSCRIBE TO OUR NEWSLETTER</div>
            <div className='flex justify-end h-1/5 items-center w-full'>
              <div className='h-full border border-white w-full md:w-3/5'></div>
            </div>
            <div className='flex justify-end items-center h-1/6 w-full'>
              <div className='bg-white h-full w-[100%] md:w-1/2 flex justify-center items-center'>SUBSCRIBE</div>
            </div>
          </div>
        </div>

        <div className=' flex justify-between items-center h-2/6 w-full md:w-3/4 p-4'>

          <div className=' text-gray-400  md:w-8/12 text-left'>Copyright © Galaxy Gaming 2022</div>
          <div className='flex md:w-3/12 flex-col md:flex-row md:justify-between'>
            <div className=' w-[10rem] text-gray-400'>Privacy Policy</div>
            <div className=' text-gray-400'>Terms of Use</div>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer