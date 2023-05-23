import React from 'react'

function HomeContentTen() {

  const [height, setHeight] = React.useState(null);
  const [width, setWidth] = React.useState(null);
  const lumaRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);


  return (
    <div className="w-10/12 h-4/5 md:w-3/4 md:h-3/5 flex-col g-4 md:g-0 md:flex-row relative flex justify-center items-center" style={{ perspective: '1000px' }}>
      <div className='md:w-[40%] h-full flex flex-col justify-center items-center md:mr-5'>
        <div className='text-white  font-brand text-4xl md:text-left md:w-full'>Join Our Events</div>
        <div className='text-white mt-3 text-center md:text-left px-2'>Become a part of our web 3 gaming community and gain valuable insight with friends.</div>
      </div>

      <div ref={lumaRef} className='hidden md:flex md:w-[40%] h-full border-[2.5px] justify-center items-center ml-5' style={{
        transform: "rotate3d(0, 1, 0, -10deg)",
      }}>
        <iframe
          className='w-[95%] md:h-[95%]'
          src="https://lu.ma/embed-events/usr-CYa6FeXQgKxgo1K"
          width={width - (0.1 * width)}
          height={height - (0.1 * height)}
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>

      </div>
      <div ref={lumaRef} className='md:w-[40%] mt-3 h-[20rem] border-[2.5px] flex md:hidden justify-center items-center'>
        <iframe
          className='w-[90%] md:h-full'
          src="https://lu.ma/embed-events/usr-CYa6FeXQgKxgo1K"
          width={width - (0.1 * width)}
          height={height - (0.1 * height)}
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>

      </div>
    </div>
  )
}

export default HomeContentTen