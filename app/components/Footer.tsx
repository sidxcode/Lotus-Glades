import React from 'react';

import Link from 'next/link';

import { Fb } from './icons/Fb';
import { Twitter } from './icons/Twitter';
import { Insta } from './icons/Insta';
import { Whatsapp } from './icons/Whatsapp';
import { Linkedin } from './icons/Linkedin';

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className='footer bg-LotusPink w-full text-[#EFEAE7]'>

                    <div className='footer_container pt-[32px]  px-[20px]'>

                        <div style={{
                            fontFamily: 'ClearfaceStd, sans-serif',
                            fontSize: '48px',
                            lineHeight: '58px',
                            letterSpacing: '-3%'
                        }} className='fotter_container-title text-[#EFEAE7] text-center font-bold'>Lotus Glades
                        </div>

                        <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }}
                            className='footer_container_body mt-[24px] flex flex-row justify-between'>

                            <div className='footer_container_body-links'>
                                <div className='footer_container_body-links-home mb-[8px]'><a href='#'>Home</a></div>
                                <div className='footer_container_body-links-about mb-[8px]'><a href='#'>About</a></div>
                                <div className='footer_container_body-links-projects mb-[8px]'><a href='#'>Projects</a>
                                </div>
                                <div className='footer_container_body-links-blog'><a href='#'>Blog</a></div>
                            </div>

                            <div className='footer_container-body-contacts'>
                                <div className='footer_container-body-contacts-address mb-[8px]'>
                                    A-9, Khasra No. 371, 3rd Floor,<br /> Near Shiv Murti, Rangpuri,<br /> New Delhi - 110037
                                </div>
                                <div className='footer_container-body-contacts-number mb-[8px]'>
                                    +91 70421 10100
                                </div>
                                <div className='footer_container-body-contacts-mail mb-[8px]'>
                                    info@lotusglades.com
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        className='footer_container2 mt-[64px] pb-[32px] mx-[20px] flex justify-center items-center flex-col'>
                        <div className='footer_container2_socials  w-fit flex flex-col'>

                            <div className='footer_container2_socials-top flex flex-row mb-[8px] w-full'>
                                <Link href="/projects/123">
                                    <div
                                        className='footer_container2_socials-top-fb flex flex-row border-[1px] border-[#EFEAE7] hover:bg-[#EFEAE7] hover:text-LotusPink w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                                        <div className='footer_container2_socials-top-fb-icon h-[16px] w-[16px] '>
                                            <Fb />
                                        </div>
                                        <div
                                            style={{ fontFamily: 'Apercu, sans-serif', fontSize: '12px', lineHeight: '140%' }}
                                            className=' pl-[4px] footer_container2_socials-fb-name  '>Facebook
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/projects/123" className=''>
                                    <div
                                        className='footer_container2_socials-top-insta flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                                        <div className='footer_container2_socials-top-insta-icon h-[16px] w-[16px]'>
                                            <Insta />
                                        </div>
                                        <div
                                            style={{ fontFamily: 'Apercu, sans-serif', fontSize: '12px', lineHeight: '140%' }}
                                            className=' pl-[4px] footer_container2_socials-fb-name'>Instagram
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/projects/123" className=''>
                                    <div
                                        className='footer_container2_socials-top-twitter flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                                        <div className='footer_container2_socials-top-twitter-icon h-[16px] w-[16px]'>
                                            <Twitter />
                                        </div>
                                        <div
                                            style={{ fontFamily: 'Apercu, sans-serif', fontSize: '12px', lineHeight: '140%' }}
                                            className=' pl-[4px] footer_container2_socials-fb-name'>Twitter
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            <div className='footer_container2_socials-bottom flex flex-row w-full justify-center'>

                                <Link href="/projects/123" className=''>
                                    <div
                                        className='footer_container2_socials-bottom-linkedin flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                                        <div className='footer_container2_socials-bottom-linkedin-icon h-[16px] w-[16px]'>
                                            <Twitter />
                                        </div>
                                        <div
                                            style={{ fontFamily: 'Apercu, sans-serif', fontSize: '12px', lineHeight: '140%' }}
                                            className=' pl-[4px] footer_container2_socials-fb-name'>Linkedin
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/projects/123" className=''>
                                    <div
                                        className='footer_container2_socials-bottom-whatsapp flex flex-row border-[1px] border-[#EFEAE7] w-fit rounded-[40px] py-[6px] px-[20px] mr-[8px]'>
                                        <div className='footer_container2_socials-bottom-whatsapp-icon h-[16px] w-[16px]'>
                                            <Whatsapp />
                                        </div>
                                        <div
                                            style={{ fontFamily: 'Apercu, sans-serif', fontSize: '12px', lineHeight: '140%' }}
                                            className=' pl-[4px] footer_container2_socials-fb-name'>Whatsapp
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='footer_container2_pixelcanine mt-[24px] w-full flex justify-center'>
                            <div style={{ fontFamily: 'Apercu , Inter, sans-serif', fontSize: '12px' }}>Lotus Glades -
                                Lovingly handcrafted by <span style={{ fontWeight: 'bold' }}>Pixel Canine</span></div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}