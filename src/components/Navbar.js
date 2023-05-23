import React from 'react'

import Brand from '../assets/Brand_logo.png'
import $ from 'jquery'
import NavAnchor from './NavAnchor';
import SocialIcons from './socialIcons'

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [mousedown, setMouseDown] = React.useState(false)
    // const scrollTo = (section) => {
    //     console.log(section)
    //     const sec = $(`#${section}`)

    //     console.log(sec)
    //     $('html,body').animate({
    //         scrollTop: sec.offset().top},
    //         1000);
    // }

    const handleEvent = (event) => {
        if (event.type === "touchstart") {

            setMouseDown(true)
        } else {

            setMouseDown(false)
        }
    }

    return (
        <div>
            <nav className="fixed bg-black w-full font-brand z-100 shadow-lg shadow-gray-700">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="h-10" src={Brand} alt="Workflow" />
                            </a>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <button id='top' className="px-4 py-2  hover:shadow-[inset_0_0_7px_2px_rgba(157,100,250,0.9)] transition ease-in text-white font-brand">
                                        Home
                                    </button>
                                    <button id='about' className="px-4 py-2  hover:shadow-[inset_0_0_7px_2px_rgba(157,100,250,0.9)] transition ease-in text-white font-brand">
                                        About
                                    </button>
                                    <a href="https://blog.galaxygg.com/news" target='_blank' className="px-4 py-2  hover:shadow-[inset_0_0_7px_2px_rgba(157,100,250,0.9)] transition ease-in text-white font-brand" >
                                        News
                                    </a>
                                    <a href="https://blog.galaxygg.com/" target="_blank" className="px-4 py-2  hover:shadow-[inset_0_0_7px_2px_rgba(157,100,250,0.9)] transition ease-in text-white font-brand" >
                                        Blog
                                    </a>
                                    <div className='flex justify-end items-center w-[400px]' >

                                        <a href='https://gg-community.notion.site/gg-community/Welcome-to-the-Galaxy-Gaming-Community-e76a74ff643a419690cf91b6e5d06604' target='_blank' className=' elevateContainer text-white w-[12%] py-[5px] h-2/4 flex items-center justify-center border border-white mx-2 hover:shadow-[0_0_25px_5px_rgba(59,99,245,0.9)]' style={{ perspective: '200px' }}>

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-2/6 h-auto elevate'
                                                style={{
                                                    filter:
                                                        "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                                                }}><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fill-rule="evenodd" /></svg>
                                        </a>
                                        <a href='https://bit.ly/GG-WP' target='_blank' className=' elevateContainer text-white w-[12%] h-2/4 py-[5px] flex items-center justify-center border border-white mx-2 hover:shadow-[0_0_25px_5px_rgba(59,99,245,0.9)]' style={{ perspective: '200px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-2/6 h-auto elevate'
                                                style={{
                                                    filter:
                                                        "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                                                }}><path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z" /></svg>
                                        </a>
                                        <a href='https://www.linkedin.com/company/galaxy-gg/' target='_blank' className=' elevateContainer text-white w-[12%] h-2/4 py-[5px] flex items-center justify-center border border-white mx-2 mr-5 hover:shadow-[0_0_25px_5px_rgba(59,99,245,0.9)]' style={{ perspective: '200px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-2/6 h-auto elevate'
                                                style={{
                                                    filter:
                                                        "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                                                }}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                        </a>

                                        <a href='https://t.me/GalaxyGamingCommunity' target='_blank' className='elevateContainer text-white text-sm font-brand w-[50%] py-[7px] h-2/4 flex items-center justify-center border border-white hover:shadow-[0_0_25px_5px_rgba(157,100,250,0.9)]' style={{ perspective: '200px' }}>

                                            <span className='elevate'>JOIN TELEGRAM</span>

                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={() => { open === true ? setOpen(false) : setOpen(true) }} className=" text-white inline-flex items-center justify-center p-2 rounded-md">
                                <svg width={20} height={20} fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={` md:hidden w-screen z-100 absolute bg-black font-brand shadow`}>
                    <div className={` ${open === false ? 'hidden' : ''}  px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
                        <NavAnchor item={'Home'} goto={'/#'} setOpen={setOpen} />
                        <NavAnchor item={'About'} goto={'/#'} setOpen={setOpen} />
                        <NavAnchor item={'News'} goto={'https://galaxyguild.com/news/'} setOpen={setOpen} />
                        <NavAnchor item={'Blog'} goto={'https://galaxyguild.com/blog/'} setOpen={setOpen} />
                        <div className='flex items-center justify-center  w-[100%] '>
                            <a onTouchStart={handleEvent} onTouchEnd={handleEvent} href='https://t.me/GalaxyGamingCommunity' className={`elevateContainer text-white mb-[10px] font-brand w-[60%] py-[7px] h-2/4 flex items-center justify-center border border-white ${mousedown ? 'shadow-[0_0_25px_5px_rgba(157,100,250,0.9)]' : ''}`} >
                                <span className='elevate'>JOIN TELEGRAM</span>
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-[100%]' >
                            <SocialIcons llink={'https://gg-community.notion.site/gg-community/Welcome-to-the-Galaxy-Gaming-Community-e76a74ff643a419690cf91b6e5d06604'} svgicon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-2/6 h-auto elevate'
                                style={{
                                    filter:
                                        "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                                }}><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fill-rule="evenodd" /></svg>} />
                            <SocialIcons llink={'https://bit.ly/GG-WP'} svgicon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-2/6 h-auto elevate'
                                style={{
                                    filter:
                                        "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                                }}><path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z" /></svg>} />
                            <SocialIcons llink={'https://www.linkedin.com/company/galaxy-gg/'} svgicon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-2/6 h-auto elevate'
                                style={{
                                    filter:
                                        "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                                }}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>} />

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar