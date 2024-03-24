import React from 'react'
import '../Global.css'

const GalleryHeading = () => {
    return (
        <section className="m-auto max-w-[1250px] w-[100%] flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-[80px] leading-[73px] tracking-[-0.9px] lg:text-[70px] lg:leading-[63px] lg:tracking-[-3.5px] md:text-[50px] md:leading-[48px] md:tracking-[-1.5px]">
                Our <span className="text-transparent bg-clip-text "
                    style={{ backgroundImage: 'linear-gradient(145deg, #528adb 42.81%, #4c259e 57.76%)' }}
                > Events</span>
            </h1>
            <p className="w-3/4 md:w-[100%] p-4 text-[#787878] lg:text-[24px] md:text-[14.5px] font-normal mb-5 text-[19.5px]">
                Over the years, CYSCOM has conducted a number of exciting and innovative
                events and com petitions for spreading awareness of cybersecurity.
            </p>
        </section>
    )
}

export default GalleryHeading