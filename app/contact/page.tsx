import React from 'react'
import Link from 'next/link'
import Image1 from '../img/Image1.jpg'
import Image from 'next/image'

function page() {
  return (
    <div className='Contact w-full bg-[#EFEAE7] py-[96px]'>
      <div className='Contact_socials mx-[20px] flex flex-col'>
        <div className='Contact_socials-address' >
          <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-address-top mb-[8px]'>ADDRESS</div>
          <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-address-bottom'>A-9,Khasra No. 371,<br></br>3rd Floor, Near Shiv Murti,<br></br>Rangpuri, New Delhi - 110037</div>
        </div>
        <div className='Contact_socials-phone mt-[32px]'>
          <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-phone-top mb-[8px]'>PHONE</div>
          <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-phone-bottom'>+91 70421 10100</div>
        </div>
        <div className='Contact_socials-email mt-[32px]'>
          <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-email-top mb-[8px]'>EMAIL</div>
          <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-email-bottom'>info@lotusglades.com</div>
        </div>
        <div className='Contact_socials-email mt-[32px] flex flex-col'>
          <div style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-social-top mb-[8px]'>SOCIALS</div>
          <Link style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-social-fb mb-[4px]' href="#">Facebook</Link>
          <Link style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-social-insta mb-[4px]' href="#">Instagram</Link>
          <Link style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-social-twitter mb-[4px]' href="#">Twitter</Link>
          <Link style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-social-linkedin mb-[4px]' href="#">LinkedIn</Link>
          <Link style={{ fontFamily: 'Apercu, sans-serif', fontSize: '16px', lineHeight: '140%' }} className='Contact_socials-social-whatsapp mb-[4px]' href="#">Whatsapp</Link>
        </div>
      </div>

      <div className='mt-[32px] relative mb-[200px]'>
        <div className='h-[520px] relative z-0'>
          <Image layout='fill' objectFit='cover' src={Image1} alt="im" />
        </div>
        <div className='absolute z-10 top-[192px] w-full flex justify-center'>
          <div className='bg-white w-[350px] py-[32px] px-[32px] flex flex-col justify-center text-center'>
            <div style={{ fontFamily: 'ClearfaceStd, sans-serif' }} className=' text-[48px] font-bold text-center pb-[32px]'>Send Inquiry</div>
            <form>
              <div className='flex justify-center items-center mb-[15px]'>
                <input
                  type='text'
                  name='name'
                  value={FormData.name}
                  className='bg-[#E8E8E8] text-black text-opacity-[50%] h-[54px] w-[286px] pl-[16px]'
                // onChange={handleChange}
                />
              </div>
              <div className='flex justify-center items-center mb-[15px]'>
                <input
                  type='text'
                  name='name'
                  value={FormData.name}
                  className='bg-[#E8E8E8] text-black text-opacity-[50%] h-[54px] w-[286px] pl-[16px]'
                // onChange={handleChange}
                />
              </div>
              <div className='flex justify-center items-center mb-[15px]'>
                <input
                  type='text'
                  name='name'
                  value={FormData.name}
                  className='bg-[#E8E8E8] text-black text-opacity-[50%] h-[54px] w-[286px] pl-[16px]'
                // onChange={handleChange}
                />
              </div>
              <div className='flex justify-center items-center mb-[15px]'>
                <input
                  type='text'
                  name='name'
                  value={FormData.name}
                  className='bg-[#E8E8E8] text-black text-opacity-[50%] h-[98px] w-[286px] pl-[16px]'
                // onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-LotusPink hover:bg-[#EFEAE7] hover:text-LotusPink text-white font-bold py-[12px] px-[64px] rounded-[200px]"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page