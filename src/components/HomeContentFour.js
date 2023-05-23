import React from 'react'
import Spaceship from '../assets/spaceship.png'

function HomeContentFour() {
  const [mousedown, setMouseDown] = React.useState(false)

  const handleEvent = (event) => {
    if (event.type === "touchstart") {

      setMouseDown(true)
    } else {

      setMouseDown(false)
    }
  }
  return (
    <div className='w-10/12 md:w-3/4 md:h-4/5 relative md:flex justify-center items-center' style={{ perspective: '1000px' }}>
      <div className='spaceship w-full  md:w-1/2 md:h-full flex justify-center items-center'>
        {/* <img src={Spaceship} className='w-full h-auto'/> */}
      </div>
      <div className='w-full md:w-1/2 md:h-full p-4 flex items-center'>
        <div className=' w-full h-2/3 flex flex-col items-center md:items-start justify-around'>
          <div className='text-white'>/ NFT GAMING FRONTIER /</div>
          <div className='text-white text-4xl font-brand'>VISION</div>
          <div>
            <div className='text-center md:text-left text-white my-4'>
              Galaxy Gaming aims to be the largest accelerator of players, investors and game studios into the world of Web 3.0 gaming.
            </div>

            <div className='flex md:mt-20 items-center md:justify-start justify-center text-white'>
              <a onTouchStart={handleEvent} onTouchEnd={handleEvent} href='https://bit.ly/GG-WP' target='_blank' className={` border border-white p-3 md:w-6/12 md:h-12 flex justify-center items-center font-brand md:hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)] ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} >
                READ WHITEPAPER
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContentFour