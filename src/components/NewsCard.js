import React from 'react'

const NewsCard = ({ col, row, title, date, imgUrl, fosize, gotopath }) => {
  const [mousedown, setMouseDown] = React.useState(false)

  const handleEvent = (event) => {
    if (event.type === "touchstart") {

      setMouseDown(true)
    } else {

      setMouseDown(false)
    }
  }

  return (
    <div onTouchStart={handleEvent} onTouchEnd={handleEvent} style={{ gridColumn: `span ${col}` }} className={`w-full h-full row-span-${row} shadow-[inset_0px_-50px_47px_0px_#BF26ED]`}>
      <div className={` w-full h-full relative overflow-hidden opacity-75 md:hover:opacity-100 ${mousedown ? 'hover:opacity-100' : ''} transition-opacity `}>
        <img src={imgUrl} alt="Photo by Claudio Schwarz on Unsplash" className="inset-0 h-full w-full object-cover object-center rounded  " />
        <div className="absolute bottom-3 left-0 px-3 text-white text-left">
          <a target='_blank' className='text-xs mb-1 hover:text-blue-900' href='https://galaxyguild.com/news/'>News</a>
          <p style={{ fontSize: fosize, lineHeight: '1.3', fontWeight: 'bold' }}><a href={gotopath} target="_blank" >{title} </a></p>
          <p className='text-xs mt-1'> <a className='text-xs mb-1 hover:text-blue-900' href='https://galaxyguild.com/'>Galaxy Guild</a>{`- ${date}`}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard