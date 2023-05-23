import React from 'react'
import NewsCard from './NewsCard'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const newsData = [
  {
    col: 2,
    row: 1,
    title: 'GameFi NFT, Monopoly Millionaire Game, Will Be Pre-Released on May 25',
    date: '4 May, 2022 , 14:52 PM',
    imgUrl: 'https://galaxyguild.com/wp-content/uploads/2022/05/unnamed-18.jpg',
    fosize: '1.4rem',
    gotopath: 'https://galaxyguild.com/news/gamefi-nft-monopoly-millionaire-may-25/'
  },
  {
    col: 1,
    row: 1,
    title: 'NFT Mint Sale Record! Bored Ape’s Otherside Virtual Land Sale Raises $320 Million',
    date: '2 May, 2022 , 8:21 AM',
    imgUrl: 'https://galaxyguild.com/wp-content/uploads/2022/05/shutterstock_2101462060.webp',
    fosize: '1.4rem',
    gotopath: 'https://galaxyguild.com/news/largest-nft-mint-bored-apes-otherside-320-mn/'
  },
  {
    col: 2,
    row: 1,
    title: 'Louis Vuitton NFT Game Hits More Than 2 Mn Downloads!',
    date: '3 May, 2022 , 14:29 PM',
    imgUrl: 'https://galaxyguild.com/wp-content/uploads/2022/05/LV2021_Concept_Level04_Harbor_result.jpg',
    fosize: '1.4rem',
    gotopath: 'https://galaxyguild.com/news/louis-vuitton-nft-game-2-million-downloads/'
  },
  {
    col: 2,
    row: 1,
    title: 'Newest P2E Crypto Game Mecha Infinity Content Planning',
    date: '4 May, 2022 , 14:34 PM',
    imgUrl: 'https://galaxyguild.com/wp-content/uploads/2022/05/0_M2EzIOkRPqY_wHsk.jpg',
    fosize: '1.4rem',
    gotopath: 'https://galaxyguild.com/news/p2e-game-mecha-infinity-content-planning/'
  },
  {
    col: 1,
    row: 1,
    title: 'Ethereum Rollup Optimism DAO Launch And Long-Awaited Airdrop',
    date: '29 April, 2022 , 7:10 AM',
    imgUrl: 'https://galaxyguild.com/wp-content/uploads/2022/04/A46372446B3A48730957F58DEA2F9E544C5220EF8F8E8BC2A5A954EE6ED28474.jpg',
    fosize: '1.4rem',
    gotopath: 'https://galaxyguild.com/news/ethereum-rollup-optimism-dao-launch-airdrop/'
  },

]

function HomeContentSeven() {
  const [mousedown, setMouseDown] = React.useState(false)

  const handleEvent = (event) => {
    if (event.type === "touchstart") {

      setMouseDown(true)
    } else {

      setMouseDown(false)
    }
  }


  return (
    <div className='w-10/12 h-4/5 md:w-3/4 md:h-[85%]  relative flex flex-col justify-center items-center'>
      <div className=' w-full h-1/6 flex flex-col items-center justify-around'>
        <div className='text-white text-sm'> / &nbsp; WHATS NEW &nbsp;/  </div>
        <div className='text-white font-brand text-2xl'>RECENT NEWS</div>
      </div>
      <div className="container hidden md:flex w-4/5 h-4/6 items-center mt-4 ">
        <div className="grid h-full grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 grid-flow-col gap-2">
          {newsData.map(item => {
            return <NewsCard gotopath={item.gotopath} row={item.row} key={item.imgUrl} col={item.col} title={item.title} date={item.date} imgUrl={item.imgUrl} fosize={item.fosize} />
          })}

        </div>
      </div>
      <div className="md:hidden mt-[2rem] flex items-center justify-center">

        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={800}
          isPlaying={true}
          interval={2000}
          infinite={true}
          totalSlides={5}
          className='w-[375px]'
        >
          <Slider>
            {newsData.map(item => {
              return <Slide key={item.imgUrl} onTouchStart={handleEvent} onTouchEnd={handleEvent} innerClassName='flex justify-center' index={0}>
                <div className={` w-full h-5/6 border-[1.65px] border-white mx-4 my-2 p-2 ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} style={{ transform: "rotate3d(0, 1, 0, 30deg)" }} >
                  <NewsCard gotopath={item.gotopath} row={item.row} col={item.col} title={item.title} date={item.date} imgUrl={item.imgUrl} fosize={item.fosize} />
                </div>
              </Slide>
            })}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  )
}

export default HomeContentSeven
