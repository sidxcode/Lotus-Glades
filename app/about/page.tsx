import Link from 'next/link';
import Image1 from '../img/Image1.jpg';
import Image from 'next/image';
import Acc from '../components/Acc';

export default function Page() {
    return (
        <div className='about w-full bg-[#EFEAE7]'>
            <div className='hero py-[64px] w-full px-[20px] h-fit flex flex-col'>
                <div style={{
                    fontFamily: 'ClearfaceStd , sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '-3%',
                    lineHeight: '58px'
                }} className='hero_text-title text-[48px] md:text-[60px] '>
                    About Lotus Glades
                </div>


                <div className='hero_text mt-[32px] flex flex-col md:flex-col-reverse h-fit'>
                    <div className='hero_img h-[517.5px] w-full relative'>
                        <Image layout='fill' objectFit='cover' src={Image1} alt="1" />
                        {/* insert image from cms */}
                    </div>
                    <div style={{ fontFamily: 'Apercu, sans-serif', lineHeight: '140%' }}
                        className='hero_text-body mt-[16px] md:mt-[0px] md:mb-[32px] text-[16px]'>
                        We are a professional organization, promoted by Industry veterans and professionals, specializing in designing, developing and managing High end farmhouses, Rural Retreats and Low density residential and recreational eco-habitats. Our intent is to cater to individual HNIs, groups of professionals, organizations and investors seeking participation and indulgence in premium customized farms and farmhouse projects in scenic locations.
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-black mx-[20px] '></div>
            {/* <div className='about-top w-full h-fit flex flex-col mx-[20px]'> */}

            {/* <div style={{
                    fontFamily: 'ClearfaceStd , sans-serif',
                    fontWeight: 'bold',
                    fontSize: '48px',
                    letterSpacing: '-3%',
                    lineHeight: '58px'
                }} className='hero_text-title'>
                    About Lotus Glades
                </div>

                <div className='about-bottom mt-[32px] flex flex-col md:flex-col-reverse w-full'>
                    <div className='about-bottom_img bg-slate-200 h-[517.5px] w-full relative'>
                        <Image layout='fill' src={Image1} alt="1" />
                    </div>

                    <div style={{ fontFamily: 'Apercu, sans-serif', lineHeight: '140%' }}
                        className='about-bottom-bio mt-[16px] md:mb-[32px]'>
                        We are a professional organization, promoted by Industry veterans and professionals, specializing in designing, developing and managing High end farmhouses, Rural Retreats and Low density residential and recreational eco-habitats. Our intent is to cater to individual HNIs, groups of professionals, organizations and investors seeking participation and indulgence in premium customized farms and farmhouse projects in scenic locations.
                    </div>

                </div> */}
            {/* </div> */}

            {/* <div className='border-t-2 border-black my-[64px] mx-[20px]'></div>
            <div className='about flex justify-center bg-slate-600 mx-[20px] h-screen'>
                <div className='about_img bg-slate-200 h-[339px] w-full flex bg-red'> */}
            {/* <div className='h-[339px] w-fit relative'> */}
            {/* <Image layout='fill' src={Image1} alt="1"/> */}
            {/* </div> */}
            {/* insert image from cms */}
            {/* <div className='w-full h-fit bg-red-300'>
                        <Acc/>
                    </div>
                </div>
            </div> */}

            <div className='border-t-2 border-black mx-[20px] '></div>

            <div className='mx-[20px] lg:mx-[138px] flex flex-col justify-center items-center h-fit py-[64px]'>
                <div style={{
                    fontFamily: 'ClearfaceStd , sans-serif',
                    letterSpacing: '-3%',
                }} className='hero_text-title mb-[16px] text-[28px] md:text-[36px] leading-[34px] md:leading-[43px]'>
                    All apartments, commercial spaces and shopping plazas look alike. Is that what you desire from your recreational farm?
                </div>

                <div className='w-full grid grid-cols-4 gap-[10px]'>
                    <div className='h-[300px] relative'><Image layout='fill' objectFit='cover' src={Image1} alt="" /></div>
                    <div className='h-[300px] relative'><Image layout='fill' objectFit='cover' src={Image1} alt="" /></div>
                    <div className='h-[300px] relative'><Image layout='fill' objectFit='cover' src={Image1} alt="" /></div>
                    <div className='h-[300px] relative'><Image layout='fill' objectFit='cover' src={Image1} alt="" /></div>
                </div>

                <div className='mt-[32px]'>
                    <div style={{
                        fontFamily: 'ClearfaceStd , sans-serif',
                        fontWeight: 'bold',
                        letterSpacing: '-3%',
                    }} className='hero_text-title my-[16px] text-[48px] md:text-[60px] leading-[58px] md:leading-[72px]'>
                        Wouldn't you want a <span style={{ fontStyle: 'italic' }}>very bespoke farmhouse project?</span>
                    </div>
                </div>

            </div>

            <div className='Image bg-slate-200 h-[640px] w-full relative'>
                <Image layout='fill' objectFit='cover' src={Image1} alt="1" />
                {/* insert image from cms */}
            </div>

            <div className='mx-[20px] lg:mx-[138px] flex flex-col justify-center items-center h-fit py-[96px]'>
                <div style={{
                    fontFamily: 'ClearfaceStd , sans-serif',
                    letterSpacing: '-3%',
                }} className='hero_text-title mb-[16px] text-[28px] md:text-[36px] leading-[34px] md:leading-[43px] text-center'>
                    That&apos;s what we endeavor; to create projects & products that are close to your wish-list.
                </div>

                <div className='mt-[32px] flex justify-center'>
                    <div style={{
                        fontFamily: 'ClearfaceStd , sans-serif',
                        fontWeight: 'bold',
                        letterSpacing: '-3%',
                    }} className='hero_text-title text-[48px] md:text-[60px] leading-[58px] md:leading-[72px] text-center'>
                        Let&apos;s take the scenic road, <span style={{ fontStyle: 'italic' }}>together</span>
                    </div>
                </div>

            </div>


        </div>
    )
}