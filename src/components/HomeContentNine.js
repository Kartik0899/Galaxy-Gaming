import React from "react";

import andrew from "../assets/andrew-min.jpg";
import julia from "../assets/julia-min.png";
import dev from "../assets/dev-min.png";

import "../team.css";

import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function HomeContentNine() {
  const [mousedown, setMouseDown] = React.useState(false);

  const handleEvent = (event) => {
    if (event.type === "touchstart") {
      setMouseDown(true);
    } else {
      setMouseDown(false);
    }
  };

  return (
    <div className="team-page-section  w-10/12 md:w-3/4 h-4/5 relative md:flex justify-center items-center">
      <div className="container flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-end w-full h-1/5">
          <div className="font-brand text-2xl text-white">OUR TEAM</div>
        </div>

        <div className="md:hidden mt-[2rem] flex items-center justify-center">
          <CarouselProvider
            naturalSlideWidth={600}
            naturalSlideHeight={800}
            isPlaying={true}
            interval={2000}
            infinite={true}
            totalSlides={3}
            className="w-[325px]"
          >
            <Slider>
              <Slide
                onTouchStart={handleEvent}
                onTouchEnd={handleEvent}
                innerClassName="flex justify-center"
                index={0}
              >
                <div className="team-block flex justify-center items-center w-full h-full m-4">
                  <div
                    className="inner-box wow "
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      {/* <li><a href="#"><i className="fab fa-skype"></i></a></li> */}

                      <li>
                        <a
                          href="https://www.linkedin.com/in/julia-sidlovska/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="image border-[2px] p-2 bg-transparent">
                      <a href="#">
                        <img src={julia} alt="" />
                      </a>
                    </div>
                    <div className="lower-content p-3">
                      <h3>
                        <a href="#">Julia Sidlovska</a>
                      </h3>
                      {/* <div className="designation">Simply dummy text </div> */}
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide
                onTouchStart={handleEvent}
                onTouchEnd={handleEvent}
                innerClassName="flex justify-center"
                index={1}
              >
                <div className="team-block flex justify-center items-center w-full h-full m-4">
                  <div
                    className="inner-box wow "
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      {/* <li><a href="#"><i className="fab fa-skype"></i></a></li> */}

                      <li>
                        <a
                          href="https://www.linkedin.com/in/dev-bahl-2ba736171/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="image border-[2px] p-2 bg-transparent">
                      <a href="#">
                        <img src={dev} alt="" />
                      </a>
                    </div>
                    <div className="lower-content p-3">
                      <h3>
                        <a href="#">Dev Bahl</a>
                      </h3>
                      {/* <div className="designation">Simply dummy text </div> */}
                    </div>
                  </div>
                </div>
              </Slide>

              <Slide
                onTouchStart={handleEvent}
                onTouchEnd={handleEvent}
                innerClassName="flex justify-center"
                index={2}
              >
                <div className="team-block flex justify-center items-center w-full h-full m-4">
                  <div
                    className="inner-box wow "
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      {/* <li><a href="#"><i className="fab fa-skype"></i></a></li> */}

                      <li>
                        <a
                          href="https://www.linkedin.com/in/kimandrewy/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="image border-[2px] p-2 bg-transparent">
                      <a className="bg-transparent" href="#">
                        <img src={andrew} alt="" />
                      </a>
                    </div>
                    <div className="lower-content p-3">
                      <h3>
                        <a href="#">Andrew Kim</a>
                      </h3>
                      {/* <div className="designation">Simply dummy text </div> */}
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>

        <div className="hidden md:flex w-full h-4/5 justify-center items-center">
          <div className="team-block flex justify-center items-center w-1/4 h-full mx-5">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-skype"></i></a></li> */}

                <li>
                  <a
                    href="https://www.linkedin.com/in/julia-sidlovska/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="image border-[2px] p-2 bg-transparent">
                <a href="#">
                  <img src={julia} alt="" />
                </a>
              </div>
              <div className="lower-content p-3">
                <h3>
                  <a href="#">Julia Sidlovska</a>
                </h3>
                {/* <div className="designation">Simply dummy text </div> */}
              </div>
            </div>
          </div>

          <div className="team-block flex justify-center items-center w-1/4 h-full mx-5">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-skype"></i></a></li> */}

                <li>
                  <a
                    href="https://www.linkedin.com/in/dev-bahl-2ba736171/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="image border-[2px] p-2 bg-transparent">
                <a href="#">
                  <img src={dev} alt="" />
                </a>
              </div>
              <div className="lower-content p-3">
                <h3>
                  <a href="#">Dev Bahl</a>
                </h3>
                {/* <div className="designation">Simply dummy text </div> */}
              </div>
            </div>
          </div>

          <div className="team-block flex justify-center items-center w-1/4 h-full mx-5">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-skype"></i></a></li> */}

                <li>
                  <a
                    href="https://www.linkedin.com/in/kimandrewy/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="image border-[2px] p-2 bg-transparent">
                <a className="bg-transparent" href="#">
                  <img src={andrew} alt="" />
                </a>
              </div>
              <div className="lower-content p-3">
                <h3>
                  <a href="#">Andrew Kim</a>
                </h3>
                {/* <div className="designation">Simply dummy text </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContentNine;
