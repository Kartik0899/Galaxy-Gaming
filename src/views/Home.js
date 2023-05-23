import React, { lazy, Suspense } from 'react'
import HomeContentTen from '../components/HomeContentTen';
import DisplayContent from '../components/DisplayContent';
import HomeContentFive from '../components/HomeContentFive';
import HomeContentFour from '../components/HomeContentFour';
import HomeContentSeven from '../components/HomeContentSeven';
import HomeContentEight from '../components/HomeContentEight';
import HomeContentSix from '../components/HomeContentSix';
import HomeContentThree from '../components/HomeContentThree';
import HomeContentTwo from '../components/HomeContentTwo';
import Footer from '../components/Footer';
import HomeContentNine from '../components/HomeContentNine';


function Home() {

  return (

    <div id='well' className='well relative flex flex-col items-center justify-between min-h-screen w-screen -z-50'>

      <section className='sec1 panel h-screen w-screen max-w-[1920px] flex items-center justify-center'>
        <DisplayContent />
      </section>
      <section className='sec2 panel h-screen w-screen max-w-[1920px] flex items-center justify-center'>
        <HomeContentTwo />
      </section>

      <section className='sec7 panel md:h-screen w-screen max-w-[1920px] flex items-center justify-center relative'>
        <HomeContentTen />
      </section>

      <section className='sec8 panel h-screen w-screen max-w-[1920px] flex items-center justify-center relative'>
        <HomeContentEight />
      </section>
      <section className='sec3 panel h-screen w-screen max-w-[1920px] flex items-center justify-center  relative'>
        <HomeContentThree />
      </section>
      <section className='sec4 panel md:h-screen w-screen max-w-[1920px] flex items-center justify-center relative'>
        <HomeContentFour />
      </section>
      <section className='sec4 panel h-screen w-screen max-w-[1920px] flex items-center justify-center relative'>
        <HomeContentNine />
      </section>
      <section className='sec5 panel md:h-screen w-screen max-w-[1920px] flex justify-center items-center relative'>
        <HomeContentFive />
      </section>

      <section className='sec6 panel h-[70vh] md:h-screen w-screen max-w-[1920px] flex justify-center items-center relative'>
        <HomeContentSix />
      </section>
      <section className='sec7 panel md:h-screen w-screen max-w-[1920px] flex items-center justify-center relative'>
        <HomeContentSeven />
      </section>


      <section className='sec9 panel h-screen w-screen max-w-[1920px] flex items-end justify-center relative'>
        <Footer />
      </section>
    </div>
  )
}

export default Home