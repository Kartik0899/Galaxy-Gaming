import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import GGTwitter from '../assets/GG_Twitter.png'

function HomeContentEight() {

  const [height, setHeight] = React.useState(null);
  const [width, setWidth] = React.useState(null);
  const tweetRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div className='twitter-container w-3/4 h-4/5 relative flex flex-col gap-8 md:flex-row justify-center items-center' style={{ perspective: '2000px' }}>

      <div ref={tweetRef} className='hidden md:flex justify-end items-center h-full w-1/2' style={{ perspective: '2000px' }}>
        <a href="https://twitter.com/GalaxyGamingNFT" target='_blank' className='w-4/5 p-1.5 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{
          border: "3px solid white",
          transform: "rotate3d(0, 1, 0, 25deg)",
        }}>
          <img src={GGTwitter} className='w-full h-full' />
        </a>
      </div>


      <a href="https://twitter.com/GalaxyGamingNFT" target='_blank' className='md:hidden w-[100%] p-1.5 flex justify-center hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' style={{
        border: "3px solid white",
      }}>
        <img src={GGTwitter} className='w-full h-full' />
      </a>
      <div className=' hidden w-1/2 md:flex justify-start' style={{
        transform: "rotate3d(0, 1, 0, -20deg)",
      }}>
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "GalaxyGamingNFT" }}
          options={{ theme: "dark", width: width - (width * 0.2), height: height - (height * 0.15) }}
          // options={{ theme: "dark", width: "400", height: "470" }}
          className='w-2/5'

        />
      </div>
      <div className=' flex w-[100%] md:hidden justify-center'>
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "GalaxyGamingNFT" }}
          options={{ theme: "dark", width: "400", height: "470" }}
          className='w-2/5'

        />
      </div>
    </div>
  )
}

export default HomeContentEight