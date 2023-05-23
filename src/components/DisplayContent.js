import React from 'react'

import Brand1 from '../assets/GG_Hero.webm'
import Brand from '../assets/GalaxyGaming.gif'
function DisplayContent() {
  return (

    <div className='w-full scale-110 md:w-full md:scale-100 h-full relative flex justify-center items-center'>
      <video autoPlay loop muted className='h-6/8 w-full md:block hidden'>
        <source src={Brand1} />
      </video>
      <img src={Brand} className='h-6/8 w-[90%] md:hidden block' />
    </div>

  )
}

export default DisplayContent