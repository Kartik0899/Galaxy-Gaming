import React from 'react'

const NavAnchor = ({ item, goto, setOpen }) => {
  const [mousedown, setMouseDown] = React.useState(false)

  const handleEvent = (event) => {

    if (event.type === "touchstart") {
      setMouseDown(true)
    } else {

      setMouseDown(false)
    }
  }

  return (
    <a href={goto} target='_blank' onClick={() => setOpen(false)} onTouchStart={handleEvent} onTouchEnd={handleEvent} className={` ${mousedown ? 'shadow-[inset_0_0_7px_2px_rgba(157,100,250,0.9)]' : ''}  text-white block px-3 py-2 rounded-md text-base font-medium`}>
      {item}
    </a>
  )
}

export default NavAnchor