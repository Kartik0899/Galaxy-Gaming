import React, { useLayoutEffect, lazy, Suspense } from "react";
import "./App.css";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import buildCanvas from "./components/Scene";
import ScrollInitiate from "./scroll";

export default function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, -50);
  };

  const renderLoader = () => <p>Loading</p>;

  useLayoutEffect(() => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    // console.log(width, height)

    if(Number(width) >= 1366){

      // console.log('Scroll initiated')

      ScrollInitiate();
    }

    buildCanvas();
  }, []);

  return (
    <div id="begin" className="App relative h-screen w-screen">
      <div className="absolute h-screen w-screen  z-30">
        <div className="all-nav">
          <Navbar />
        </div>
        <Home />
        <button
          id="top"
          className="text-white hidden md:block  fixed bottom-5 right-10 border-[1.8px] border-white p-3 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className=" w-3.5"
            style={{
              filter:
                "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
            }}
          >
            <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
