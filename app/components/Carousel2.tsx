"use client"

import {useState, useEffect} from "react";
import Image1 from "../img/Image1.jpg"
import Image2 from "../img/Image2.jpg"
import Image3 from "../img/Image3.jpg"
import Image from "next/image";

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel2 = () => {

    const cases = [
        {
            title: "The Sunken Courtyard",
            description: "The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the\n" +
                "outskirts of Delhi. It features a traditional courtyard design with modern elements,\n" +
                "offering a tranquil haven amidst the bustling city.",
            image: Image1,
            link1: "#",
            link2: "#"
        },
        {
            title: "The Sunken Courtyard",
            description: "The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the\n" +
                "outskirts of Delhi. It features a traditional courtyard design with modern elements,\n" +
                "offering a tranquil haven amidst the bustling city.",
            image: Image1,
            link1: "#",
            link2: "#"
        },
        {
            title: "The Sunken Courtyard",
            description: "The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the\n" +
                "outskirts of Delhi. It features a traditional courtyard design with modern elements,\n" +
                "offering a tranquil haven amidst the bustling city.",
            image: Image1,
            link1: "#",
            link2: "#"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='CaseStudy_card flex flex-col lg:flex-row'>
            <Slider {...settings} className="overflow-hidden">
                <div className='CaseStudy_card_text'>
                    <div className='h-[261px] w-[350px]'>
                        <Image src={Image1} alt={'case-study-image'} className="h-full w-full"/>
                    </div>
                    <div style={{
                        fontFamily: 'ClearfaceStd , sans-serif',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        letterSpacing: '-3%',
                        lineHeight: '58px'
                    }} className='CaseStudy_card_text-title mt-[32px]'>
                        The Sunken Courtyard
                    </div>
                    <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}}
                         className='CaseStudy_card_text-title mt-[16px]'>
                        The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the
                        outskirts of Delhi. It features a traditional courtyard design with modern elements,
                        offering a tranquil haven amidst the bustling city.
                    </div>
                    <div className='border-t-2 border-black my-[16px] md:w-[453px]'></div>

                    <div className='CaseStudy_card_links w-full flex flex-row justify-evenly'>
                        <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px'}}
                             className='CaseStudy_card_links-link1'><a href='#'>Link1</a></div>
                        <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px'}}
                             className='CaseStudy_card_links-link2'><a href='#'>Link2</a></div>
                    </div>
                    <div className='CaseStudy_dots w-full flex flex-row justify-center my-[16px]'>
                        <div className='CaseStudy_dots-dot1 h-[20px] w-[20px] bg-black rounded-xl mr-[8px]'></div>
                        <div
                            className='CaseStudy_dots-dot2 h-[20px] w-[20px] rounded-xl border-2 border-black mr-[8px]'></div>
                        <div
                            className='CaseStudy_dots-dot3 h-[20px] w-[20px] rounded-xl border-2 border-black'></div>
                    </div>
                </div>

                <div className='CaseStudy_card_text'>
                    <div className='h-[261px] w-[350px]'>
                        <Image src={Image3} alt={'case-study-image'} className="h-full w-full object-bottom"/>
                    </div>
                    <div style={{
                        fontFamily: 'ClearfaceStd , sans-serif',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        letterSpacing: '-3%',
                        lineHeight: '58px'
                    }} className='CaseStudy_card_text-title mt-[32px]'>
                        The Lotus Temple
                    </div>
                    <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}}
                         className='CaseStudy_card_text-title mt-[16px]'>
                        The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the
                        outskirts of Delhi. It features a traditional courtyard design with modern elements,
                        offering a tranquil haven amidst the bustling city.
                    </div>
                    <div className='border-t-2 border-black my-[16px] md:w-[453px]'></div>

                    <div className='CaseStudy_card_links w-full flex flex-row justify-evenly'>
                        <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px'}}
                             className='CaseStudy_card_links-link1'><a href='#'>Link1</a></div>
                        <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px'}}
                             className='CaseStudy_card_links-link2'><a href='#'>Link2</a></div>
                    </div>
                    <div className='CaseStudy_dots w-full flex flex-row justify-center my-[16px]'>
                        <div
                            className='CaseStudy_dots-dot2 h-[20px] w-[20px] rounded-xl border-2 border-black mr-[8px]'></div>
                        <div className='CaseStudy_dots-dot1 h-[20px] w-[20px] bg-black rounded-xl mr-[8px]'></div>
                        <div
                            className='CaseStudy_dots-dot3 h-[20px] w-[20px] rounded-xl border-2 border-black'></div>
                    </div>
                </div>

                <div className='CaseStudy_card_text'>
                    <div className='h-[261px] w-[350px]'>
                        <Image src={Image2} alt={'case-study-image'} className="h-full w-full"/>
                    </div>
                    <div style={{
                        fontFamily: 'ClearfaceStd , sans-serif',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        letterSpacing: '-3%',
                        lineHeight: '58px'
                    }} className='CaseStudy_card_text-title mt-[32px]'>
                        The Extravagant Qutub Minar
                    </div>
                    <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}}
                         className='CaseStudy_card_text-title mt-[16px]'>
                        The Sunken Courtyard Farmhouse is a unique property located in a quiet village on the
                        outskirts of Delhi. It features a traditional courtyard design with modern elements,
                        offering a tranquil haven amidst the bustling city.
                    </div>
                    <div className='border-t-2 border-black my-[16px] md:w-[453px]'></div>

                    <div className='CaseStudy_card_links w-full flex flex-row justify-evenly'>
                        <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px'}}
                             className='CaseStudy_card_links-link1'><a href='#'>Link1</a></div>
                        <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px'}}
                             className='CaseStudy_card_links-link2'><a href='#'>Link2</a></div>
                    </div>
                    <div className='CaseStudy_dots w-full flex flex-row justify-center my-[16px]'>
                        <div
                            className='CaseStudy_dots-dot2 h-[20px] w-[20px] rounded-xl border-2 border-black mr-[8px]'></div>
                        <div
                            className='CaseStudy_dots-dot3 h-[20px] w-[20px] rounded-xl border-2 border-black mr-[8px]'></div>
                        <div className='CaseStudy_dots-dot1 h-[20px] w-[20px] bg-black rounded-xl'></div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel2