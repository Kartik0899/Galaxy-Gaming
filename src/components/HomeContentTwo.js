import React from 'react'

function HomeContentTwo() {
    const [mousedown, setMouseDown] = React.useState(false)

    const handleEvent = (event) => {
        if (event.type === "touchstart") {

            setMouseDown(true)
        } else {

            setMouseDown(false)
        }
    }
    return (
        <div className='text-white w-10/12 md:w-2/3  h-4/5 flex flex-col justify-center relative'>

            <div className='font-brand text-5xl md:text-left text-center'>
                BRING THE GAME
            </div>
            <div className='md:text-left text-center mt-8 w-full text-lg'>
                <p>The Galaxy Gaming Community is an online gaming and social community where players can meet, discuss and explore Web 3.0 games.</p>
                <p>We seek to cultivate a high-value and diverse community of enthusiasts that believe in the potential of Web 3.0 gaming!</p>
                <p className='mt-3'>Join our Telegram group now to learn more about our community events!</p>
            </div>

            <div className='flex flex-col md:flex-row gap-4 mt-10 md:mt-32 justify-center md:justify-end '>

                <a onTouchStart={handleEvent} onTouchEnd={handleEvent} href='https://gg-community.notion.site/gg-community/Welcome-to-the-Galaxy-Gaming-Community-e76a74ff643a419690cf91b6e5d06604' target='_blank' className={` border border-white scale-75 md:scale-100 mx-4 p-3 md:w-3/12 md:h-14 flex justify-around items-center font-brand md:hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)] ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} >
                    JOIN NOTION

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[12%]'
                        style={{
                            filter:
                                "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                        }}><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fill-rule="evenodd" /></svg>

                </a>

                <a onTouchStart={handleEvent} onTouchEnd={handleEvent} href='https://t.me/GalaxyGamingCommunity' target='_blank' className={` border border-white scale-75 md:scale-100 p-3 md:w-3/12 md:h-14 flex justify-around items-center font-brand md:hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)] ${mousedown ? 'shadow-[0_0_15px_1px_rgba(255,255,255,0.7)]' : ''}`} >
                    JOIN TELEGRAM

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-[12%]' style={{
                        filter:
                            "invert(99%) sepia(100%) saturate(1%) hue-rotate(66deg) brightness(104%) contrast(100%)",
                    }}><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg>

                </a>
            </div>
        </div>
    )
}

export default HomeContentTwo