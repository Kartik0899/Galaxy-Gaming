import React from 'react'

const SocialIcons = ({ llink, svgicon }) => {
  const [mousedown, setMouseDown] = React.useState(false)

  const handleEvent = (event) => {
    if (event.type === "touchstart") {

      setMouseDown(true)
    } else {

      setMouseDown(false)
    }
  }

  return (
    <a onTouchStart={handleEvent} onTouchEnd={handleEvent} href={llink} target='_blank' className={` elevateContainer text-white w-[12%] py-[5px] h-2/4 flex items-center justify-center border border-white mx-2 ${mousedown ? 'shadow-[0_0_25px_5px_rgba(59,99,245,0.9)]' : ''}`} style={{ perspective: '200px' }}>

      {svgicon}
    </a>
  )
}

export default SocialIcons