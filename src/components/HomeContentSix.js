import React from "react";
import Staratlas from "../assets/staratlas.webp";

import ReactPlayer from "react-player";

function HomeContentSix() {
  return (
    <div className="w-10/12 md:w-3/4 md:h-4/5 relative flex flex-col justify-center items-center border-[1.8px] md:mt-14 p-1 md:p-3">
      <div className="bg-red-700 w-full h-full flex justify-center">
        <div className="h-[15rem] w-full md:h-full md:w-full">
          <ReactPlayer
            url="https://youtu.be/ciFSSd39pAY"
            playing={true}
            height="100%"
            width="100%"
            loop={true}
            muted={true}
            playsinline={true}
          />
        </div>
        {/* <iframe frameborder="0" className='w-full h-full' src="https://www.youtube.com/embed/ciFSSd39pAY?controls=0&autoplay=1&mute=1&loop=1&modestbranding=1&showinfo=0" ></iframe> */}

        <div className="absolute top-[-12rem] md:top-20 text-white z-30 md:bg-black bg-opacity-60 w-full md:w-2/3 md:h-1/3 md:p-4 flex flex-col justify-around items-center">
          <div className="font-brand text-2xl md:text-4xl">GAME SPOTLIGHT</div>
          <div className="flex justify-center">
            <img src={Staratlas} className="w-1/3 md:w-1/2" />
          </div>
          <div className="w-5/6">
            A grand strategy game of space exploration, territorial conquest,
            political domination, and more.
          </div>
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[5%]"
              style={{
                filter:
                  "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
              }}
            >
              <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z" />
            </svg>
            &nbsp;Watch Demo
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContentSix;
