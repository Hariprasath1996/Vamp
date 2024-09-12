import React, { useState,useEffect } from 'react'
import "./Slides.css"
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
const Slides = ({ items }) => {
    
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === items.length - 1 ? 0 : slide + 1)
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? items.length - 1 : slide - 1)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId);
    }, [slide]);
    return (
        <div className='slides'>
            <FaCircleArrowLeft className='arrow arrow-left' onClick={prevSlide} />
            {
                items.map((item, index) => {
                    return <>
                        <img className={slide === index ? "slide-image" : "slide-image slide-hidden"} src={item.src} alt={item.alt} key={index} />
                    </>
                })
            }
            <FaCircleArrowRight className='arrow arrow-right' onClick={nextSlide} />
            <span className='indicators' >
                {items.map((_, index) => {
                    return <button className={slide === index ? "indicator" : "indicator indicator-inactive"} key={index} onClick={() => setSlide(index)}></button>
                })}
            </span>
        </div>
    )
}

export default Slides
