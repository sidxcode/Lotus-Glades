"use client"

import { useState, useEffect } from "react";
import Image1 from "../img/Image1.jpg"
import Image from "next/image";

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {

    const images = [
        Image1, Image1, Image1
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='mt-[32px] lg:ml-[32px] flex'>
              <Slider {...settings} className="w-[350px] h-[193.5px] bg-white overflow-hidden gap-2">
                      {images.map((image, index) => (
                          <div className="p-2 bg-[#EFEAE7]">
                              <Image
                                  key={index}
                                  src={image}
                                  alt={'Featured Products'}
                              />
                          </div>
                      ))}
              </Slider>
        </div>
    )
}

export default Carousel