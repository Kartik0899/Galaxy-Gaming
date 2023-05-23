import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function HomeContentThree() {
  return (
    <div className="w-10/12 h-4/5 md:w-3/4 md:h-3/5  relative flex flex-col justify-center items-center">
      <div className=" text-white font-brand text-2xl md:text-3xl mb-[1rem] w-full h-1/4">
        We are changing the rules of the game
      </div>
      <div
        className="hidden md:flex justify-center items-center w-full relative h-3/4"
        style={{ perspective: "1000px" }}
      >
        <div
          className="w-1/5 h-5/6 flex flex-col justify-around items-center p-4 mx-4 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]"
          style={{
            border: "3px solid white",
            transform: "rotate3d(0, 1, 0, 30deg)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-auto h-1/5"
            style={{
              filter:
                "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
            }}
          >
            <path d="M448 32c-83.3 11-166.8 22-250 33-92 12.5-163.3 86.7-169 180-3.3 55.5 18 109.5 57.8 148.2L0 480c83.3-11 166.5-22 249.8-33 91.8-12.5 163.3-86.8 168.7-179.8 3.5-55.5-18-109.5-57.7-148.2L448 32zm-79.7 232.3c-4.2 79.5-74 139.2-152.8 134.5-79.5-4.7-140.7-71-136.3-151 4.5-79.2 74.3-139.3 153-134.5 79.3 4.7 140.5 71 136.1 151z" />
          </svg>
          <div className="font-brand text-white">Mission</div>
          <div className="text-white pt-8">
            The Galaxy Gaming Platform was born out of the need to address the problems of accessibility raised by our community.
          </div>
        </div>
        <div className="w-1/4 border-[3px] border-white h-full flex flex-col justify-around items-center p-4 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-auto h-1/5"
            style={{
              filter:
                "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
            }}
          >
            <path d="M352.6 127.1c-28.12 0-54.13 4.5-77.13 12.88l12.38-123.1c1.125-10.5-8.125-18.88-18.5-17.63C189.6 10.12 127.1 77.62 127.1 159.4c0 28.12 4.5 54.13 12.88 77.13L17.75 224.1c-10.5-1.125-18.88 8.125-17.63 18.5c9.1 79.75 77.5 141.4 159.3 141.4c28.12 0 54.13-4.5 77.13-12.88l-12.38 123.1c-1.125 10.38 8.125 18.88 18.5 17.63c79.75-10 141.4-77.5 141.4-159.3c0-28.12-4.5-54.13-12.88-77.13l123.1 12.38c10.5 1.125 18.88-8.125 17.63-18.5C501.9 189.6 434.4 127.1 352.6 127.1zM255.1 287.1c-17.62 0-31.1-14.38-31.1-32s14.37-32 31.1-32s31.1 14.38 31.1 32S273.6 287.1 255.1 287.1z" />
          </svg>

          <div className="font-brand text-white">Network</div>
          <div className="text-white pt-8">
            The GG Platform is an online gaming and social platform where players can discover, play and finance Web 3.0 games.
          </div>
        </div>
        <div
          className="w-1/5 h-5/6 flex flex-col justify-around items-center p-4 mx-4 hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]"
          style={{
            border: "3px solid white",
            transform: "rotate3d(0, 1, 0, -30deg)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
            className="w-auto h-1/5"
            style={{
              filter:
                "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
            }}
          >
            <path d="M64 352c17.69 0 32-14.32 32-31.1V64.01c0-17.67-14.31-32.01-32-32.01S32 46.34 32 64.01v255.1C32 337.7 46.31 352 64 352zM64 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S86.09 400 64 400z" />
          </svg>

          <div className="font-brand text-white">Discover</div>
          <div className="text-white pt-8">
            The GG Platform offers game discovery, NFT uncollateralized micro-lending/borrowing, P&E investment vaults.
          </div>
        </div>

      </div>

      <div className="md:hidden mt-[0.5rem] flex justify-center items-center">

        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={800}
          isPlaying={true}
          interval={2000}
          infinite={true}
          totalSlides={3}
        >
          <Slider className='w-screen' >
            <Slide index={0} className='w-[325px]' innerClassName='flex justify-center'><div
              className="w-4/5 h-5/6 flex flex-col justify-around items-center p-4 mx-4 "
              style={{
                border: "3px solid white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-1/3 h-1/5"
                style={{
                  filter:
                    "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                }}
              >
                <path d="M448 32c-83.3 11-166.8 22-250 33-92 12.5-163.3 86.7-169 180-3.3 55.5 18 109.5 57.8 148.2L0 480c83.3-11 166.5-22 249.8-33 91.8-12.5 163.3-86.8 168.7-179.8 3.5-55.5-18-109.5-57.7-148.2L448 32zm-79.7 232.3c-4.2 79.5-74 139.2-152.8 134.5-79.5-4.7-140.7-71-136.3-151 4.5-79.2 74.3-139.3 153-134.5 79.3 4.7 140.5 71 136.1 151z" />
              </svg>
              <div className="font-brand text-white">Empower</div>
              <div className="text-white pt-8">
                Galaxy Guild is a blockchain-based Gaming NFT lending and borrowing
                platform powered by Solana Network.
              </div>
            </div></Slide>
            <Slide className='w-[325px]' innerClassName='flex justify-center' index={1}><div className="w-4/5 h-5/6 flex flex-col justify-around items-center p-4 mx-4 " style={{
              border: "3px solid white",
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-auto h-1/5"
                style={{
                  filter:
                    "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                }}
              >
                <path d="M352.6 127.1c-28.12 0-54.13 4.5-77.13 12.88l12.38-123.1c1.125-10.5-8.125-18.88-18.5-17.63C189.6 10.12 127.1 77.62 127.1 159.4c0 28.12 4.5 54.13 12.88 77.13L17.75 224.1c-10.5-1.125-18.88 8.125-17.63 18.5c9.1 79.75 77.5 141.4 159.3 141.4c28.12 0 54.13-4.5 77.13-12.88l-12.38 123.1c-1.125 10.38 8.125 18.88 18.5 17.63c79.75-10 141.4-77.5 141.4-159.3c0-28.12-4.5-54.13-12.88-77.13l123.1 12.38c10.5 1.125 18.88-8.125 17.63-18.5C501.9 189.6 434.4 127.1 352.6 127.1zM255.1 287.1c-17.62 0-31.1-14.38-31.1-32s14.37-32 31.1-32s31.1 14.38 31.1 32S273.6 287.1 255.1 287.1z" />
              </svg>

              <div className="font-brand text-white">Excel</div>
              <div className="text-white pt-8">
                Galaxy Guild matches Gaming NFT lenders and borrowers in an open,
                transparent and decentralised marketplace
              </div>
            </div></Slide>
            <Slide index={2} className='w-[325px]' innerClassName='flex justify-center'><div
              className="w-4/5 h-5/6 flex flex-col justify-around items-center p-4 mx-4 "
              style={{
                border: "3px solid white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
                className="w-auto h-1/5"
                style={{
                  filter:
                    "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                }}
              >
                <path d="M64 352c17.69 0 32-14.32 32-31.1V64.01c0-17.67-14.31-32.01-32-32.01S32 46.34 32 64.01v255.1C32 337.7 46.31 352 64 352zM64 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S86.09 400 64 400z" />
              </svg>

              <div className="font-brand text-white">Excite</div>
              <div className="text-white pt-8">
                GG serves as the platform for Players, Guilds to collaborate and
                make the most out of their Metaverse experience!
              </div>
            </div></Slide>
          </Slider>
        </CarouselProvider>
      </div>

    </div>
  );
}

export default HomeContentThree;
