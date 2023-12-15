import Image from 'next/image'
import Link from 'next/link';
import {getTests} from '@/sanity/sanity-utlis'
import {getBg} from '@/sanity/sanity-utlis';

import Image1 from './img/Image1.jpg'
import {Service1} from './components/icons/Service1';
import {Service2} from './components/icons/Service2';
import {Service3} from './components/icons/Service3';

import {Fb} from './components/icons/Fb';
import {Insta} from './components/icons/Insta';
import {Twitter} from './components/icons/Twitter';
import {Linkedin} from './components/icons/Linkedin';
import {Whatsapp} from './components/icons/Whatsapp';
import Carousel from "@/app/components/Carousel";
import Carousel2 from "@/app/components/Carousel2";

export default async function Home() {
    const tests = await getTests();
    const bg = await getBg();

    return (
        <div className='body bg-[#EFEAE7] py-[64px]'>

            {/*hero starts*/}
            <div className='hero w-full px-[20px] h-screen flex flex-col'>

                <div className='hero_img bg-slate-200 h-[517.5px] w-full relative'>
                    <Image layout = 'fill' src={Image1} alt= "1"/>
                    {/* insert image from cms */}
                </div>

                <div className='hero_text mt-[32px]'>

                    <div style={{
                        fontFamily: 'ClearfaceStd , sans-serif',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        letterSpacing: '-3%',
                        lineHeight: '58px'
                    }} className='hero_text-title'>
                        A Mindset of Abundance
                    </div>
                    <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}}
                         className='hero_text-body mt-[16px]'>
                        Lotus Glades offers innovative opportunities for clients in Delhi&apos;s L-Zone as per our
                        understanding of Delhi Masterplan 2041. With expertise in Land & Farmhouse, development, we
                        provide high-end luxury living complying with the GDA policy and LDRA approved Farmhouses. Our
                        land parcels in Jhatikra & Kanganheri (Delhi Pincode 110043) present an exceptional early-stage
                        investment opportunity in approved Farmhouses.
                    </div>
                    
                </div>
            </div>
            {/* hero ends */}

            <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

            {/* featured starts here */}
            <div className='featured w-full px-[20px] flex flex-col lg:flex-row'>
                <div className='featured_text lg:w-[33%]'>
                    <div style={{
                        fontFamily: 'ClearfaceStd , sans-serif',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        letterSpacing: '-3%',
                        lineHeight: '58px'
                    }} className='featured_text-title'>
                        Featured Projects
                    </div>
                    <div style={{fontFamily: 'Apercu, sans-serif', lineHeight: '140%'}}
                         className='featured_text-body mt-[16px]'>
                        Escape to charm and comfort in our featured farmhouses. Discover local treasures, embrace the
                        simple life, and create memories that last a lifetime.
                    </div>
                </div>
                {/*<div className='mt-[32px] lg:ml-[32px]'>*/}
                {/*  <div className='h-[193.5px] w-[350px] bg-slate-300'>*/}
                {/*  <Image src= {Image1} alt='' style={{height : '100%' , width : '100%'}}/>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <Carousel/>
            </div>
            {/* featured ends here */}

            <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

            {/* case study starts */}
            <div className='CaseStudy px-[20px] w-full'>
                <Carousel2/>
            </div>

            {/* case study ends here */}

            <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>

            {/* services start here */}
            <div className='Services w-full px-[20px] '>
                <div style={{
                    fontFamily: 'ClearfaceStd , sans-serif',
                    fontWeight: 'bold',
                    fontSize: '48px',
                    letterSpacing: '-3%',
                    lineHeight: '58px'
                }} className='Services_title text-center'>Our Services
                </div>
                <div className='Services_list mt-[32px] flex flex-col justify-center md:flex-row w-full'>

                    <div
                        className='Services_list-1 flex flex-col justify-center md:w-[30%] items-start md:mt-[32px] md:mr-[32px]'>
                        <div className='Services_list-1_logo w-full flex justify-center'>
                            <div
                                className='Services_list-1_logo-svg w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex justify-center'>
                                <Service1/>
                            </div>
                        </div>

                        <div className='Services_list-1_text flex flex-col justify-center'>
                            <div
                                style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', letterSpacing: '-3%'}}
                                className='Services_list-1_text-title text-center'>Sale & Purchase
                            </div>
                            <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%'}}
                                 className='Sertext_list-1_text-body text-center'>Buy or sell your dream farmhouse with
                                ease.
                                Expert agents, comprehensive services, personalized approach.
                                Market analysis, financing, legal support, and more.
                                Let&apos;s find your perfect farm escape.
                            </div>
                        </div>
                    </div>

                    <div className='Services_list-2 flex flex-col justify-center md:w-[30%] mt-[32px] md:mr-[32px]'>
                        <div className='Services_list-2_logo w-full flex justify-center'>
                            <div style={{height: 'auto'}}
                                 className='Services_list-1_logo flex justify-center w-[100px] h-[100px] md:w-[200px] md:h-[200px]'>
                                <Service2/>
                            </div>
                        </div>
                        <div className='Services_list-2_text flex flex-col justify-center'>
                            <div
                                style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', letterSpacing: '-3%'}}
                                className='Services_list-1_text-title text-center'>Development & Construction
                            </div>
                            <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%'}}
                                 className='Sertext_list-1_text-body text-center'>Experienced team, expert planning,
                                sustainable solutions.
                                Turnkey services, high-quality construction, timely completion.
                                From concept to reality, your farmhouse awaits.
                            </div>
                        </div>
                    </div>

                    <div className='Services_list-3 flex flex-col justify-center w-full md:w-[30%] mt-[32px]'>
                        <div className='Services_list-3_logo w-full flex justify-center'>
                            <div style={{height: 'auto'}}
                                 className='Services_list-1_logo w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex justify-center'>
                                <Service3/>
                            </div>
                        </div>
                        <div className='Services_list-3_text flex flex-col justify-center'>
                            <div
                                style={{fontFamily: 'ClearfaceStd, sans-serif', fontSize: '28px', letterSpacing: '-3%'}}
                                className='Services_list-1_text-title text-center'>Consulting & Management
                            </div>
                            <div style={{fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%'}}
                                 className='Sertext_list-1_text-body text-center'>Effortless living, worry-free
                                enjoyment.
                                Maintenance, landscaping, staff, security.
                                Relax and unwind, your haven awaits.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* services end here */}

            {/* <div className='h-screen'>
        <div>my tests go here</div>
        {tests.map ((test)=>(
          <div key={test._id}>
            {test.image && (
              <Image
                src={test.image}
                alt={test.alt}
                width={250}
                height={100}
                />
            )}
            {test.name}
          </div>

        ))}
      </div> */}

        </div>
    );
}